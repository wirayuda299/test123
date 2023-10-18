import Image from 'next/image';

import { Badge } from '../../ui/badge';
import { meetupsData } from '@/constant';

const MeetupsWrapper = () => {
  return (
    <>
      {meetupsData?.map((meetupData) => (
        <section
          className='w-full p-5 shadow-md rounded-2xl bg-white dark:bg-darkPrimary-3  mb-4'
          key={meetupData.companyName}
        >
          <div key={meetupData.companyName}>
            {/* Meetup Quick Informatio */}
            <article className='flex justify-between items-center'>
              <div className='flex'>
                <Image
                  className='w-12 sm:w-20'
                  src={meetupData.image}
                  width={100}
                  height={100}
                  quality={100}
                  alt={meetupData.companyName}
                />
                <div className='px-5 flex flex-col justify-evenly'>
                  <h1 className='bodyMd-semibold md:heading3 text-darkSecondary-900 dark:text-white'>
                    {meetupData.title}
                  </h1>
                  <p className='bodySm-semibold md:body-regular text-darkSecondary-800'>
                    {meetupData.companyName} - {meetupData.location}
                  </p>
                </div>
              </div>

              <time className='border-2 px-3 py-1 text-center border-darkSecondary-600 rounded-md md:px-4 md:py-2 dark:border-none dark:shadow-darkShadow'>
                <p className='bodyMd-semibold sm:display-semibold uppercase text-darkSecondary-900 dark:text-white'>
                  Feb
                </p>
                <p className='display-semibold sm:heading1 text-secondary-blue'>
                  7
                </p>
              </time>
            </article>

            {/* Description about meetup card */}
            <div className='bodyMd-regular md:body-regular my-6 text-darkSecondary-900 dark:text-white'>
              {meetupData.description}
            </div>
            <figcaption className='flex'>
              {meetupData.tags?.map((tag) => (
                <Badge
                  key={tag}
                  className='bodyXs-semibold md:bodyMd-semibold text-darkSecondary-700 mr-2.5 bg-white-700 dark:bg-darkPrimary-4'
                  variant='secondary'
                >
                  {tag}
                </Badge>
              ))}
            </figcaption>
          </div>
        </section>
      ))}
    </>
  );
};

export default MeetupsWrapper;
