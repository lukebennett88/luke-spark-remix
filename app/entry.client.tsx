import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "@remix-run/react";
import { useState } from "react";
import { hydrate } from "react-dom";

import { createEmotionCache } from "./styles/create-emotion-cache";
import { ClientStyleContextProvider } from "./styles/style-context";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContextProvider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContextProvider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
