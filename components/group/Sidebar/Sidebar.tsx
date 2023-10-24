'use client';

import Image from 'next/image';
import { useState } from 'react';

import { sidebarContents } from '@/constant';
import SidebarItem from './Item';
import { GroupSidebar } from '@/types/group-sidebar';

export default function Sidebar() {
  const [selectedContent, setSelectedContent] = useState<GroupSidebar | null>(
    null,
  );

  const handleSelectedContent = (item: GroupSidebar | null) => {
    setSelectedContent(item);
  };

  return (
    <div className='hidden w-full overflow-y-hidden p-3 hover:overflow-y-auto dark:bg-darkPrimary-3 lg:block lg:h-screen [&>*:not(:first-child)]:pt-5'>
      {selectedContent && (
        <button
          className=' flex h-9 w-9 items-center justify-center rounded-full bg-white-800 dark:bg-darkPrimary-4'
          onClick={() => setSelectedContent(null)}
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
        <SidebarItem
          content={selectedContent}
          selectedContent={selectedContent}
        />
      ) : (
        sidebarContents.map((content) => (
          <SidebarItem
            key={content.label}
            content={content}
            selectedContent={selectedContent}
            handleClick={handleSelectedContent}
          />
        ))
      )}
    </div>
  );
}
