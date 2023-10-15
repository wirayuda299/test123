import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Explore() {
  return (
    <section className='mt-5'>
      <div className='flex items-center justify-between rounded-2xl bg-white p-5 dark:bg-darkPrimary-3'>
        <h4 className='text-base font-semibold text-darkSecondary-900 dark:text-white-800'>
          Explore
        </h4>
        <div className='flex items-center gap-6'>
          <Button className='inline-flex gap-2 bg-white-800 hover:bg-white-700 dark:bg-darkPrimary-4 dark:hover:bg-darkPrimary-3'>
            <Image
              src={'/assets/icons/new.svg'}
              width={30}
              height={30}
              alt='new icon'
            />
            <span className='text-xs font-bold text-darkSecondary-900 dark:text-white'>
              New
            </span>
          </Button>
          <Button className='inline-flex gap-2 bg-white-800 hover:bg-white-700 dark:bg-secondary-red-10 '>
            <Image
              src={'/assets/icons/popular.svg'}
              width={20}
              height={20}
              alt='popular icon'
            />
            <span className='text-xs font-bold !text-secondary-red-80 dark:text-white'>
              Popular
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
