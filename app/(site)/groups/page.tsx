import {
  GroupPostCard,
  MeetupChip,
  Pagination,
  SidePodcasts,
  SidebarItem,
  SidebarMobile,
} from '@/components/index';
import { sidebarContents } from '@/constant';

export default function Group() {
  return (
    <div className='mt-28 flex h-full w-full flex-col items-center overflow-hidden bg-white-800 p-5 dark:bg-darkPrimary-2 lg:h-screen lg:flex-row'>
      <aside className='h-full min-w-[250px] rounded-lg bg-white dark:bg-darkPrimary-3 max-lg:min-w-full lg:sticky lg:top-0'>
        <SidebarMobile />
        <div className='hidden w-full overflow-y-hidden p-3 hover:overflow-y-auto dark:bg-darkPrimary-3 lg:block lg:h-screen [&>*:not(:first-child)]:pt-5'>
          {sidebarContents.map((content) => (
            <SidebarItem key={content.label} content={content} />
          ))}
        </div>
      </aside>
      <section className='no-scrollbar h-full w-full overflow-y-auto lg:h-screen'>
        <div className='flex flex-wrap justify-center gap-5 py-5'>
          {[1, 2, 3, 4, 5, 6].map((c) => (
            <GroupPostCard key={c} />
          ))}
        </div>
        <Pagination totalPages={10} />
      </section>
      <div className='no-scrollbar flex h-full w-full min-w-[325px] flex-col gap-5 overflow-y-auto pt-5 max-lg:min-w-full lg:sticky lg:top-0 lg:h-screen'>
        <MeetupChip />
        <SidePodcasts />
      </div>
    </div>
  );
}
