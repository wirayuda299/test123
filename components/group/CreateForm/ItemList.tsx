import type { Dispatch, SetStateAction } from 'react';

import { Button } from '@/components/ui/button';

type ItemListProps = {
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
};
export default function ItemList({ items, setItems }: ItemListProps) {
  if (items.length < 1) return;

  return (
    <div className='flex flex-wrap items-center gap-5'>
      {items.slice(0, 3).map((admin) => (
        <Button
          type='button'
          className='relative w-20 bg-white-800 text-darkPrimary-2 hover:bg-white-700 dark:bg-darkPrimary-4 dark:text-white-800 dark:hover:bg-darkPrimary-3'
          key={admin}
        >
          <span
            className='absolute right-0 top-0 cursor-pointer'
            onClick={() =>
              setItems((prev) => prev.filter((current) => current !== admin))
            }
          >
            x
          </span>
          {admin}
        </Button>
      ))}
    </div>
  );
}
