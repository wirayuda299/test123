import NewAndPopular from './NewAndPopular';
import PinnedGroups from './PinnedGroups';
import PopularTags from './PopularTags';

const HomeLeftSidebar = () => {
  return (
    <aside className='leftSidebar'>
      <NewAndPopular />
      <PopularTags />
      <PinnedGroups />
    </aside>
  );
};

export default HomeLeftSidebar;
