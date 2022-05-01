import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

import { createEmotionCache } from "./styles/create-emotion-cache";
import { ServerStyleContextProvider } from "./styles/style-context";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const element = (
    <CacheProvider value={cache}>
      <RemixServer context={remixContext} url={request.url} />
    </CacheProvider>
  );

  const html = renderToString(
    <ServerStyleContextProvider value={null}>
      {element}
    </ServerStyleContextProvider>
  );

  const chunks = extractCriticalToChunks(html);

  const markup = renderToString(
    <ServerStyleContextProvider value={chunks.styles}>
      {element}
    </ServerStyleContextProvider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
