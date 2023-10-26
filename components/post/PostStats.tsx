import Image from 'next/image';
import Link from 'next/link';

import { postStats } from '@/constants/post';

const PostStats = () => {
  return (
    <div className='flex w-full shrink-0 gap-2.5 rounded-2xl bg-white p-5 px-7 dark:bg-darkPrimary-3'>
      <ul className='flex shrink-0 flex-col gap-5'>
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
              <div
                className={`${
                  item.isHeart
                    ? 'text-darkSecondary dark:text-white'
                    : 'text-darkSecondary-800'
                } display-regular`}
              >
                {item.amount} {item.iconName}
              </div>
            </div>
          </li>
        ))}

        {/* Report */}
        <li className='cursor-pointer'>
          <Link href='' className='flex items-center justify-start gap-3.5'>
            <div className='flex aspect-square items-center justify-center rounded-[6px] bg-white-800 p-1 dark:bg-darkPrimary-3 dark:md:bg-darkPrimary-4'>
              <Image
                src='/assets/posts/report.svg'
                alt='Report icon'
                width={20}
                height={20}
                className='object-contain dark:brightness-200'
              />
            </div>
            <div className='display-regular text-darkSecondary-800'>Report</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PostStats;
