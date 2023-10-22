'use client';

import { useSearchParams } from 'next/navigation';

import PostCard from '@/components/shared/PostCard';
import Pagination from '@/components/shared/Pagination';
import usePostsData from '@/hooks/usePostsData';

const MainSection = () => {
  const searchParams = useSearchParams();

  const { currentPosts, totalPages } = usePostsData({
    currentPage: Number(searchParams.get('page')),
  });

  return (
    <section>
      <div className='pb-2'>
        {currentPosts?.map((post) => (
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
            likes={post.likes}
          />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </section>
  );
};

export default MainSection;
