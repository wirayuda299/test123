'use client';

import Card from './Card';
import Header from './Header';
import { GroupSidebar } from '@/types/group-sidebar';

type SidebarItemProps = {
  content: GroupSidebar;
  handleCLick?: () => void;
  selectedContent: GroupSidebar | null;
};

export default function SidebarItem({
  content,
  handleCLick,
  selectedContent,
}: SidebarItemProps) {
  return (
    <div
      onClick={handleCLick}
      className='mb-2 flex w-full cursor-pointer flex-col items-start space-y-5'
    >
      <Header {...content} />
      <div className=' flex flex-col items-start gap-3'>
        {selectedContent
          ? selectedContent.items.map((item) => (
              <Card
                key={item.title}
                {...item}
                style='text-darkPrimary-2 dark:text-white-800'
              />
            ))
          : content.items
              .slice(0, 3)
              .map((item) => (
                <Card
                  key={item.title}
                  {...item}
                  style='text-darkPrimary-2 dark:text-white-800'
                />
              ))}
        {!selectedContent && (
          <button
            onClick={handleCLick}
            className='w-max rounded-full bg-secondary-purple-20 px-2 py-[2px] text-9 font-semibold text-secondary-purple'
          >
            See All
          </button>
        )}
      </div>
    </div>
  );
}
