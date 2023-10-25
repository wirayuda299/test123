import PostOpenLeft from '@/components/post/PostOpenLeft';
import PostOpenRightProfile from '@/components/post/PostOpenRightProfile';
import PostOpenRightMore from '@/components/post/PostOpenRightMore';
import PostOpenMain from '@/components/post/PostOpenMain';

export default async function Home() {
  return (
    <main className='article-wrapper mx-auto mt-[100px] grid max-w-7xl justify-center bg-white-700 px-5 dark:bg-darkPrimary-2 md:gap-5 lg:flex-row'>
      <div className='shrink-0 max-md:hidden'>
        <PostOpenLeft />
      </div>

      <section>
        <PostOpenMain />
      </section>

      <div className='sticky right-0 top-0 mt-4 flex  h-screen shrink-0 flex-col gap-5 pb-10 pr-3 md:mt-0'>
        <PostOpenRightProfile />
        <PostOpenRightMore />
      </div>
    </main>
  );
}
