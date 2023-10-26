import PostStats from '@/components/post/PostStats';
import PostArticle from '@/components/post/PostArticle';
import PostProfile from '@/components/post/PostProfile';
import UserPostList from '@/components/post/UserPostList';
import { postDummyData } from '@/constants/shared';

const Page = ({ params }: URLProps) => {
  const post = postDummyData.find((post) => post.slug === params.id);

  if (!post) return 'No Post Found';

  return (
    <main className='article-wrapper mx-auto mt-[100px] grid max-w-7xl justify-center bg-white-700 px-2 dark:bg-darkPrimary-2 md:gap-5 md:px-5 lg:flex-row'>
      <div className='shrink-0 max-xl:hidden'>
        <PostStats />
      </div>

      <section>
        <PostArticle
          postHeader={post?.postHeader}
          alt={post?.alt}
          title={post?.title}
          description={post?.description}
          tags={post?.tags}
        />
      </section>

      <div className='sticky right-0 top-0 mt-4 flex h-screen shrink-0 flex-col gap-5 pb-10 md:mt-0 md:pr-3'>
        <PostProfile
          avatar={post?.avatar}
          user={post?.user}
          joinDate={post?.joinDate}
          userJob={post?.userJob}
        />
        <UserPostList user={post?.user} />
      </div>
    </main>
  );
};

export default Page;
