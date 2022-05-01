import { createContext, useContext } from "react";

// ========================================================
// Server
// ========================================================
export interface ServerStyleContextData {
  key: string;
  ids: Array<string>;
  css: string;
}

const ServerStyleContext = createContext<Array<ServerStyleContextData> | null>(
  null,
);

export const ServerStyleContextProvider = ServerStyleContext.Provider;

export function useServerStyleData() {
  return useContext(ServerStyleContext);
}

// ========================================================
// Client
// ========================================================
export interface ClientStyleContextData {
  reset: () => void;
}

const ClientStyleContext = createContext<ClientStyleContextData | null>(null);

export const ClientStyleContextProvider = ClientStyleContext.Provider;

export function useClientStyleData() {
  return useContext(ClientStyleContext);
}
