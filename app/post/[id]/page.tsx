import PostOpenLeft from '@/components/post/PostOpenLeft';
import PostOpenRightProfile from '@/components/post/PostOpenRightProfile';
import PostOpenRightMore from '@/components/post/PostOpenRightMore';
import PostOpenMain from '@/components/post/PostOpenMain';

export default async function Home() {
  return (
    <main className='flex flex-row justify-center bg-white-700 dark:bg-darkPrimary-2'>
      <div className='leftSidebar py-28'>
        <PostOpenLeft />
      </div>

      <section className='max-w-[687px] px-5 py-28'>
        <PostOpenMain />
      </section>

      <div className='rightSidebar flex flex-col gap-5 py-28'>
        <PostOpenRightProfile />
        <PostOpenRightMore />
      </div>
    </main>
  );
}
