import { useNavigate, useParams } from 'react-router-dom';
import ArrowLeft from '@heroicons/react/outline/ArrowLeftIcon';
import CreditCard from '@heroicons/react/outline/CreditCardIcon';

import { useMarketPlaceItem } from '~/api/marketplace/marketplace.hooks';
import Spinner from '~/components/Spinner';
import Button from '~/components/Button';
import { TOKEN } from '~/api/marketplace/marketplace.constants';

export default function Item() {
  const navigate = useNavigate();
  const { itemId } = useParams<{ itemId: string }>();
  const { item, isFetching } = useMarketPlaceItem(itemId as string);

  if (isFetching) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="bg-red-500 text-white text-center p-4">
        Item not found
      </div>
    );
  }

  return (
    <div className="relative text-secondary">
      <Button
        onClick={() => navigate('..')}
        className="mb-4 absolute top-[-90px]"
      >
        <ArrowLeft className="inline w-4 h-4 mr-1" />
        Back
      </Button>
      <div className="flex gap-8 justify-center">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="rounded-3xl bg-secondary w-96"
        />
        <div className="flex flex-col gap-4 flex-1 max-w-lg">
          <div className="flex w-full justify-between">
            <h2 className="text-2xl">{item.name}</h2>
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
          </div>
          <div className="bg-dark flex justify-between items-center rounded-md shadow-md p-4 mt-auto">
            <div className="flex flex-col">
              <span>Current prise</span>
              <span className="text-2xl font-semibold">
                {item.price} {TOKEN}
              </span>
            </div>
            <Button
              className="w-fit"
              onClick={() => alert('Not yet implemented...')}
            >
              <CreditCard className="inline w-4 h-4 mr-1" />
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
