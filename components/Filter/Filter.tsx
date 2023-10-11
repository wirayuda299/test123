'use client';

import { useState } from 'react';

import FilterElements from './FilterElements';

const Filter = () => {
  type CategoriesType = {
    item: string;
    selected: boolean;
    id: number;
  };

  const categoryData: CategoriesType[] = [
    {
      item: 'Full Time',
      selected: false,
      id: 1,
    },
    {
      item: 'Part Time',
      selected: false,
      id: 2,
    },
    {
      item: 'Internship',
      selected: false,
      id: 3,
    },
    {
      item: 'Remote',
      selected: false,
      id: 4,
    },
    {
      item: 'Free',
      selected: false,
      id: 5,
    },
    {
      item: 'Cotract',
      selected: false,
      id: 6,
    },
  ];

  const [isOpen, setisOpen] = useState(false);

  return (
    <div className='p-5 bg-white rounded-2xl dark:bg-darkPrimary-3'>
      <h3 className='heading3 text-darkSecondary-900 dark:text-white'>
        Categories
      </h3>

      {categoryData?.map((category) => (
        <FilterElements key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Filter;
