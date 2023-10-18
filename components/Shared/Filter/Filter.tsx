import { categoryData } from '@/constant/categories';

const Filter = () => {
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
            value={category.item}
          />
        </aside>
      ))}
    </section>
  );
};

export default Filter;
