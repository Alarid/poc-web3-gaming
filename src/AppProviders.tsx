import { BrowserRouter } from "react-router-dom"

import { Web3AuthProvider } from "./services/web3auth"

export default function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Web3AuthProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </Web3AuthProvider>
  )
}
