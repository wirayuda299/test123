import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className=' w-full flex-1 rounded-2xl bg-white p-3 dark:bg-darkPrimary-3 md:p-5'>
      <Image
        className='h-full min-h-[200px] w-full rounded-2xl object-cover object-center'
        src={'/assets/images/banner.png'}
        sizes='100vw'
        width={765}
        height={200}
        priority
        fetchPriority='high'
        alt='banner'
      />
      <div className='flex flex-wrap items-center justify-between gap-5 py-5'>
        <div className='flex items-center gap-3 md:gap-5'>
          <Image
            className='w-[70px] object-contain'
            src={'/assets/images/logo.png'}
            width={50}
            height={50}
            alt='group logo'
          />

          <div className='text-darkSecondary-900 dark:text-white-800'>
            <h2 className='text-base font-semibold lg:text-3xl '>
              Design Discussion
            </h2>
            <p className='text-10 font-normal dark:text-darkSecondary-800 md:text-sm'>
              Created by{' '}
              <span className='font-semibold dark:text-white-800'>
                {' '}
                AR Jakir
              </span>
            </p>
          </div>
        </div>
        <Button className='flex w-[150px] items-center gap-2 bg-white-700 hover:bg-white-800 dark:bg-darkPrimary-4 dark:hover:bg-darkPrimary-2 max-sm:w-full'>
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
