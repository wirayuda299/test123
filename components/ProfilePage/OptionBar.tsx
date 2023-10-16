import { optionBar } from '@/constant';

const OptionBar = () => {
  return (
    <div className='overflow-x-auto'>
      <div className='inline-flex w-full items-start justify-between rounded-[20px] bg-white px-[15px] py-[10px] dark:bg-darkPrimary-3 md:px-[30px] md:py-[19px] lg:max-w-[785px]'>
        {optionBar.map((option) => (
          <button
            key={option}
            className='heading3 rounded-3xl px-5 py-2 text-darkSecondary-800 focus:bg-secondary-red-80 focus:text-white dark:text-white-700'
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionBar;
