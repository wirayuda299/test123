import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { loggedOut } from "@/constants/profileDropDowns";
import DarkModeToggle from "./DarkModeToggle";

const DropDownLoggedOut = () => {
  return (
    <NavigationMenuContent className='cursor-pointer bg-white dark:bg-darkPrimary-3'>
      {loggedOut.map((link) => (
        <NavigationMenuLink
          key={link.label}
          className='mb-4 flex items-center hover:text-primary'
        >
          <link.IconComponent className='mr-2' />
          <h6 className='display-semibold mr-2'>{link.label}</h6>
        </NavigationMenuLink>
      ))}

      {/* Seperator */}
      <Separator className='mx-auto mt-5 dark:bg-white-800' />

      {/* Dark Mode Toggle */}
      <DarkModeToggle />
    </NavigationMenuContent>
  );
};

export default DropDownLoggedOut;
