import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  showSearchBar: boolean;
  setShowSearchBar: (cb: (value: boolean) => boolean) => void;
}

const Logo = ({ showSearchBar, setShowSearchBar }: LogoProps) => {
  return (
    <Link href='/' className='mr-4 flex shrink-0 items-center gap-[10px]'>
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
        className={`${showSearchBar ? "block" : "sm:hidden"} searchIcon`}
        onClick={() => setShowSearchBar((showSearchBar) => !showSearchBar)}
      />

      {/* Logo Text - Dark and Light Mode */}
      <div className='hidden items-center lg:flex '>
        <h1 className='md:heading2 lg:heading1 text-primary'>Hipnode</h1>
        <span className='heading1 text-darkSecondary dark:text-white'>.</span>
      </div>
    </Link>
  );
};

export default Logo;
