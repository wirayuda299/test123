import SidePodcasts from '@/components/SidePodcasts/SidePodcasts';
import CreatePostBar from '@/components/Home/CreatePostBar';
import NewAndPopularMobile from '@/components/Home/NewAndPopularMobile';
import MeetupChip from '@/components/shared/MeetupChip/MeetupChip';
import MainSection from '@/components/Home/MainSection';
import PinnedGroups from '@/components/Home/PinnedGroups';
import PopularTags from '@/components/Home/PopularTags';
import SidebarListItem from '@/components/Home/SidebarListItem';
import { newAndPopular } from '@/constant/homeLeftSidebar';

export default function Home() {
  return (
    <main className='mb-30 flex flex-row justify-center gap-5 bg-white-700 dark:bg-darkPrimary-2'>
      {/* Left Sidebar */}
      <aside className='sticky left-0 top-0 flex h-screen w-fit shrink-0 flex-col gap-5 overflow-auto py-24 pl-3 max-md:hidden lg:flex lg:flex-col'>
        <section className='asideContainerSmall'>
          <ul>
            {newAndPopular.map((item) => (
              <SidebarListItem
                key={item.id}
                id={item.id}
                icon={item.icon}
                title={item.title}
                text={item.text}
                isFollowingNumberHidden={item.isFollowingNumberHidden}
                dimensions1={item.dimensions1}
                dimensions2={item.dimensions2}
              />
            ))}
          </ul>
        </section>
        <PopularTags />
        <PinnedGroups />
      </aside>

      {/* Middle Section */}
      <section>
        <div className='sticky left-0 top-0 flex h-screen w-fit max-w-4xl shrink-0 flex-col overflow-auto py-24'>
          <NewAndPopularMobile />
          <CreatePostBar />
          <MainSection />
          <div className='flex flex-col gap-5 lg:hidden'>
            <MeetupChip />
            {/* Possibly put <SidePodcasts /> here */}
          </div>
        </div>
      </section>

      {/* Right Sidebar */}
      <aside className='sticky right-0 top-0 hidden h-screen w-fit max-w-sm flex-col gap-5 overflow-auto py-24 pb-3 pr-3 xl:flex xl:flex-col'>
        <MeetupChip />
        <SidePodcasts />
      </aside>
    </main>
  );
}
