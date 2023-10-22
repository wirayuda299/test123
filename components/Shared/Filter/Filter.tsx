'use client';

import { categoryData } from '@/constant/categories';
import { url } from 'inspector';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';

const Filter = () => {
  // const { query } = { query: { param1: 'hello', param2: 'World' } };
  // const { param1, param2 } = query;
  // const postId = 123;
  // const param = 'ok';

  const router = useRouter();
  console.log(router);

  let params = 'page=2&limit=3';
  let parsedParams = queryString.parse(params);

  console.log(parsedParams.page);
  console.log(parsedParams.limit);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const url = `${pathname}?${searchParams}`;

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    router.push(`${url}/${value}`);
  };

  return (
    <section className='p-5 bg-white rounded-2xl dark:bg-darkPrimary-3'>
      <h3 className='heading3 text-darkSecondary-900 dark:text-white'>
        Categories
      </h3>

      <p>Param-1 param1</p>
      <p>Param-2 param2</p>

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
            onClick={(e) => handleClick(e)}
            value={category.item}
          />
        </aside>
      ))}
    </section>
  );
};

export default Filter;
