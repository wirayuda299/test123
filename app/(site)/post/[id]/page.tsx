import { postDummyData } from '@/constants/shared';
import {
  PostStats,
  PostArticle,
  PostProfile,
  UserPostList,
} from '@/components/index';

type URLProps = {
  params: {
    id: string;
  };
};

const Page = ({ params }: URLProps) => {
  const post = postDummyData.find((post) => post.slug === params.id);

  if (!post) return 'No Post Found';

  return (
    <main className='postDetailsLeftCol'>
      <div className='flex shrink-0 flex-col gap-5 max-xl:hidden'>
        <PostStats />
        <section className='flex shrink-0 flex-col gap-1 rounded-2xl bg-white p-5 px-7 dark:bg-darkPrimary-3'>
          <span className='display-semibold text-secondary-blue-80'>
            {post?.user}
          </span>
          <span className='display-semibold text-darkSecondary-800'>
            Posted {post?.createdDate}
          </span>
        </section>
      </div>

      <section>
        <PostArticle
          postHeader={post?.postHeader}
          alt={post?.alt}
          title={post?.title}
          description={post?.description}
          tags={post?.tags}
          user={post?.user}
          createdDate={post?.createdDate}
        />
      </section>

      <div className='postDetailsRightCol'>
        <PostProfile
          avatar={post?.avatar}
          user={post?.user}
          joinDate={post?.joinDate}
          userJob={post?.userJob}
        />
        <UserPostList user={post?.user} id={post?.id} />
      </div>
    </main>
  );
};

export default Page;
