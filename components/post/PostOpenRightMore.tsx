import { Separator } from '../ui/separator';

const PostOpenRightMore = () => {
  return (
    <div className='flex flex-col items-start justify-center rounded-2xl bg-white p-5 pb-[30px] dark:bg-darkPrimary-3'>
      <div className='heading3 pb-[15px] text-darkSecondary-900 dark:text-white-800'>
        More from Mansurul Haque
      </div>

      <Separator />

      <div className='py-[15px]'>
        <div className='bodyMd-semibold pb-1 text-darkSecondary-900 dark:text-white-800'>
          Self-Taught Developer Journal, Day 51: TOP Building Rock Paper
          Scissors UI cont.
        </div>
        <div className='bodyMd-semibold text-darkSecondary-800'>
          #webdev #beginners #codenewbie #devjournal
        </div>
      </div>

      <Separator />

      <div className='py-[15px]'>
        <div className='bodyMd-semibold pb-1 text-darkSecondary-900 dark:text-white-800'>
          Learn Nginx and its basics in 2022
        </div>
        <div className="font-['Source Sans Pro'] text-xs font-semibold leading-none text-neutral-400">
          #webdev #nginx #node #javascript
        </div>
      </div>

      <Separator />

      <div className='pt-[15px]'>
        <div className='bodyMd-semibold pb-1 text-darkSecondary-900 dark:text-white-800'>
          My Learning Path for Programming Tello Drones
        </div>
        <div className="font-['Source Sans Pro'] text-xs font-semibold leading-none text-neutral-400">
          #tello #python #python3 #beginners
        </div>
      </div>
    </div>
  );
};

export default PostOpenRightMore;
