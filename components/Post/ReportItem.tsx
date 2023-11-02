'use client';

import { Dispatch, SetStateAction, useState } from 'react';

interface ReportItemProps {
  id: number;
  title: string;
  setSelectedReportItems: Dispatch<SetStateAction<number[]>>;
}

const ReportItem = ({ id, title, setSelectedReportItems }: ReportItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setSelectedReportItems((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((itemId) => itemId !== id);
      }
      return prevState.concat(id);
    });
    setIsActive(!isActive);
  };

  return (
    <li
      key={id}
      onClick={handleClick}
      className={`cursor-pointer rounded-[20px] border-[1px] border-darkSecondary-600 bg-white-700 px-5 py-2.5 dark:border-darkSecondary-900 dark:bg-darkPrimary-3 ${
        isActive ? 'border-primary dark:border-primary' : 'border-transparent'
      }
    `}
    >
      <p className='bodyMd-regular text-darkSecondary-900 dark:text-white-800'>
        {title}
      </p>
    </li>
  );
};

export default ReportItem;
