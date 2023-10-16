import PostCard from '@/components/PostCard';
import {
  Explore,
  GroupAbout,
  GroupActiveMembers,
  GroupAdmins,
  GroupBanner,
  GroupRecentMedia,
} from '@/components/index';

export default function GroupDetail() {
  return (
    <div className='h-full w-full bg-white-800 p-5 dark:bg-darkPrimary-2'>
      <div className='flex flex-col gap-5 lg:flex-row'>
        <div className='order-2 flex flex-col gap-5'>
          <GroupAbout />
          <GroupAdmins />
          <div className='h-full min-h-[500px] min-w-[170px] max-w-250 bg-white dark:bg-darkPrimary-2'>
            Waiting Popular tags component
          </div>
        </div>
        <div className='order-1'>
          <GroupBanner />
          <Explore />
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
        </div>
        <div className='flex flex-col gap-5'>
          <div className='h-36 min-w-[200px] rounded-2xl bg-secondary-red-90'>
            Waiting Create Post Component
          </div>
          <GroupActiveMembers />
          <GroupRecentMedia />
        </div>
      </div>
    </div>
  );
}
