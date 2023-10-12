import { ScrollArea } from '@/components/ui/scroll-area';
import SidebarItem from './Item';
import Mobile from './Mobile';
import { sidebarContents } from '@/constant';

export default function Sidebar() {
  return (
    <aside className=' h-full min-w-[250px] rounded-lg bg-white dark:bg-darkPrimary-3 max-lg:min-w-full lg:sticky lg:top-0'>
      <Mobile />
      <ScrollArea>
        <div className='hidden w-full p-3 lg:block lg:h-screen [&>*:not(:first-child)]:mt-5 '>
          {sidebarContents.map((content) => (
            <SidebarItem key={content.label} content={content} />
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
