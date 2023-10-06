"use client";

import { useTheme } from "next-themes";

import { AiOutlineCaretDown } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeDropDown() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='no-focus border-none dark:bg-darkPrimary-3 dark:hover:bg-darkPrimary-4'
        >
          <AiOutlineCaretDown className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-darkSecondary-700 transition-all dark:-rotate-90 dark:scale-0 dark:invert' />
          <AiOutlineCaretDown className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white' />
          {/* <AiOutlineCaretUp className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' /> */}
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='bg-white dark:bg-darkPrimary-3'
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <div className='mr-3'>
            <BiLogIn />
          </div>
          Login
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Separator />
        </DropdownMenuItem>
        <div className='mr-10 px-2 py-1 text-lg'>
          Interface
          <Switch className='ml-2' />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
