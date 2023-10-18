'use client';

import { useState, MouseEvent } from 'react';

import Card from './Card';
import Header from './Header';
import { GroupSidebar } from '@/types/group-sidebar';

type SidebarItemProps = {
  content: GroupSidebar;
  handleCLick?: () => void;
};

export default function SidebarItem({
  content,
  handleCLick,
}: SidebarItemProps) {
  const [sliceNum, setSliceNum] = useState<number>(3);

  const handleExpandContent = (e: MouseEvent) => {
    e.stopPropagation();
    if (sliceNum >= content.items.length) {
      setSliceNum(3);
    } else {
      setSliceNum(content.items.length);
    }
  };

  return (
    <div
      onClick={handleCLick}
      className='mb-2 flex w-full cursor-pointer flex-col items-start space-y-5'
    >
      <Header {...content} />
      <div className=' flex flex-col items-start gap-3'>
        {content.items.slice(0, sliceNum).map((item) => (
          <Card
            key={item.title}
            {...item}
            style='text-darkPrimary-2 dark:text-white-800'
          />
        ))}
        <button
          onClick={handleExpandContent}
          className='w-max rounded-full bg-secondary-purple-20 px-2 py-[2px] text-9 font-semibold text-secondary-purple'
        >
          {sliceNum >= content.items.length ? 'Hide all' : 'See All'}
        </button>
      </div>
    </div>
  );
}
