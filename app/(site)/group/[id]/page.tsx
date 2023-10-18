import PostCard from '@/components/PostCard';
import {
  Explore,
  GroupAbout,
  GroupActiveMembers,
  GroupAdmins,
  GroupBanner,
  GroupRecentMedia,
} from '@/components/index';

const CreatePost = () => {
  return (
    <div className='h-full max-h-[200px] w-full rounded-2xl bg-secondary-red-90'>
      Create post component
    </div>
  );
};
const PopularTag = () => {
  return (
    <div className='h-full min-h-[100px] w-full rounded-2xl bg-secondary-red-90'>
      PopularTag component
    </div>
  );
};

export default function GroupDetail() {
  return (
    <div className='h-full w-full bg-white-800 p-5 dark:bg-darkPrimary-2'>
      <div className='flex h-full min-h-screen w-full gap-5 max-xl:flex-wrap md:justify-center lg:justify-between'>
        <aside className='top-0 hidden gap-5 lg:h-screen lg:flex-col xl:sticky xl:flex'>
          <GroupAbout />
          <GroupAdmins />
          <PopularTag />
        </aside>
        <section className='h-full w-full lg:grow'>
          <GroupBanner />
          <Explore />
          {[1, 2, 3, 4].map((post) => (
            <>
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
              />
            </>
          ))}

          <div className='flex flex-col gap-5 xl:hidden'>
            <GroupAbout />
            <GroupAdmins />
            <PopularTag />
          </div>
        </section>
        <aside className='top-0 flex flex-col gap-5 max-xl:w-full xl:sticky'>
          <CreatePost />
          <GroupActiveMembers />
          <GroupRecentMedia />
        </aside>
      </div>
    </div>
  );
}
