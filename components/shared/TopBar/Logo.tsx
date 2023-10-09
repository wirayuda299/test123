import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  showSearchBar: boolean;
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logo: React.FC<LogoProps> = ({ showSearchBar, setShowSearchBar }) => {
  return (
    <Link href='/' className='flex shrink-0 items-center gap-[10px]'>
      {/* Logo Icons - Dark and Light Mode */}
      <Image
        src='/logo-icon-light.svg'
        alt='Logo Icon'
        width={30}
        height={30}
        className='logoIcon block dark:hidden'
      />
      <Image
        src='/logo-icon-dark.svg'
        alt='Logo Icon'
        width={30}
        height={30}
        className='logoIcon hidden dark:block '
      />

      {/* Search Icon - shows on mobile */}
      <Image
        src='/assets/navigation/search.svg'
        alt='Search Icon'
        width={20}
        height={20}
        className={`${
          showSearchBar ? "block sm:hidden" : "block sm:hidden"
        } searchIcon`}
        onClick={() => setShowSearchBar((prevState) => !prevState)}
      />

      {/* Logo Text - Dark and Light Mode*/}
      <Image
        src='/logo-text-light.svg'
        alt='Logo Text'
        width={106}
        height={38}
        className='logoText dark:hidden sm:block '
      />
      <Image
        src='/logo-text-dark.svg'
        alt='Logo Text'
        width={106}
        height={38}
        className='logoText dark:sm:block'
      />
    </Link>
  );
};

export default Logo;
