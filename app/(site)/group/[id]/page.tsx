import PostCard from '@/components/shared/PostCard';
import {
  Explore,
  GroupAbout,
  GroupActiveMembers,
  GroupAdmins,
  GroupBanner,
  GroupRecentMedia,
  Pagination,
} from '@/components/index';

// this will be deleted later when reusable createPost component merged
const CreatePost = () => {
  return (
    <div className=' min-h-[200px] w-full rounded-2xl bg-secondary-red-90'>
      Create post component
    </div>
  );
};
// this will be deleted later when reusable PopularTag component merged
const PopularTag = () => {
  return (
    <div className='min-h-[100px] w-full rounded-2xl bg-secondary-red-90'>
      PopularTag component
    </div>
  );
};

export default function GroupDetail() {
  return (
    <div className='h-full min-h-full w-full bg-white-800 p-5 dark:bg-darkPrimary-2'>
      <div className='flex w-full justify-between gap-5 max-lg:flex-wrap'>
        <aside className='top-0 hidden h-full max-h-screen w-full max-w-[210px] gap-5 lg:sticky lg:flex lg:flex-col'>
          <GroupAbout />
          <GroupAdmins />
          <PopularTag />
        </aside>
        <section className=' w-full grow '>
          <GroupBanner />
          <Explore />
          {[1, 2, 3, 4].map((p) => (
            <div key={p} className='w-full'>
              <PostCard
                avatar='/assets/images/user-avatar.svg'
                comments={5}
                createdDate={'12/10/2024'}
                likes={23}
                mainImage='/assets/images/profile.svg'
                name='wira'
                tags={['finance', 'crypto', 'bitcoin']}
                title='Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...'
                views={333}
                styles='max-w-full'
              />
            </div>
          ))}
          <Pagination totalPages={20} />
          <div className='flex flex-wrap gap-5 lg:hidden'>
            <GroupAbout />
            <GroupAdmins />
            <PopularTag />
          </div>
        </section>
        <aside className='flex h-full w-full max-w-[325px] flex-col gap-5 overflow-y-auto max-lg:max-w-full  lg:sticky lg:top-0'>
          <CreatePost />
          <GroupActiveMembers />
          <GroupRecentMedia />
        </aside>
      </div>
    </div>
  );
}