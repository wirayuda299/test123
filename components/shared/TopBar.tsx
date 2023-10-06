"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants";
import Searchbar from "../SearchBar";
import { ModeDropDown } from "../ModeDropDown";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const TopBar = () => {
  const pathname = usePathname();

  return (
    <nav className='topBar mx-auto max-w-screen-2xl px-5 py-[20px]'>
      <div className='flex w-full flex-1 items-center justify-between gap-2 md:justify-evenly lg:gap-8'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-[10px]'>
          <Image
            src='/logo-icon-light.svg'
            alt='Logo Icon'
            width={30}
            height={30}
            className='block h-[35px] w-[25px] dark:hidden lg:h-[30px] lg:w-[30px]'
          />
          <Image
            src='/logo-icon-dark.svg'
            alt='Logo Icon'
            width={30}
            height={30}
            className='hidden h-[35px] w-[25px] dark:block lg:h-[30px] lg:w-[30px]'
          />
          <Image
            src='/assets/navigation/search.svg'
            alt='Search Icon'
            width={20}
            height={20}
            className='h-[16px] w-[16px] object-contain sm:hidden lg:h-[20px] lg:w-[20px]'
          />
          <Image
            src='/logo-text-light.svg'
            alt='Logo Text'
            width={106}
            height={38}
            className='hidden h-[32px] w-[70px] dark:hidden sm:block lg:h-[38px] lg:w-[106px]'
          />
          <Image
            src='/logo-text-dark.svg'
            alt='Logo Text'
            width={106}
            height={38}
            className='hidden h-[32px] w-[70px] dark:sm:block lg:h-[38px] lg:w-[106px]'
          />
        </Link>
        <div className='flex items-center justify-between gap-[20px] md:basis-5/6'>
          {/* BottomBar */}

          <div className='hidden items-center gap-[7px] md:flex xl:gap-[20px]'>
            {navLinks.map((link) => {
              const isActive =
                (pathname.includes(link.route) && link.route.length > 1) ||
                pathname === link.route;

              return (
                <>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={link.route}
                          key={link.label}
                          className={`rounded-lg p-[8px] lg:p-[10px] ${
                            isActive && "bg-primary"
                          }`}
                        >
                          <Image
                            src={link.imgURL}
                            alt={link.label}
                            width={20}
                            height={20}
                            className={`h-[16px] w-[16px] object-contain dark:brightness-200 lg:h-[20px] lg:w-[20px] ${
                              isActive && "brightness-200"
                            }`}
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className='dark:bg-black'>
                        <p className='text-black hover:block dark:bg-black dark:text-white'>
                          {link.label.split(/\s+/)[0]}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              );
            })}
          </div>

          {/* SearchBar */}
          <Searchbar />
          {/* Profile Links */}
          <section className='flex items-center justify-between'>
            <div className='flex items-center gap-[10px] lg:gap-[15px]'>
              <div className='cursor-pointer rounded-lg bg-white-700 p-[8px] dark:bg-darkPrimary-4 lg:p-[10px]'>
                <Image
                  src='/assets/navigation/message.svg'
                  alt='Message Icon'
                  width={20}
                  height={20}
                  className='h-[16px] w-[16px] object-contain dark:brightness-200 lg:h-[20px] lg:w-[20px] '
                />
              </div>
              <div className='cursor-pointer rounded-lg bg-white-700 p-[10px] dark:bg-darkPrimary-4'>
                <Image
                  src='/assets/navigation/bell.svg'
                  alt='Notifications Icon'
                  width={20}
                  height={20}
                  className='h-[16px] w-[16px] object-contain dark:brightness-200 lg:h-[20px] lg:w-[20px]'
                />
              </div>
              <div className='rounded-lg border border-secondary-yellow text-center'>
                <Image
                  src='/assets/navigation/profile-image.png'
                  alt='Notifications Icon'
                  width={28}
                  height={28}
                  className='h-[26px] w-[26px] rounded-lg border-2 border-white bg-secondary-yellow-30 object-contain p-[3px] dark:border-darkPrimary-4 lg:h-[38px] lg:w-[38px]'
                />

                {/* 
                <Image
                  src='/assets/navigation/profile-image.png'
                  alt='Profile Image'
                  width={28}
                  height={28}
                  className='h-[24px] w-[24px] rounded-lg bg-secondary-yellow-30 object-contain lg:h-[28px] lg:w-[28px] '
                /> */}
              </div>
              <div className=' flex items-center justify-between gap-[5px] lg:gap-[10px]'>
                <h6 className='bodyMd-semibold lg:display-semibold hidden shrink-0 dark:text-white sm:block'>
                  AR. Jakir
                </h6>
                {/* <Image
                  src='/assets/navigation/down-arrow.svg'
                  alt='Down arrow'
                  width={20}
                  height={20}
                  className='h-[16px] w-[16px] object-contain dark:brightness-200 lg:h-[20px] lg:w-[20px]'
                /> */}

                <ModeDropDown />
              </div>
            </div>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
