import Image from 'next/image';

import { postStats } from '@/constants/post';
import Report from './Report';

const PostStats = () => {
  return (
    <div className='flex w-full shrink-0 gap-2.5 rounded-2xl bg-white p-5 px-7 dark:bg-darkPrimary-3'>
      <ul className='flex w-full shrink-0 flex-col gap-5'>
        {postStats.map((item) => (
          <li key={item.id}>
            <div className='flex items-center justify-start gap-3.5'>
              <div
                className={`${
                  item.isHeart ? '!bg-secondary-red-10' : 'bg-white-800'
                } flex aspect-square items-center justify-center rounded-[6px] p-1.5 dark:bg-darkPrimary-4`}
              >
                <Image
                  src={item.icon}
                  alt={`${item.iconName} icon`}
                  width={20}
                  height={20}
                  className={`object-contain ${
                    item.isHeart ? '' : 'dark:brightness-200 dark:contrast-200 '
                  }`}
                />
              </div>
              <p
                className={`${
                  item.isHeart
                    ? 'text-darkSecondary dark:text-white'
                    : 'text-darkSecondary-800'
                } display-regular`}
              >
                {item.amount} {item.iconName}
              </p>
            </div>
          </li>
        ))}

        {/* Report */}
        <li className='w-full cursor-pointer'>
          <Report user='Mansurel Haque' />
        </li>
      </ul>
    </div>
  );
};

export default PostStats;
