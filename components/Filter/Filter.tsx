import { useState } from "react";
import FilterElements from "./FilterElements";

const Filter = () => {
  type CategoriesType = {
    item: string;
    selected: boolean;
    id: number;
  };

  const categoryData: CategoriesType[] = [
    {
      item: "Full Time",
      selected: false,
      id: 1,
    },
    {
      item: "Part Time",
      selected: false,
      id: 2,
    },
    {
      item: "Internship",
      selected: false,
      id: 3,
    },
    {
      item: "Remote",
      selected: false,
      id: 4,
    },
    {
      item: "Free",
      selected: false,
      id: 5,
    },
    {
      item: "Cotract",
      selected: false,
      id: 6,
    },
  ];

  return (
    <div className="p-5 bg-white rounded-2xl">
      <h3 className="heading3">Categories</h3>

      {categoryData?.map((category) => <FilterElements category={category} />)}
    </div>
  );
};

export default Filter;
