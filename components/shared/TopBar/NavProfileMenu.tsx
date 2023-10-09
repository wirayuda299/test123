import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MessageDropDown from "./MessageDropDown";
import ProfileDropDown from "./ProfileDropDown";

const NavProfileMenu = () => {
  // For testing
  const testUser = {
    name: "AR. Jakir",
    avatar: "/assets/navigation/profile-image.png",
  };

  return (
    <section className='relative flex items-center justify-between'>
      <div className='flex items-center gap-[10px] lg:gap-[15px]'>
        {/* Messages Icon with Dropdown */}
        <div className='profileIconContainer'>
          <MessageDropDown />
        </div>

        {/* User */}
        {/* Avatar */}
        <Avatar className='navProfileAvatarContainer'>
          <AvatarImage
            src={testUser.avatar}
            alt='Avatar'
            width={39}
            height={38}
            className='navProfileAvatarImage'
          />
          <AvatarFallback className='rounded-lg'>HN</AvatarFallback>
        </Avatar>
        <div className=' flex items-center justify-between gap-[5px] lg:gap-[10px]'>
          {/* Name */}
          <h6 className='navProfileName'>{testUser.name}</h6>
          {/* Dropdown Menu with Dark Mode toggle (Arrow Icon) */}
          <ProfileDropDown />
        </div>
      </div>
    </section>
  );
};

export default NavProfileMenu;
