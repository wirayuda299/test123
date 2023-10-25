'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import EmojiPickerComponent from './EmojiPickerComponent';

interface CommentProps {
  user: string;
  postedDate: string;
  editedDate?: string;
  avatar: string;
  comment: string;
}

const Comment = ({
  user,
  postedDate,
  editedDate,
  avatar,
  comment,
}: CommentProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false);
  const [showComment, setShowComment] = useState<boolean>(false);

  return (
    <div className='flex bg-white p-10 dark:bg-darkPrimary-3'>
      <Avatar className='mr-5 h-11 w-11 rounded-full bg-secondary-yellow-30 lg:ml-[60px]'>
        <AvatarImage src={avatar} className='rounded-full' />
        <AvatarFallback className='rounded-full bg-secondary-yellow-30'>
          HN
        </AvatarFallback>
      </Avatar>
      <div className='flex flex-1 flex-col items-start justify-start gap-3.5'>
        <div className='w-full rounded-3xl border border-slate-300 p-3.5'>
          <div className='flex flex-col items-start'>
            <div className='mb-4 flex items-center'>
              <div className='display text-darkSecondary-900 dark:text-white-800'>
                {user} •
              </div>
              <div className='body-regular ml-1 text-darkSecondary-900 dark:text-white-800'>
                {`${postedDate} ${
                  editedDate ? `• Edited on ${editedDate}` : ``
                }`}
              </div>
            </div>
            <div className='display-regular w-full text-darkSecondary-800'>
              {comment}
            </div>
          </div>
        </div>
        <div className='ml-4 flex gap-5'>
          {isLiked ? (
            <Image
              src='/assets/posts/orange-heart-square.svg'
              alt='Heart'
              width={20}
              height={20}
              className='cursor-pointer object-contain'
              onClick={() => setIsLiked(!isLiked)}
            />
          ) : (
            <Image
              src='/assets/posts/gray-heart-square.svg'
              alt='Heart'
              width={20}
              height={20}
              className='cursor-pointer object-contain grayscale'
              onClick={() => setIsLiked(!isLiked)}
            />
          )}

          <Image
            src='/assets/posts/reply.svg'
            alt='Reply Icon'
            width={20}
            height={20}
            className='cursor-pointer object-contain grayscale'
            onClick={() => setShowReplyInput(!showReplyInput)}
          />

          <Image
            src='/assets/posts/more.svg'
            alt='More Icon'
            width={20}
            height={20}
            className='cursor-pointer object-contain grayscale'
          />
        </div>
        {showReplyInput && (
          <div className='-ml-6 flex bg-white p-5 dark:bg-darkPrimary-3'>
            <Avatar className='h-11 w-11 rounded-full bg-secondary-yellow-30 '>
              <AvatarImage
                src='https://github.com/shadcn.png'
                className='rounded-full'
              />
              <AvatarFallback className='rounded-full bg-secondary-yellow-30'>
                HN
              </AvatarFallback>
            </Avatar>
            <div className='w-[400px]'>
              <EmojiPickerComponent
                placeholder='Add a reply...'
                showReplyInput={showReplyInput}
                setShowReplyInput={setShowReplyInput}
                showComment={showComment}
                setShowComment={setShowComment}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
