import { Link } from 'react-router-dom';

import { TOKEN } from '~/api/marketplace/marketplace.constants';
import { useMarketPlaceItems } from '~/api/marketplace/marketplace.hooks';
import Spinner from '~/components/Spinner';

export default function Items() {
  const { items, isLoading } = useMarketPlaceItems();

  if (isLoading) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {items?.map((item) => (
        <Link key={item.id} to={item.id}>
          <div className="w-72 p-8 bg-dark rounded-3xl shadow-md flex flex-col gap-4 text-secondary hover:scale-105 cursor-pointer">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="rounded-3xl bg-secondary"
            />
            <div className="flex justify-between items-center">
              <span className="font-semibold">{item.name}</span>
              <span className="bg-primary px-2 py-1 rounded-lg text-sm text-white">
                {item.type}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={item.seller.avatarUrl}
                alt={item.seller.name}
                className="w-8 h-8 rounded-md"
              />
              <div className="flex flex-col">
                <small className="text-xs text-slate-300">Creator</small>
                <span className="text-sm">{item.seller.name}</span>
              </div>
              <span className="ml-auto font-semibold">
                {item.price} {TOKEN}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
