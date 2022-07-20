import React from 'react';

import { Web3Auth } from '@web3auth/web3auth';
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base';

import RPC from './solana';

type Web3AuthState = {
  web3auth: Web3Auth | null;
  provider: SafeEventEmitterProvider | null;
};

const initialState: Web3AuthState = {
  web3auth: null,
  provider: null,
};

const Web3AuthContext = React.createContext<{
  state: Web3AuthState;
  update: (nextState: Partial<Web3AuthState>) => void;
}>({ state: initialState, update: () => {} });
Web3AuthContext.displayName = 'Web3AuthContext';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

export function Web3AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<Web3AuthState>({
    web3auth: null,
    provider: null,
  });

  function update(nextState: Partial<Web3AuthState>) {
    setState((prevState) => ({ ...prevState, ...nextState }));
  }

  React.useEffect(() => {
    async function init() {
      try {
        if (!CLIENT_ID) {
          throw new Error('Missing Web3 Auth Client ID');
        }

        const web3auth = new Web3Auth({
          clientId: CLIENT_ID,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.SOLANA,
            chainId: '0x1',
            rpcTarget: 'https://rpc.ankr.com/solana',
          },
          uiConfig: {
            theme: 'dark',
          },
        });

        await web3auth.initModal();

        // Log the user in straight away
        const web3authProvider = await web3auth.connect();
        if (web3authProvider) {
          // We arleady have a provider, which means we retrieved a user from the session
          update({ provider: web3authProvider, web3auth });
        } else {
          update({ web3auth });
        }
      } catch (error) {
        console.error(error);
      }
    }

    init();
  }, []);

  return (
    <Web3AuthContext.Provider value={{ state, update }}>
      {children}
    </Web3AuthContext.Provider>
  );
}

export function useWeb3Auth() {
  const context = React.useContext(Web3AuthContext);
  if (!context) {
    throw new Error('useWeb3Auth must be used within a Web3AuthProvider');
  }
  const {
    state: { web3auth, provider },
    update,
  } = context;

  async function login() {
    if (!web3auth) {
      throw new Error('Web3 Auth not initialized');
    }
    const web3authProvider = await web3auth.connect();
    update({ provider: web3authProvider });
  }

  async function getUserInfo() {
    if (!web3auth) {
      throw new Error('Web3 Auth not initialized');
    }
    const userInfo = await web3auth.getUserInfo();
    return userInfo;
  }

  async function logout() {
    if (!web3auth) {
      throw new Error('Web3 Auth not initialized');
    }
    await web3auth.logout();
    update({ provider: null });
  }

  async function getAccounts() {
    if (!provider) {
      throw new Error('Provider not initialized');
    }
    const rpc = new RPC(provider);
    const userAccounts = await rpc.getAccounts();
    return userAccounts;
  }

  async function getBalance() {
    if (!provider) {
      throw new Error('Provider not initialized');
    }
    const rpc = new RPC(provider);
    const userBalance = await rpc.getBalance();
    return userBalance;
  }

  async function signMessage() {
    if (!provider) {
      throw new Error('Provider not initialized');
    }
    const rpc = new RPC(provider);
    const userSignature = await rpc.signMessage();
    console.log(userSignature);
  }

  async function signTransaction() {
    if (!provider) {
      throw new Error('Provider not initialized');
    }
    const rpc = new RPC(provider);
    const userSignature = await rpc.signTransaction();
    console.log(userSignature);
  }

  async function sendTransaction() {
    if (!provider) {
      throw new Error('Provider not initialized');
    }
    const rpc = new RPC(provider);
    const result = await rpc.signAndSendTransaction();
    console.log(result);
  }

  return {
    provider,
    login,
    getUserInfo,
    logout,
    getAccounts,
    getBalance,
    signMessage,
    signTransaction,
    sendTransaction,
  };
}
