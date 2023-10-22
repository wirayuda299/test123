import Image from 'next/image';
import React from 'react';
import { Progress } from '@/components/ui/progress';

import { diskLight, songThumb } from '@/public/images';
import { Button } from '@/components/ui/button';

const Podcast = () => {
  return (
    <main className='max-container  pb-10 w-full md:w-4/6'>
      <section className='bg-white dark:bg-darkPrimary-3 p-5 rounded-2xl'>
        <div className='w-full flex flex-col md:flex-row'>
          <aside className='flex relative'>
            <Image
              className='z-10 rounded-lg'
              src={songThumb}
              alt='thumb'
              width={150}
              height={150}
            />
            <Image
              className='-left-3 relative z-0 md:-left-8'
              src={diskLight}
              alt='disk'
              width={130}
              height={130}
            />
          </aside>
          <div className='flex-grow'>
            <p className='bodyMd-regular text-darkSecondary-900 dark:text-white'>
              Hipnod • Episode 243
            </p>
            <h3 className='heading3 text-darkSecondary-900 dark:text-white'>
              by Courtland Allen
            </h3>
            <div className='py-4 flex items-center'>
              <Progress value={33} className='h-2.5 mr-5' />
              <p className='body-semibold flex-grow whitespace-nowrap text-darkSecondary-900 dark:text-white'>
                00:00 | 63:37
              </p>
            </div>
            <div className='flex'>
              <Button className='rounded-[20px] !bg-secondary-blue !hover:bg-secondary-blue-90 display-semibold !text-white'>
                <Image
                  className='mr-2'
                  src='/icons/playIcon.svg'
                  width={16}
                  height={16}
                  alt='playIcon'
                />
                Play Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className='my-5 bg-white dark:bg-darkPrimary-3 p-5 rounded-2xl'>
        <h1 className='heading1-semibold text-darkSecondary-900 dark:text-white'>
          #243 – Mental Health and Bootstrapping in 2022 with Rob Walling of
          TinySeed
        </h1>

        <div className='text-darkSecondary-800 pt-5 '>
          <h3 className='display-semibold'>EPISODE DETAILS</h3>
          <p className='py-6 display-regular'>
            In this episode I'm chat with Rob Walling (@robwalling) about a wide
            range of topics including metal health, how to find a business idea
            and the relevance of bootstrapping today.
          </p>
          <h3 className='display-semibold'>SHOW NOTES</h3>
          <p className='display-regular'>
            In this episode I'm chat with Rob Walling about a wide range of
            topics including metal health, how to find a business idea and the
            relevance of bootstrapping today.
          </p>
          <ul className='list-disc	list-inside py-6 pl-3 display-regular break-words'>
            <li>Follow Rob on Twitter: https://twitter.com/robwalling</li>
            <li>Apply to TinySeed: https://tinyseed.com/apply </li>
            <li>
              Listen to Startups for the Rest of Us:
              https://www.startupsfortherestofus.com/
            </li>
          </ul>
          <h3 className='display-semibold'>WHAT IS INDIE HACKERS?</h3>
          <p>
            Courtland Allen interviews the ambitious indie hackers who are
            turning their ideas and side projects into profitable online
            businesses. Explore the latest strategies and tools founders are
            using to capitalize on new opportunities, escape the 9-to-5 grind,
            and create their own personal revenue-generating machines. The
            future is indie!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Podcast;
