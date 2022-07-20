import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { Web3AuthProvider } from './services/web3auth';

const RETRY_COUNT = 3;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error: any) => {
        if (error?.response?.status === 404) return false;
        else if (failureCount < RETRY_COUNT - 1) return true;
        else return false;
      },
      retryDelay: 1500,
    },
  },
});

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3AuthProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </Web3AuthProvider>
    </QueryClientProvider>
  );
}
