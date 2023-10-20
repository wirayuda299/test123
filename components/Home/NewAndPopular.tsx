import { newAndPopular } from "@/constant/homeLeftSidebar";
import SidebarListItem from "./SidebarListItem";

const NewAndPopular = () => {
  return (
    <aside className='asideContainerSmall'>
      <ul>
        {newAndPopular.map((item) => (
          <SidebarListItem
            key={item.id}
            id={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
            isFollowingNumberHidden={item.isFollowingNumberHidden}
          />
        ))}
      </ul>
    </aside>
  );
};

export default NewAndPopular;
