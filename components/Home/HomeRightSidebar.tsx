import NewAndPopular from './NewAndPopular';
import PinnedGroups from './PinnedGroups';
import PopularTags from './PopularTags';

const HomeRightSidebar = () => {
  return (
    <aside className='rightSidebar'>
      {/* These need to be replaced with Suraj's components */}
      <NewAndPopular />
      <PopularTags />
      <PinnedGroups />
    </aside>
  );
};

export default HomeRightSidebar;
