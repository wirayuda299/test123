import {
  Filter,
  HostMeetupCard,
  MeetupChip,
  PodcastChip,
} from '@/components/index';
import { podcastDatas } from '@/constant';

const podcasts = () => {
  const buttonData = {
    codeButton: 'Code Of Conduct',
    buttonName: 'Submit a Podcast',
  };

  return (
    <div className='flex gap-4 bg-white-700 flex-col md:flex-row dark:bg-darkPrimary-2'>
      <div className='flex-col flex lg:flex lg:flex-row gap-4 '>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='lg:hidden w-full'>
            <HostMeetupCard buttonData={buttonData} />
          </div>

          <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-full md:max-w-[210px] '>
              <Filter />
            </div>
            <div className='w-full lg:w-5/6'>
              <div className='columns-1 md:columns-2'>
                {podcastDatas?.map((podcast) => (
                  <PodcastChip podcastData={podcast} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 w-full lg:max-w-[360px]'>
          <div className='hidden lg:block'>
            <HostMeetupCard buttonData={buttonData} />
          </div>
          <MeetupChip />
        </div>
      </div>
    </div>
  );
};

export default podcasts;
