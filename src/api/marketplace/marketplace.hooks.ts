import { useQuery } from 'react-query';
import { client } from '../api-client';
import { Item } from './marketplace.types';

export function useMarketPlaceItems() {
  const { data: items, ...rest } = useQuery<Item[]>('marketplace-items', () =>
    client('items'),
  );
  return { items, ...rest };
}
