'use client';

import Card from './Card';
import Header from './Header';
import { GroupSidebar } from '@/types/group-sidebar';

type SidebarItemProps = {
  content: GroupSidebar;
  selectedContent: GroupSidebar | null;
  handleClick?: (item: GroupSidebar | null) => void;
};

export default function SidebarItem({
  content,
  selectedContent,
  handleClick,
}: SidebarItemProps) {
  return (
    <div
      onClick={() => (handleClick ? handleClick(content) : undefined)}
      className='mb-2 flex w-full cursor-pointer flex-col items-start space-y-5'
    >
      <Header {...content} />
      <div className=' flex flex-col items-start gap-3'>
        {selectedContent
          ? selectedContent.items.map((item) => (
              <Card
                key={item.text}
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
            onClick={() => (handleClick ? handleClick(content) : undefined)}
            className='w-max rounded-full bg-secondary-purple-20 px-2 py-[2px] text-9 font-semibold text-secondary-purple'
          >
            See All
          </button>
        )}
      </div>
    </div>
  );
}
