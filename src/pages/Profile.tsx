import React from 'react';

import JSONPretty from 'react-json-pretty';
import XIcon from '@heroicons/react/outline/XIcon';

import Button from '../components/Button';
import Container from '../components/Container';
import { useWeb3Auth } from '../services/web3auth';

export default function Profile() {
  const [output, setOutput] = React.useState<string | undefined>();

  const {
    getUserInfo,
    getAccounts,
    getBalance,
    signMessage,
    signTransaction,
    sendTransaction,
    logout,
  } = useWeb3Auth();

  function logOutput(callback: () => Promise<any>) {
    callback().then((output) => setOutput(JSON.stringify(output, null, 4)));
  }

  return (
    <Container>
      <h1 className="text-3xl text-primary text-center mb-4">Profile</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        euismod, nisl eget consectetur consectetur, nisl nunc consectetur nisl,
        eget consectetur nisl nunc eget consectetur.
      </p>
      <nav className="mt-8">
        <ul className="list-none text-primary flex justify-center items-center gap-4 flex-wrap">
          <li>
            <Button onClick={() => logOutput(getUserInfo)} className="card">
              Get User Info
            </Button>
          </li>
          <li>
            <Button onClick={() => logOutput(getAccounts)} className="card">
              Get Accounts
            </Button>
          </li>
          <li>
            <Button onClick={() => logOutput(getBalance)} className="card">
              Get Balance
            </Button>
          </li>
          <li>
            <Button onClick={signMessage} className="card">
              Sign Message
            </Button>
          </li>
          <li>
            <Button onClick={signTransaction} className="card">
              Sign Transaction
            </Button>
          </li>
          <li>
            <Button onClick={sendTransaction} className="card">
              Send Transaction
            </Button>
          </li>
          <li>
            <Button onClick={logout} className="card">
              Log Out
            </Button>
          </li>
        </ul>
      </nav>

      {output && (
        <div className="overflow-auto mx-8 mt-8 w-full min-h-[100px] relative">
          <button
            className="absolute top-0 right-8 m-4 p-4"
            onClick={() => setOutput(undefined)}
          >
            <XIcon className=" text-white w-5 h-5" />
          </button>
          <JSONPretty data={output} className="text-white mx-8" />
        </div>
      )}
    </Container>
  );
}
