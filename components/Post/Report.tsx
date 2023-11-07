'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { reportTags } from '@/constants';
import ReportItem from './ReportItem';
import ReportConfirmation from './ReportConfirmation';

interface ReportProps {
  user: string;
}

const Report = ({ user }: ReportProps) => {
  const [selectedReportItems, setSelectedReportItems] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) {
      setSelectedReportItems([]);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='reportButton no-focus h-7 hover:opacity-70'>
          <div className='reportButtonImageContainer'>
            <Image
              src='/assets/posts/report.svg'
              alt='Report icon'
              width={20}
              height={20}
              className='m-[1px] object-contain dark:brightness-200'
            />
          </div>
          <div className='display-regular text-darkSecondary-800'>Report</div>
        </Button>
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-[30px] rounded-2xl p-[30px] dark:bg-darkPrimary sm:max-w-[477px]'>
        <DialogHeader>
          <DialogTitle className='heading3 text-darkSecondary-900 dark:text-white-800'>
            Why are you reporting this post by @{user}?
          </DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <ul className='flex flex-wrap items-center gap-5'>
            {reportTags.map((item) => (
              <ReportItem
                key={item.id}
                id={item.id}
                title={item.title}
                setSelectedReportItems={setSelectedReportItems}
              />
            ))}
          </ul>
        </div>

        <DialogFooter className='flex !flex-row !justify-start'>
          <ReportConfirmation
            closeParentModal={() => setIsOpen(false)}
            selectedReportItems={selectedReportItems}
          />
          <DialogClose asChild>
            <Button
              type='submit'
              className='heading-3 no-focus ml-5 !bg-transparent p-2.5 text-darkSecondary-800 hover:bg-transparent dark:text-darkSecondary-800 dark:hover:text-secondary-blue'
            >
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Report;
