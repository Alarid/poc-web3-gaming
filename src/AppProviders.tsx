import { Web3AuthProvider } from "./services/web3auth"

export default function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return <Web3AuthProvider>{children}</Web3AuthProvider>
}
