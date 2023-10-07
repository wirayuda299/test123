import Image from "next/image";

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
}

const PostCard: React.FC<PostCardProps> = ({
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
}) => {
  return (
    <div className='postCardGrid'>
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
              {tag}
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
              className='mt-[8px]'
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
        <div className='avatarMobile'>
          <Image src={avatar} alt='Avatar' width={20} height={25} />
        </div>
      </div>

      {/* Grid Item 4 - User info and created date */}
      <div className='postCardGridItem4'>
        {/* Avatar */}
        <div className='avatarDesktop'>
          <Image src={avatar} alt='Avatar' width={28} height={34} />
        </div>
        <div>
          {/* Name */}
          <div className='flex items-center justify-between'>
            <p className='avatarName'>{name}</p>
            {/* Online */}
            {online ? (
              <div className='online bg-green-500 '></div>
            ) : (
              <div className='online bg-darkSecondary-600'></div>
            )}
          </div>
          {/* Created date */}
          <p className='bodySm-regular text-darkSecondary-800 dark:text-darkSecondary-600'>
            {createdDate}
          </p>
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
