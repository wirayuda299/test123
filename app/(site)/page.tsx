import CreatePostBar from '@/components/Home/CreatePostBar';
import HomeLeftSidebar from '@/components/Home/HomeLeftSidebar';
import HomeRightSidebar from '@/components/Home/HomeRightSidebar';
import NewAndPopularMobile from '@/components/Home/NewAndPopularMobile';
import PostCard from '@/components/Shared/PostCard';
import { postDummyData } from '@/constant/PostDummyData';

export default async function Home() {
  return (
    <main className='bg-white-700 dark:bg-darkPrimary-2 flex flex-row justify-center'>
      <HomeLeftSidebar />
      <section>
        <div className='max-w-8xl w-full px-5 py-28'>
          <NewAndPopularMobile />
          <CreatePostBar />
          <section>
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
          </section>
        </div>
      </section>
      {/* @ts-ignore */}
      <HomeRightSidebar />
    </main>
  );
}
