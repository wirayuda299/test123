import Image from "next/image";

import { Input } from "../../ui/input";

interface SearchBarProps {
  showSearchBar: boolean;
  setShowSearchBar: (value: boolean) => void;
}

const Searchbar = ({ showSearchBar, setShowSearchBar }: SearchBarProps) => {
  return (
    <div className={`${showSearchBar ? "block" : "hidden sm:block"} searchbar`}>
      <Input
        id='text'
        placeholder='Type here to search...'
        className='no-focus searchbar_input'
      />

      <Image
        src='/assets/navigation/search.svg'
        alt='Search Icon'
        width={20}
        height={20}
        className='searchBarIcon'
        onClick={() => setShowSearchBar((prevState) => !prevState)}
      />
    </div>
  );
};

export default Searchbar;
