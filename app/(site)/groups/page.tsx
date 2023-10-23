import { Pagination, GroupPostCard, Sidebar } from '@/components/index';

export default function Group() {
  return (
    <div className='mt-28 flex h-full w-full flex-col items-center overflow-hidden bg-white-800 p-5 dark:bg-darkPrimary-2 lg:h-screen lg:flex-row'>
      <Sidebar />
      <section className='h-full w-full overflow-y-hidden py-5 hover:overflow-y-auto lg:h-screen'>
        <div className='flex flex-wrap justify-center gap-5'>
          {[1, 2, 3, 4, 5, 6].map((c) => (
            <GroupPostCard key={c} />
          ))}
        </div>
        <Pagination totalPages={10} />
      </section>
      <div className='flex w-full max-w-[250px] flex-col gap-5 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-hidden lg:hover:overflow-y-auto'>
        <div className=' min-h-[400px] bg-slate-400'>Hello</div>
        <div className='min-h-[400px] bg-slate-400 '>Hello</div>
      </div>
    </div>
  );
}
