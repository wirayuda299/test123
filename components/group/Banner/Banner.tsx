import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className=' rounded-2xl bg-white p-5 dark:bg-darkPrimary-3'>
      <Image
        className='rounded-2xl'
        src={'/assets/images/banner.png'}
        width={765}
        height={174}
        alt='banner'
      />
      <div className='flex items-center justify-between gap-5 py-5'>
        <div className='flex items-center gap-5'>
          <Image
            src={'/assets/images/logo.png'}
            width={50}
            height={50}
            alt='group logo'
          />

          <div className='text-darkSecondary-900 dark:text-white-800'>
            <h2 className='text-3xl font-semibold '>Design Discussion</h2>
            <p className='text-sm font-normal dark:text-darkSecondary-800'>
              Created by{' '}
              <span className='font-semibold dark:text-white-800'>
                {' '}
                AR Jakir
              </span>
            </p>
          </div>
        </div>
        <Button className='flex items-center gap-2 bg-white-700'>
          <Image
            src={'/assets/icons/leave.svg'}
            width={20}
            height={20}
            alt='leave icon'
          />
          <span className='font-semibold text-darkSecondary-800'>Leave</span>
        </Button>
      </div>
    </section>
  );
}
