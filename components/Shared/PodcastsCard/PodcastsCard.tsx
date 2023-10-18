import Image from 'next/image';

import { rightArr } from '@/public/icons';

type Props = {
  cardData: {
    img: string;
    alt: string;
    title: string;
    author: string;
  };
};

const PodcastsCard = ({ cardData }: Props) => {
  return (
    <section className='w-full my-2.5 flex items-center justify-between'>
      <Image
        className='shadow-postCardImgShadow'
        src={cardData.img}
        alt={cardData.alt}
        width={100}
        height={100}
      />

      <div className='px-3'>
        <p className='bodyMd-semibold text-darkSecondary-900 dark:text-white-800'>
          {cardData.title}
        </p>
        <p className='bodySm-regular text-darkSecondary-800 pt-1.5'>
          {cardData.author}
        </p>
      </div>
      <div>
        <Image src='icons/rightArr.svg' width={30} height={30} alt='rightArr' />
      </div>
    </section>
  );
};

export default PodcastsCard;
