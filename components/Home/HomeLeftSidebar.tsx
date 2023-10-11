import NewAndPopular from "./NewAndPopular";
import PinnedGroups from "./PinnedGroups";
import PopularTags from "./PopularTags";

const HomeLeftSidebar = () => {
  return (
    <aside className='leftSidebar gap-[20px]'>
      <NewAndPopular />
      <PopularTags />
      <PinnedGroups />
    </aside>
  );
};

export default HomeLeftSidebar;
