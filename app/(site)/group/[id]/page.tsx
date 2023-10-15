import { GroupAbout, GroupAdmins } from '@/components/index';

export default function GroupDetail() {
  return (
    <div className='bg-white-800 p-5 dark:bg-darkPrimary-2'>
      <section className='flex flex-col gap-5'>
        <GroupAbout />
        <GroupAdmins />
        <div className='h-full min-w-[170px] max-w-250 bg-slate-500'>
          Waiting Popular tags component
        </div>
      </section>
    </div>
  );
}
