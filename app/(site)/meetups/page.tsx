import {
  Filter,
  HostMeetupCard,
  MeetupsWrapper,
  SidePodcasts,
} from '@/components/index';

const Page = () => {
  const cardBtns = [
    {
      name: 'Host a Meetup',
      link: '/host-meetup',
    },
    {
      name: 'Code of Conduct',
      link: '/code-of-conduct',
    },
  ];

  return (
    <section className='flex gap-4 bg-white-700 flex-col md:flex-row dark:bg-darkPrimary-2'>
      <main className='flex-col flex lg:flex lg:flex-row gap-4 '>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='lg:hidden w-full'>
            <HostMeetupCard cardBtns={cardBtns} />
          </div>

          <div className='flex flex-col md:flex-row gap-4'>
            <aside className='w-full md:max-w-[210px]'>
              <Filter />
            </aside>
            <div className='w-full lg:w-5/6'>
              <MeetupsWrapper />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 w-full lg:max-w-[360px]'>
          <div className='hidden lg:block'>
            <HostMeetupCard cardBtns={cardBtns} />
          </div>
          <SidePodcasts />
        </div>
      </main>
    </section>
  );
};

export default Page;
