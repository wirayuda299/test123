import Image from 'next/image';

import { meetupsData } from '@/constant';
import { Badge } from '../../ui/badge';

const MeetupDetailsChip = () => {
  return (
    <>
      {meetupsData?.map((meetupData) => (
        <section className='flex mb-5' key={meetupData.companyName}>
          <time className='border-[1px] px-2.5 py-1 text-center border-darkSecondary-600 rounded-md dark:border-none dark:shadow-darkShadow mr-3 flex flex-col justify-center'>
            <p className='bodyMd-semibold sm:display-semibold uppercase text-darkSecondary-900 dark:text-white'>
              Feb
            </p>
            <p className='display-semibold sm:heading1 text-secondary-blue'>
              7
            </p>
          </time>

          <main className='overflow-hidden'>
            <p className='bodyMd-semibold sm:display-semibold uppercase text-darkSecondary-900 dark:text-white text-ellipsis overflow-hidden whitespace-nowrap'>
              {meetupData.title}
            </p>

            <div className='flex'>
              <Image
                className='rounded-full w-4 mr-1.5'
                width={100}
                height={100}
                src='/images/job1.svg'
                alt='user-ava'
              />

              <p className='bodySm-semibold md:body-regular text-darkSecondary-800 mt-0.5'>
                {meetupData.companyName} - {meetupData.location}
              </p>
            </div>

            <div className='flex flex-wrap gap-2 mt-2.5'>
              {meetupData.tags?.map((tag) => (
                <Badge
                  key={tag}
                  className='bodyXs-semibold md:bodyMd-semibold text-darkSecondary-700 mr-2.5 bg-white-700 dark:bg-darkPrimary-4'
                  variant='secondary'
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </main>
        </section>
      ))}
    </>
  );
};

export default MeetupDetailsChip;
