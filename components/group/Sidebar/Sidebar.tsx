'use client';

import Image from 'next/image';
import { useState } from 'react';

import SidebarItem from './Item';
import Mobile from './Mobile';
import { sidebarContents } from '@/constant';
import { GroupSidebar } from '@/types/group-sidebar';

export default function Sidebar() {
  const [selectedContent, setSelectedContent] = useState<GroupSidebar | null>(
    null,
  );

  const handleSelectedContent = () => {
    if (selectedContent) return setSelectedContent(null);
    return undefined;
  };

  return (
    <aside className='h-full min-w-[250px] rounded-3xl bg-white dark:bg-darkPrimary-3 max-lg:min-w-full lg:sticky lg:top-0'>
      <Mobile />
      <div className='no-scrollbar hidden w-full overflow-y-auto rounded-2xl p-3 dark:bg-darkPrimary-3 lg:block lg:h-screen [&>*:not(:first-child)]:mt-5'>
        {selectedContent && (
          <button
            className='flex h-9 w-9 items-center justify-center rounded-full bg-white-800 dark:bg-darkPrimary-4'
            onClick={handleSelectedContent}
          >
            <Image
              className='dark:invert'
              src={'/assets/icons/back.svg'}
              width={20}
              alt='back icon'
              height={20}
            />
          </button>
        )}
        {selectedContent ? (
          <SidebarItem content={selectedContent} />
        ) : (
          sidebarContents.map((content) => (
            <SidebarItem
              key={content.label}
              content={content}
              handleCLick={() => setSelectedContent(content)}
            />
          ))
        )}
      </div>
    </aside>
  );
}
