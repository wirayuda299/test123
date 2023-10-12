import Link from 'next/link';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import ProfileDropDown from './ProfileDropDown';
import { Button } from '@/components/ui/button';
import DarkModeToggle from './DarkModeToggle';
import MessageDropDown from './MessageDropDown';

const NavProfileMenu = () => {
  // For testing
  const testUser = {
    name: 'AR. Jakir',
    avatar: '/assets/navigation/profile-image.png',
  };
  const isLoggedIn: boolean = true;

  return (
    <section className='relative flex shrink-0 items-center justify-between'>
      <div className='flex items-center gap-[10px] lg:gap-[15px]'>
        {isLoggedIn ? (
          <>
            <div className='profileIconContainer'>
              <MessageDropDown />
            </div>
            <Avatar className='navProfileAvatarContainer rounded-lg'>
              <AvatarImage
                src={testUser.avatar}
                alt='Avatar'
                width={39}
                height={38}
                className='navProfileAvatarImage'
              />
              <AvatarFallback className='rounded-lg'>HN</AvatarFallback>
            </Avatar>
            <div className='flex items-center justify-between gap-[5px] lg:gap-[10px]'>
              <h6 className='navProfileName'>{testUser.name}</h6>
              <ProfileDropDown />
            </div>
          </>
        ) : (
          <div className='flex flex-1 items-center justify-center gap-[15px] py-3 md:gap-[24px]'>
            <Link href='#' className='signupButton'>
              Signup
            </Link>
            <Link href='#'>
              <Button className='loginButton'>Login</Button>
            </Link>
            <DarkModeToggle isTextHidden={true} />
          </div>
        )}
      </div>
    </section>
  );
};

export default NavProfileMenu;
