import NewAndPopular from './NewAndPopular';
import PinnedGroups from './PinnedGroups';
import PopularTags from './PopularTags';

const HomeRightSidebar = () => {
  return (
    <aside className='leftSidebar gap-[20px]'>
      <NewAndPopular />
      <PopularTags />
      <PinnedGroups />
    </aside>
  );
};

export default HomeRightSidebar;
