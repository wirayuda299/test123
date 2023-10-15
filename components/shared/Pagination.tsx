'use client';

import queryString from 'query-string';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '../ui/button';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const parsed = queryString.parse(location.search, {
    parseNumbers: true,
  });
  const router = useRouter();
  const pathname = usePathname();
  const [page, setPage] = useState<number>(
    parsed.page ? +parsed.page : currentPage,
  );

  const handlePagination = (direction: string) => {
    let pageNum: number;

    switch (direction) {
      case 'start':
        pageNum = 1;
        break;
      case 'end':
        pageNum = totalPages;
        break;
      case 'next':
        pageNum = page + 1;
        break;
      case 'prev':
        pageNum = page - 1;
        break;
      default:
        throw new Error('Invalid direction');
    }

    setPage(pageNum);

    const newQueryString = queryString.stringify({ ...parsed, page: pageNum });

    const newUrl = `${pathname}?${newQueryString}`;

    router.push(newUrl);
  };

  return (
    <div className='flex items-center justify-center gap-2 sm:gap-5'>
      <Button
        disabled={page === 1}
        onClick={() => handlePagination('start')}
        className='w-12 !bg-white text-secondary-red-80 sm:w-20'
      >
        Start
      </Button>
      <Button
        disabled={page === 1}
        onClick={() => handlePagination('prev')}
        className='w-12 !bg-secondary-red-80 !text-white sm:w-20'
      >
        Prev
      </Button>
      <p className='truncate text-xs font-semibold dark:text-white-800 sm:text-base'>
        <span className='text-darkPrimary-2 dark:text-white-800'>{page}</span> /{' '}
        <span className='text-primary'>{totalPages}</span>
      </p>
      <Button
        disabled={page === totalPages}
        onClick={() => handlePagination('next')}
        className='w-12 !bg-secondary-red-80 !text-white sm:w-20'
      >
        Next
      </Button>
      <Button
        disabled={page === totalPages}
        onClick={() => handlePagination('end')}
        className='w-12 !bg-white !text-secondary-red-80 sm:w-20'
      >
        End
      </Button>
    </div>
  );
}
