import Image from 'next/image';

import MeetupDetailsChip from './MeetupDetailsChip';

const MeetupChip = () => {
  return (
    <section className='w-full self-center p-5 bg-white dark:bg-darkPrimary-3 shadow-md pb-2.5 rounded-2xl'>
      <h3
        className='display-semibold text-darkSecondary-900 dark:text-white-800 flex
        items-baseline pb-2.5'
      >
        Meetups
        <Image
          className='ml-2'
          src='icons/rightArr.svg'
          alt='rightArr'
          width={12}
          height={10}
        />
      </h3>
      <MeetupDetailsChip />
    </section>
  );
};

export default MeetupChip;
