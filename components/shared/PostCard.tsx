import Image from 'next/image';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { IsLiked } from '../Home/IsLiked';

interface PostCardProps {
  slug: string;
  mainImage: string;
  title: string;
  tags: string[];
  avatar: string;
  name: string;
  online?: boolean;
  createdDate: string;
  views: number;
  likes: number;
  comments: number;
  styles?: string;
}

const PostCard = ({
  slug,
  mainImage,
  title,
  tags,
  avatar,
  name,
  online = false,
  createdDate,
  views,
  likes,
  comments,
  styles,
}: PostCardProps) => {
  return (
    <div className={cn('postCardGrid', styles)}>
      {/* Grid Item 1 - Post Image */}
      <div className='postCardGridItem1'>
        <Image
          src={mainImage}
          alt='Post image'
          width={156}
          height={156}
          className='postCardMainImage'
        />
      </div>

      {/* Grid Item 2 - Post Title */}
      <div className='postCardGridItem2'>
        <Link href={`/post/${slug}`}>
          <h3 className='postCardTitle line-clamp-2 cursor-pointer text-opacity-90'>
            {title}
          </h3>
        </Link>
        {/* Tags */}
        <ul className='postCardTagList'>
          {tags.map((tag) => (
            <li key={tag} className='tag'>
              {tag.toLowerCase()}
            </li>
          ))}
        </ul>
      </div>

      {/* Grid Item 3 - Post Heart/isLiked */}
      <IsLiked avatar={avatar} />

      {/* Grid Item 4 - User info and created date */}
      <div className='postCardGridItem4'>
        <Avatar className='avatarDesktop'>
          <AvatarImage
            src={avatar}
            alt='Avatar'
            width={40}
            height={40}
            className='rounded-full'
          />
          <AvatarFallback>HN</AvatarFallback>
        </Avatar>
        <div>
          <div className='flex items-center justify-between'>
            <p className='avatarName'>{name}</p>
            <div
              className={`online ${
                online ? 'bg-green-500' : 'bg-darkSecondary-600'
              }`}
            ></div>
          </div>
          <p className='postCreatedDate'>{createdDate}</p>
        </div>
      </div>

      {/* Grid Item 5 - Views, likes, comments */}
      <div className='postCardGridItem5'>
        <ul className='viewsList'>
          <li>{views} Views</li>
          <li>{likes} Likes</li>
          <li>{comments} Comments</li>
        </ul>
      </div>
    </div>
  );
};

export default PostCard;
