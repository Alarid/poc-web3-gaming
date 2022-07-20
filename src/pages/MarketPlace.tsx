import { useMarketPlaceItems } from '../api/marketplace/marketplace.hooks';
import Container from '../components/Container';
import Spinner from '../components/Spinner';

const TOKEN = 'ETH';

export default function MarketPlace() {
  const { items, isLoading } = useMarketPlaceItems();

  return (
    <Container title="Market Place">
      <div className="flex flex-wrap gap-8 justify-center">
        {isLoading && (
          <div className="my-auto">
            <Spinner />
          </div>
        )}
        {items?.map((item) => (
          <div
            key={item.name}
            className="w-72 p-8 bg-dark rounded-3xl shadow-md flex flex-col gap-4 text-secondary hover:scale-105 cursor-pointer"
          >
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
        ))}
      </div>
    </Container>
  );
}
