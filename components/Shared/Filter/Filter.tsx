'use client';

import { useState } from 'react';

import { categoryData } from '@/constant/categories';
import { useRouter } from 'next/navigation';

const Filter = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const isChecked = (e.target as HTMLInputElement).checked;
    if (isChecked) {
      setSelected((prevVal) =>
        prevVal.includes(value) ? prevVal : [...prevVal, value],
      );
    } else {
      let uncheckedData = selected?.filter((valueUncheck) => {
        return valueUncheck !== value;
      });
      return setSelected(uncheckedData);
    }
  };

  return (
    <section className='p-5 bg-white rounded-2xl dark:bg-darkPrimary-3'>
      <h3 className='heading3 text-darkSecondary-900 dark:text-white'>
        Categories
      </h3>

      {categoryData?.map((category) => (
        <aside key={category.id} className='flex justify-between my-3'>
          <label
            className='bodyMd-semibold text-darkSecondary-800 '
            htmlFor={category.item}
          >
            {category.item}
          </label>
          <input
            className='customCheckbox'
            type='checkbox'
            id={category.item}
            onChange={(e) => handleChange(e)}
            value={category.key}
          />
        </aside>
      ))}
    </section>
  );
};

export default Filter;
