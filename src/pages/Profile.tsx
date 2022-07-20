import React from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import Container from '~/components/Container';
import { useWeb3Auth } from '~/services/web3auth';
import { useUserInfos } from '~/hooks/useUserInfos';
import { useAccounts } from '~/hooks/useAccounts';

export default function Profile() {
  const navigate = useNavigate();

  const { logout, login } = useWeb3Auth();
  const { userInfos } = useUserInfos();
  const { accounts } = useAccounts();

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
          <li>
            <Button
              onClick={() => {
                logout().then(() => {
                  navigate('/');
                  login();
                });
              }}
              className="card"
            >
              Log Out
            </Button>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
