import {
  Filter,
  HostMeetupCard,
  InterviewPostCard,
  Pagination,
  SidePodcasts,
} from '@/components/index';

export default function Interviews() {
  const cardBtns = [
    {
      name: 'Start your Interview',
      link: '/',
    },
    {
      name: 'Code of Conduct',
      link: '/code-of-conduct',
    },
  ];
  return (
    <div className='flex h-full w-full flex-col justify-center gap-5 bg-white-700 dark:bg-darkPrimary-2 lg:flex-row '>
      <section className=' top-0 w-full max-w-[210px] max-lg:max-w-full '>
        <Filter />
      </section>
      <div className='flex flex-wrap gap-5'>
        <section className='w-full max-w-[700px] space-y-5 pb-5 max-lg:max-w-full'>
          {[1, 2, 3].map((post) => (
            <InterviewPostCard key={post} />
          ))}
          <Pagination totalPages={20} />
        </section>
        <section className='top-0 w-[325px] space-y-5 max-lg:min-w-full lg:sticky lg:h-screen lg:overflow-y-auto'>
          <HostMeetupCard cardBtns={cardBtns} />
          <SidePodcasts />
        </section>
      </div>
    </div>
  );
}
