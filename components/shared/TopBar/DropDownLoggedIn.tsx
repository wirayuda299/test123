import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { loggedIn } from "@/constants/profileDropDowns";
import { Separator } from "@/components/ui/separator";
import DarkModeToggle from "./DarkModeToggle";

const DropDownLoggedIn = () => {
  return (
    <NavigationMenuContent className='bg-white dark:bg-darkPrimary-3 cursor-pointer'>
      {loggedIn.map((link) => (
        <NavigationMenuLink
          key={link.label}
          href={link.route}
          className='flex items-center hover:text-primary mb-4'
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

export default DropDownLoggedIn;
