import { GroupAbout, GroupAdmins, GroupBanner } from '@/components/index';

export default function GroupDetail() {
  return (
    <div className='h-full w-full bg-white-800 p-5 dark:bg-darkPrimary-2'>
      <div className='flex gap-5'>
        <div className='flex flex-col gap-5'>
          <GroupAbout />
          <GroupAdmins />
          <div className='h-full min-h-[500px] min-w-[170px] max-w-250 bg-slate-500'>
            Waiting Popular tags component
          </div>
        </div>
        <div>
          <GroupBanner />
        </div>
      </div>
    </div>
  );
}
