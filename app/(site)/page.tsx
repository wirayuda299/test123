import PostCard from '@/components/PostCard';
import { postDummyData } from '@/constant/PostDummyData';
import HomeLeftSidebar from '@/components/Home/HomeLeftSidebar';
import HomeRightSidebar from '@/components/Home/HomeRightSidebar';
import CreatePostBar from '@/components/Home/CreatePostBar';

export default function Home() {
  return (
    <main className='flex flex-row bg-white-700 px-[2.5%] dark:bg-darkPrimary-2'>
      <HomeLeftSidebar />
      <section>
        <div className='w-full max-w-4xl px-[20px] py-28'>
          <CreatePostBar />
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
      </section>
      {/* @ts-ignore */}
      <HomeRightSidebar />
    </main>
  );
}
