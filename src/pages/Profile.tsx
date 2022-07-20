import React from 'react';

import JSONPretty from 'react-json-pretty';
import { useQuery } from 'react-query';
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

  const { data: userInfos } = useQuery('userInfo', getUserInfo);
  const { data: accounts } = useQuery('accounts', getAccounts);

  function logOutput(callback: () => Promise<any>) {
    callback().then((output) => setOutput(JSON.stringify(output, null, 4)));
  }

  return (
    <Container title="Profile">
      {userInfos && (
        <div className="flex justify-center max-w-[50%] mx-auto">
          {userInfos.profileImage && (
            <img
              src={userInfos.profileImage}
              alt={userInfos.name}
              className="w-32 h-32 rounded-full mr-4 border-[1px] border-primary"
            />
          )}
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl text-secondary">{userInfos.name}</h2>
            <small className="text-sm text-primary font-semibold">
              {userInfos.email}
            </small>
            {userInfos.typeOfLogin && (
              <p className="mt-2">
                <strong className="inline">Login type: </strong>
                {userInfos.typeOfLogin}
              </p>
            )}
            {accounts && (
              <p>
                <strong className="inline">Accounts: </strong>
                {accounts.join(', ')}
              </p>
            )}
          </div>
        </div>
      )}

      <nav className="mt-12">
        <ul className="list-none text-primary flex justify-center gap-4">
          {/* <li>
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
          </li> */}
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
