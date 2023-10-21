import { postLeftWidget } from '@/constant/postLeftSidebar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostOpenLeft = () => {
  return (
    <div className='flex h-52 w-52 items-start justify-start gap-2.5 rounded-2xl bg-white p-5 dark:bg-gray-800'>
      <ul className='flex flex-col items-start justify-start gap-5'>
        {postLeftWidget.map((item) => (
          <li key={item.id}>
            <Link href='' className='flex items-center justify-start gap-3.5'>
              <div
                className={`${
                  item.isHeart ? 'bg-secondary-red-10' : 'bg-white-800'
                } flex aspect-square items-center justify-center rounded-[6px] p-1 dark:bg-darkPrimary-3 dark:md:bg-darkPrimary-4`}
              >
                <Image
                  src={item.icon}
                  alt={`${item.iconName} icon`}
                  width={20}
                  height={20}
                  className='object-contain dark:brightness-200'
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
            </Link>
          </li>
        ))}

        {/* Report */}
        <li>
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

export default PostOpenLeft;
