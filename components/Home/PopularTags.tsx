import { popularTags } from '@/constant/homeLeftSidebar';
import SidebarListItem from './SidebarListItem';

const PopularTags = () => {
  return (
    <aside className='asideContainerLarge'>
      <header>
        <h3 className='display-semibold mb-5 text-darkSecondary-900 dark:text-white-800'>
          Popular Tags
        </h3>
      </header>
      <ul>
        {popularTags.map((item) => (
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

export default PopularTags;
