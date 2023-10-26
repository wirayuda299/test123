import Link from 'next/link';

import { Post, postDummyData } from '@/constants/shared';
import { Separator } from '../ui/separator';

interface userPostListProps {
  user: string;
}

const UserPostList = ({ user }: userPostListProps) => {
  function getThreeRandomArticles(arr: Post[], num: number): Post[] {
    const result: Post[] = [];
    const arrCopy = [...arr].filter((article: Post) => article.user === user);
    for (let i = 0; i < num; i++) {
      const randomIndex = Math.floor(Math.random() * arrCopy.length);
      result.push(arrCopy[randomIndex]);
      arrCopy.splice(randomIndex, 1);
    }
    return result;
  }

  return (
    <div className='flex flex-col items-start justify-center rounded-2xl bg-white p-5 pb-[30px] dark:bg-darkPrimary-3'>
      <div className='heading3 pb-[15px] text-darkSecondary-900 dark:text-white-800'>
        More from {user}
      </div>

      <Separator />

      {getThreeRandomArticles(postDummyData, 3).map((post: Post) => (
        <div key={post?.id}>
          <div className='py-[15px]'>
            <Link
              href={`/post/${post.slug}`}
              className='bodyMd-semibold cursor-pointer pb-1 text-darkSecondary-900 dark:text-white-800'
            >
              {post?.title}
            </Link>
            <ul className='bodyMd-semibold flex text-darkSecondary-800'>
              {post?.tags.map((tag) => (
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
