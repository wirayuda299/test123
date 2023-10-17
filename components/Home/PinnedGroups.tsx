import Image from 'next/image';

import { pinnedGroups } from '@/constant/homeLeftSidebar';
import SidebarListItem from './SidebarListItem';

const PinnedGroups = () => {
  return (
    <aside className='asideContainerLarge'>
      <header className='mb-5 flex items-center justify-start'>
        <h3 className='display-semibold mr-2 text-darkSecondary-900 dark:text-white-800'>
          Pinned Groups
        </h3>
        <Image
          src='/assets/leftSideBarHome/arrow-right.svg'
          alt='Right arrow'
          width={20}
          height={20}
          className='dark:contrast-200 dark:grayscale dark:invert'
        />
      </header>
      <ul>
        {pinnedGroups.map((item) => (
          <SidebarListItem
            key={item.id}
            id={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
            isFollowingNumberHidden={item.isFollowingNumberHidden}
            hashtag={item.hashtag}
            noOfPosts={item.noOfPosts}
            bgColor={item.bgColor}
          />
        ))}
      </ul>
    </aside>
  );
};

export default PinnedGroups;
