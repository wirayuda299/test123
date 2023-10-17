import Image from 'next/image';

import { podcasts } from '@/public/constants';
import { PodcastsCard } from '../index';

const SidePodcasts = () => {
  return (
    <div className='w-full self-center p-5 bg-white dark:bg-darkPrimary-3 shadow-md pb-2.5 rounded-2xl'>
      <h3 className='display-semibold text-darkSecondary-900 dark:text-white-800 flex items-baseline pb-2.5'>
        Podcasts
        <Image
          className='ml-2'
          src='icons/rightArr.svg'
          alt='rightArr'
          width={12}
          height={10}
        />
      </h3>

      {podcasts?.map((item) => (
        <PodcastsCard
          key={item.id}
          cardData={{
            img: item.image,
            alt: item.id,
            title: item.title,
            author: item.author,
          }}
        />
      ))}
    </div>
  );
};

export default SidePodcasts;
