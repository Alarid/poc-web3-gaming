import { useWeb3Auth } from './services/web3auth';
import AuthenticatedApp from './AuthenticatedApp';
import Spinner from './components/Spinner';

export default function App() {
  // If we have a provider, we're authenticated
  const { provider } = useWeb3Auth();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {provider ? <AuthenticatedApp /> : <Spinner />}
    </div>
  );
}
