"use client";

import Image from "next/image";

import { Input } from "./ui/input";

const Searchbar = () => {
  return (
    <div className='searchbar lg:body-regular bodyMd-regular relative hidden flex-1 sm:block'>
      <Input
        id='text'
        placeholder='Type here to search...'
        className='no-focus searchbar_input min-w-[250px] dark:text-white'
      />
      <Image
        src='/assets/navigation/search.svg'
        alt='Search Icon'
        width={20}
        height={20}
        className='absolute right-1 top-[4px] h-[16px] w-[16px] object-contain sm:right-4 sm:top-[8px] lg:top-[10px] lg:h-[20px] lg:w-[20px]'
      />
    </div>
  );
};

export default Searchbar;
