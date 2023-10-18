'use client';

import Image from 'next/image';

import { Input } from '../../ui/input';
// import { useRouter } from 'next/navigation';

interface SearchBarProps {
  showSearchBar: boolean;
  setShowSearchBar: (cb: (value: boolean) => boolean) => void;
}

const Searchbar = ({ showSearchBar, setShowSearchBar }: SearchBarProps) => {
  // const router = useRouter();

  return (
    <div className={`${showSearchBar ? 'block' : 'hidden sm:block'} searchbar`}>
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
        // onClick={() => router.push('?showsearch=full')}
        onClick={() => setShowSearchBar((showSearchBar) => !showSearchBar)}
      />
    </div>
  );
};

export default Searchbar;
