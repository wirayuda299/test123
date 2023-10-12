"use client";

import { useEffect, useState } from "react";

import Searchbar from "./SearchBar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavProfileMenu from "./NavProfileMenu";

const TopBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <nav className='topBarContainer'>
      {/* On Mobile: Either show Search Bar (when search icon is clicked) - otherwise show TopBar */}
      {windowWidth < 640 && showSearchBar ? (
        // Search bar
        <div className='mx-auto w-full py-3'>
          <Searchbar
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
          />
        </div>
      ) : (
        // TopBar
        <div className='topBar'>
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
      )}
    </nav>
  );
};

export default TopBar;
