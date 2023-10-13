'use client';

import { useState } from 'react';

import { Button } from '../ui/button';

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const [page, setPage] = useState<number>(1);
  return (
    <div className='flex items-center justify-center gap-2 sm:gap-5'>
      <Button
        onClick={() => setPage(1)}
        disabled={page <= 1}
        className='w-12 !bg-white text-secondary-red-80 sm:w-20'
      >
        Start
      </Button>
      <Button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page <= 1}
        className='w-12 !bg-secondary-red-80 !text-white sm:w-20'
      >
        Prev
      </Button>
      <p className='truncate text-xs font-semibold dark:text-white-800 sm:text-base'>
        <span className='text-darkPrimary-2 dark:text-white-800'>{page}</span> /{' '}
        <span className='text-primary'>{totalPages}</span>
      </p>
      <Button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page >= totalPages}
        className='w-12 !bg-secondary-red-80 !text-white sm:w-20'
      >
        Next
      </Button>
      <Button
        onClick={() => setPage(totalPages)}
        disabled={page >= totalPages}
        className='w-12 !bg-white !text-secondary-red-80 sm:w-20'
      >
        End
      </Button>
    </div>
  );
}
