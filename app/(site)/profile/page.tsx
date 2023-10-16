import {
  OptionBar,
  LeftSidebar,
  Performance,
  PostCard,
} from '@/components/index';

import { postDummyData } from '@/constant/PostDummyData';

const page = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-6 lg:flex-row'>
      <LeftSidebar />

      <div className='flex w-full flex-col'>
        <OptionBar />
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
      </div>

      <Performance />
    </div>
  );
};

export default page;
