'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

interface isLikedProps {
  avatar: string;
}

export const IsLiked = ({ avatar }: isLikedProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <div className='postCardGridItem3 md:pl-6'>
      {/* Show gray heart if not liked, orange heart if liked */}
      {isLiked ? (
        <div className='orangeHeart'>
          <Image
            src='/orange-heart.png'
            alt='Heart'
            width={25}
            height={25}
            className='mt-[8px]'
            onClick={() => setIsLiked(!isLiked)}
          />
        </div>
      ) : (
        <div className='grayHeart'>
          <Image
            src='/gray-heart.png'
            alt='Heart'
            width={23}
            height={23}
            className='mt-[1px]'
            onClick={() => setIsLiked(!isLiked)}
          />
        </div>
      )}
      {/* Avatar shows on mobile view instead of heart */}
      <Avatar className='avatarMobile md:hidden'>
        <AvatarImage
          src={avatar}
          alt='Avatar'
          width={25}
          height={25}
          className='rounded-full'
        />
        <AvatarFallback className='m-1'>HN</AvatarFallback>
      </Avatar>
    </div>
  );
};
