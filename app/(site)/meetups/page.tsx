import {
  Filter,
  HostMeetupCard,
  MeetupsWrapper,
  SidePodcasts,
} from '@/components/index';

const page = () => {
  return (
    <div className='flex gap-4 bg-white-700 flex-col md:flex-row dark:bg-darkPrimary-2'>
      <div className='flex-col flex lg:flex lg:flex-row gap-4 '>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='lg:hidden w-full'>
            <HostMeetupCard />
          </div>

          <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-full md:max-w-[26%]'>
              <Filter />
            </div>
            <div className='w-full lg:w-5/6'>
              <MeetupsWrapper />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 w-full lg:w-2/6'>
          <div className='hidden lg:block'>
            <HostMeetupCard />
          </div>
          <SidePodcasts />
        </div>
      </div>
    </div>
  );
};

export default page;
