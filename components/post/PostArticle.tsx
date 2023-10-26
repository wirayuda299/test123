'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';

import {
  comments as commentsData,
  CommentType,
  createComment,
} from '@/constants/post';

import { CommentInput, PostStats, Comment } from '@/components/index';

interface PostArticleProps {
  postHeader: string;
  alt: string;
  title: string;
  tags: string[];
  description: ReactNode;
}

const PostArticle = ({
  postHeader,
  alt,
  title,
  tags,
  description,
}: PostArticleProps) => {
  const [comments, setComments] = useState(commentsData);

  return (
    <article className='space-y-4 rounded-2xl md:mb-20'>
      <div className='flex w-full flex-col items-center justify-between gap-5 bg-white dark:bg-darkPrimary-3 max-xl:pb-5'>
        <Image
          src={postHeader}
          alt={alt}
          width={1000}
          height={273}
          className='rounded-t-lg border-2 border-blue-100 object-cover'
        />
        <div>
          <div className='flex items-start justify-center px-[15px] md:px-[30px]'>
            <div className='body-regular md:heading3-regular p-[5px] pr-5 text-darkSecondary-600 md:pr-[30px]'>
              H1
            </div>
            <div className='flex flex-col justify-start gap-5'>
              <div className='display-semibold md:heading1-semibold line-clamp-3 text-darkSecondary-900 dark:text-white-800'>
                {title}
              </div>
              <ul className='bodyMd-regular md:display-regular flex justify-start gap-6 text-secondary-yellow-90'>
                {tags?.map((tag) => <li key={tag}>#{tag}</li>)}
              </ul>
              <div className='bodyMd-regular md:body-regular pb-5 text-darkSecondary-800'>
                {description}
              </div>
            </div>
          </div>
          <div className='pl-6 pr-10 dark:bg-darkPrimary-3'>
            <CommentInput
              placeholder='Comment... '
              handleComment={(text: string) => {
                const comment = createComment(text, new Date());
                setComments((prev) => prev.concat(comment as CommentType));
              }}
            />
          </div>
        </div>
      </div>

      <div className='flex w-full shrink-0 flex-col lg:hidden'>
        <PostStats />
      </div>

      <div className='mb-3 rounded-b-2xl bg-white dark:bg-darkPrimary-3 max-lg:rounded-2xl md:-mt-8'>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            user={comment.user}
            comment={comment.comment}
            avatar={comment.avatar}
            postedDate={comment.postedDate}
            editedDate={comment.editedDate}
            subComments={comment.subComments}
            setComments={setComments}
          />
        ))}
      </div>
    </article>
  );
};

export default PostArticle;
