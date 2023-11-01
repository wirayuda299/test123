'use client';

import { useEffect, useState } from 'react';

import { categoryData } from '@/constant/categories';
import { useRouter, useSearchParams } from 'next/navigation';
import { createUser } from '@/lib/actions/user.action';
import error from 'next/error';
import router from 'next/router';

// use queryString

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

  let getParam = useSearchParams();
  let page = getParam.get('page');

  interface Data {
    name: string;
    email: string;
  }

  useEffect(() => {
    let dynamicUrl = `?page=${page ? page : 1}&type=${selected.join('_')}`;
    if (selected.length <= 0) {
      dynamicUrl = '';
    }
    router.push(`${dynamicUrl}`);
  }, [selected, router]);

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
