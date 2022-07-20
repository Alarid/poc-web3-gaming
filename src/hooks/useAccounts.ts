import { useQuery } from 'react-query';

import { useWeb3Auth } from '../services/web3auth';

export function useAccounts() {
  const { getAccounts } = useWeb3Auth();
  const { data: accounts, ...rest } = useQuery('accounts', getAccounts);

  return { accounts, ...rest };
}
