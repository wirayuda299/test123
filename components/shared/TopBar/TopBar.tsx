'use client';

import { useState } from 'react';

import Searchbar from './SearchBar';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavProfileMenu from './NavProfileMenu';

const TopBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <nav className='topBarContainer'>
      {/* On Mobile: Either show Search Bar (when search icon is clicked) - otherwise show TopBar */}

      <div
        className={`mx-auto ${showSearchBar ? 'block w-full' : 'hidden'} py-3`}
      >
        <Searchbar
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />
      </div>

      <div className={`topBar ${showSearchBar ? 'hidden' : 'flex'}`}>
        {/* Top Bar Column 1 */}
        <Logo
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />

        {/* Top Bar Column 2 */}
        <div className='topBarCol2'>
          <NavLinks />

          <Searchbar
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
          />

          {/* Profile Section */}
          <NavProfileMenu />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
