interface Props {
  category: {
    item: string;
    id: number;
  };
}

const FilterElements: React.FC<Props> = ({ category }) => {
  return (
    <div key={category.id} className="flex justify-between my-3">
      <label className="bodyMd-semibold text-darkSecondary-800" htmlFor={category.item}>
        {category.item}
      </label>
      <input className="customCheckbox" type="checkbox" id={category.item} value={category.item} />
    </div>
  );
};

export default FilterElements;
