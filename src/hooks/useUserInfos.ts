import { useQuery } from 'react-query';

import { useWeb3Auth } from '../services/web3auth';

export function useUserInfos() {
  const { getUserInfo } = useWeb3Auth();
  const { data: userInfos, ...rest } = useQuery('userInfo', getUserInfo);

  return { userInfos, ...rest };
}
