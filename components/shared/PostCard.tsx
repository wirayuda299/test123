import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface PostCardProps {
  mainImage: string;
  title: string;
  tags: string[];
  isLiked?: boolean;
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
  mainImage,
  title,
  tags,
  isLiked = false,
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
        <h3 className='postCardTitle'>{title}</h3>
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
      <div className='postCardGridItem3'>
        {/* Show gray heart if not liked, orange heart if liked */}
        {isLiked ? (
          <div className='orangeHeart'>
            <Image
              src='/orange-heart.png'
              alt='Heart'
              width={25}
              height={25}
              className='mt-2'
            />
          </div>
        ) : (
          <div className='grayHeart'>
            <Image
              src='/gray-heart.png'
              alt='Heart'
              width={23}
              height={23}
              className='mt-[1px] '
            />
          </div>
        )}
        {/* Avatar shows on mobile view instead of heart */}
        <Avatar className='avatarMobile md:hidden'>
          <AvatarImage
            src={avatar}
            alt='Avatar'
            width={20}
            height={25}
            className='rounded-full'
          />
          <AvatarFallback>HN</AvatarFallback>
        </Avatar>
      </div>

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
