import Image from "next/image";

import { Input } from "../../ui/input";

interface SearchBarProps {
  showSearchBar: boolean;
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Searchbar: React.FC<SearchBarProps> = ({
  showSearchBar,
  setShowSearchBar,
}) => {
  return (
    <div className={`${showSearchBar ? "block" : "hidden sm:block"} searchbar`}>
      {/* Input Box */}
      <Input
        id='text'
        placeholder='Type here to search...'
        className='no-focus searchbar_input'
      />

      {/* Icon */}
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
