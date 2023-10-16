import Card from './Card';
import Header from './Header';

type SidebarItemProps = {
  content: {
    label: string;
    icon: string;
    text: string;
    items: {
      icon: string;
      title: string;
      text: string;
    }[];
  };
};
export default function SidebarItem({ content }: SidebarItemProps) {
  return (
    <div className='mb-2 flex flex-col items-start space-y-5'>
      <Header {...content} />
      <div className=' flex flex-col items-start gap-3'>
        {content.items.map((item) => (
          <Card
            key={item.title}
            {...item}
            style='text-darkPrimary-2 dark:text-white-800'
          />
        ))}
        <button className='w-max rounded-full bg-secondary-purple-20 px-2 py-[2px] text-9 font-semibold text-secondary-purple'>
          See all
        </button>
      </div>
    </div>
  );
}
