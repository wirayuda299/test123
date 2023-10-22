import {
  Filter,
  Pagination,
  SidePodcasts,
  HostMeetupCard,
  InterviewPostCard,
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
    <div className='flex h-full w-full flex-col justify-between gap-5  lg:flex-row '>
      <section className='top-0 w-full max-w-[210px] max-lg:max-w-full lg:sticky lg:h-screen'>
        <Filter />
      </section>
      <div className='flex grow flex-wrap gap-5'>
        <section className='w-full max-w-[700px]  space-y-5 pb-5 max-[1350px]:max-w-full'>
          {[1, 2, 3].map((post) => (
            <InterviewPostCard key={post} />
          ))}
          <Pagination totalPages={20} />
        </section>
        <section className='top-0 w-[350px] space-y-5 max-[1350px]:w-full lg:sticky lg:h-screen lg:overflow-y-auto'>
          <HostMeetupCard cardBtns={cardBtns} />
          <SidePodcasts />
        </section>
      </div>
    </div>
  );
}
