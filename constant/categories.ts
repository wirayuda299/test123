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
    item: 'Contract',
    selected: false,
    id: 6,
  },
];

export { categoryData };
