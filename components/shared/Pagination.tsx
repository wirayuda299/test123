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
      <span>
        {page} / {totalPages}
      </span>
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
