'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ReportConfirmationProps {
  closeParentModal: () => void;
  selectedReportItems: number[];
}

const ReportConfirmation = ({
  closeParentModal,
  selectedReportItems,
}: ReportConfirmationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          type='submit'
          disabled={selectedReportItems.length === 0}
          className='heading-3 min-w-[160px] rounded-md !bg-secondary-blue p-2.5 text-white hover:!bg-secondary-blue hover:!opacity-90 dark:text-white'
        >
          Submit
        </Button>
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-[30px] rounded-2xl p-[30px] dark:bg-darkPrimary sm:max-w-[477px]'>
        <DialogHeader>
          <DialogTitle className='heading3-regular text-center text-darkSecondary-900 dark:text-white-800'>
            Post reported successfully. <br />
            <br />
            Thank you!
          </DialogTitle>
        </DialogHeader>

        <DialogFooter className='flex !flex-row !justify-center'>
          <Button
            type='button'
            onClick={() => {
              setIsOpen(false);
              closeParentModal();
            }}
            className='heading-3 min-w-[160px] cursor-pointer rounded-md !bg-secondary-blue p-2.5 text-center text-white hover:!opacity-90 dark:text-white'
          >
            Go Back
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default ReportConfirmation;
