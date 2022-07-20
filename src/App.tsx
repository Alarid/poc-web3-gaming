import { useWeb3Auth } from './services/web3auth';
import AuthenticatedApp from './AuthenticatedApp';

export default function App() {
  // If we have a provider, we're authenticated
  const { provider } = useWeb3Auth();

  return (
    <div className="h-screen bg-dark flex flex-col justify-center items-center">
      {provider ? (
        <AuthenticatedApp />
      ) : (
        <div
          className="spinner-border animate-spin inline-block w-16 h-16 border-b-4 rounded-full border-primary"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}
