'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const ReportConfirmation = () => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          type='submit'
          onClick={() => setIsOpen(true)}
          className='heading-3 !hover:opacity-70 min-w-[160px] rounded-md bg-secondary-blue p-2.5 text-white'
        >
          Submit
        </Button>
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-[30px] rounded-2xl p-[30px] sm:max-w-[477px]'>
        <DialogHeader>
          <DialogTitle className='heading3 text-darkSecondary-900 dark:text-white-800'>
            Post reported successfully. Thank you!
          </DialogTitle>
        </DialogHeader>

        <DialogFooter className='flex !flex-row !justify-start'></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default ReportConfirmation;
