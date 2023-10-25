import { userPosts } from '@/constants/post';
import { Separator } from '../ui/separator';

const UserPostList = () => {
  return (
    <div className='flex flex-col items-start justify-center rounded-2xl bg-white p-5 pb-[30px] dark:bg-darkPrimary-3'>
      <div className='heading3 pb-[15px] text-darkSecondary-900 dark:text-white-800'>
        More from Mansurul Haque
      </div>

      <Separator />

      {userPosts.map((post) => (
        <div key={post.id}>
          <div className='py-[15px]'>
            <div className='bodyMd-semibold pb-1 text-darkSecondary-900 dark:text-white-800'>
              {post.title}
            </div>
            <ul className='bodyMd-semibold flex text-darkSecondary-800'>
              {post.tags.map((tag) => (
                <li key={tag} className='mr-1'>
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
          <Separator />
        </div>
      ))}
    </div>
  );
};

export default UserPostList;
