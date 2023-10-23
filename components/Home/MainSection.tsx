'use client';

import { useSearchParams } from 'next/navigation';

import PostCard from '@/components/shared/PostCard';
import Pagination from '@/components/shared/Pagination';
import usePostData from '@/hooks/usePostData';

const MainSection = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') || 1);

  const { currentPosts, totalPages } = usePostData(currentPage);

  return (
    <section className='mb-10'>
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
