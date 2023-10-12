import PostCard from '@/components/PostCard';
import { LeftSidebar } from '@/components/index';

import { postDummyData } from '@/constant/PostDummyData';

export default function Home() {
  return (
    <>
      <LeftSidebar />
      <h1 className='heading1 text-darkPrimary'>heading1</h1>
      <h1 className='heading1-semibold text-darkPrimary-2'>
        heading1-semibold
      </h1>
      {postDummyData?.map((post) => (
        <PostCard
          key={post.id}
          name={post.name}
          title={post.title}
          tags={post.tags}
          views={post.views}
          mainImage={post.mainImage}
          createdDate={post.createdDate}
          avatar={post.avatar}
          comments={post.comments}
          online={post.online}
          isLiked={post.isLiked}
          likes={post.likes}
        />
      ))}
    </>
  );
}
