import Image from 'next/image';
import { Button } from '../ui/button';
import Statistic from './statistic';

export default function InterviewsPostCard() {
  return (
    <div className='flex w-full flex-col gap-2.5 rounded-2xl bg-white p-5 dark:bg-darkPrimary-4 max-lg:max-w-full'>
      <div className='flex w-full items-start justify-between gap-[30px]'>
        <div className='flex w-full flex-col items-start justify-start gap-5'>
          <header className='inline-flex items-center justify-start gap-4'>
            <Image
              className='h-11 w-11 rounded-full'
              src={'/assets/images/profile.svg'}
              alt='post author image'
              width={44}
              height={44}
            />
            <div className='inline-flex flex-col items-start justify-start'>
              <h3 className='text-sm font-semibold leading-normal text-darkSecondary-900 dark:text-white-800 md:text-base'>
                Valentin Hinov
              </h3>
              <p className='text-xs font-normal leading-snug text-neutral-400 md:text-sm'>
                Today, 17 February
              </p>
            </div>
          </header>
          <Image
            alt='post'
            width={280}
            height={180}
            className='block w-full rounded-lg object-contain lg:hidden'
            src={'/assets/images/illustration.png'}
          />
          <p className='text-base font-semibold leading-relaxed text-darkSecondary-900 dark:text-white-800 md:text-lg'>
            How I Launched and Grew My Startup by 500% During the COVID Crisis
          </p>
          <div className='flex w-full flex-wrap items-center justify-between gap-5'>
            <Statistic />
            <Button className=' flex items-center justify-center gap-2.5 rounded !bg-secondary-blue'>
              <span className='text-sm font-semibold leading-snug text-white'>
                Full Details
              </span>
            </Button>
          </div>
        </div>
        <Image
          alt='post'
          width={280}
          height={180}
          className='hidden h-[180px] w-[280px] rounded-lg lg:block'
          src={'/assets/images/illustration.png'}
        />
      </div>
    </div>
  );
}
