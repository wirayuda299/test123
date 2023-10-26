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

      <div className='postDetailsRightCol'>
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
