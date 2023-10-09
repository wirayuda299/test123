import { AiOutlineCaretDown } from "react-icons/ai";
import DropDownLoggedIn from "./DropDownLoggedIn";
import DropDownLoggedOut from "./DropDownLoggedOut";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

const ProfileDropDown = () => {
  const isLoggedIn: boolean = false; // for testing

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* Arrow Button */}
          <NavigationMenuTrigger className='pl-1 dark:bg-darkPrimary-3 dark:hover:bg-darkPrimary-3'>
            <AiOutlineCaretDown className='profileDropDownArrow' />
          </NavigationMenuTrigger>

          {/* Dropdown */}
          {isLoggedIn ? (
            // The user is logged in
            <DropDownLoggedIn />
          ) : (
            // The user is logged out
            <DropDownLoggedOut />
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ProfileDropDown;
