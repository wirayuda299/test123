import { Button } from '../ui/button';

type PaginationProps = {
  page: number;
  totalPages: number;
};

export default function Pagination({ page, totalPages }: PaginationProps) {
  return (
    <div className='flex items-center justify-center gap-5'>
      <Button disabled={page <= 1} className='!bg-white text-secondary-red-80'>
        Start
      </Button>
      <Button disabled={page <= 1} className='!bg-secondary-red-80 !text-white'>
        Prev
      </Button>
      <p className='truncate font-semibold dark:text-white-800'>
        <span className='text-darkPrimary-2 dark:text-white-800'>{page}</span> /{' '}
        <span className='text-primary'>{totalPages}</span>
      </p>
      <Button
        disabled={page >= totalPages}
        className='!bg-secondary-red-80 !text-white'
      >
        Next
      </Button>
      <Button
        disabled={page >= totalPages}
        className='!bg-white !text-secondary-red-80'
      >
        End
      </Button>
    </div>
  );
}
