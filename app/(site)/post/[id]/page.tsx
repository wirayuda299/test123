import PostStats from '@/components/post/PostStats';
import PostArticle from '@/components/post/PostArticle';
import PostProfile from '@/components/post/PostProfile';
import UserPostList from '@/components/post/UserPostList';
import { postDummyData } from '@/constant/PostDummyData';

const Page = ({ params }: URLProps) => {
  console.log({ params });
  const post = postDummyData.find((post) => post.slug === params.id);
  console.log({ post });
  if (!post) return;

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
        <PostProfile />
        <UserPostList />
      </div>
    </main>
  );
};

export default Page;
