'use client';

import Image from 'next/image';

import EmojiPickerComponent from './EmojiPickerComponent';
import Comment from './Comment';
import { comments } from '@/constant/comments';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import PostOpenLeft from './PostOpenLeft';

const PostOpenMain = () => {
  return (
    <article className='space-y-4 rounded-xl md:mb-20'>
      <div className='flex w-full flex-col items-center justify-start gap-5  bg-white pb-6 dark:bg-darkPrimary-3'>
        <Image
          src='/assets/posts/post-header.png'
          alt='Post header image'
          width={721}
          height={273}
          className='rounded-t-lg border-2 border-blue-100'
        />
        <div className='flex items-start px-[30px]'>
          <div className='heading3-regular p-[5px] pr-[30px] text-darkSecondary-600'>
            H1
          </div>
          <div className='flex flex-col items-start justify-start gap-5'>
            <div className='heading1-semibold text-darkSecondary-900 dark:text-white-800'>
              OnePay - Online Payment Processing Web App
            </div>
            <ul className='display-regular flex items-start justify-start gap-6 text-secondary-yellow-90'>
              <li>#payment</li>
              <li>#design</li>
              <li>#uikit</li>
            </ul>
            <div className='body-regular pb-2 text-darkSecondary-800'>
              OnePay is a modern, easy-to-use Online Payment Processing Web App
              UI Kit template that will help you build a web app for your
              payment/marketplace platform. OnePay, a multi-payment platform to
              facilitate payments online.
              <br />
              <br /> In this app, you can submit a request for a certain product
              or service online and one of our agents will contact you back with
              an offer. <br />
              <br />
              You can also pay merchants directly through the app. After
              successfully any transaction you can see details about your
              payment. History details include: -Transaction ID.
              <br />
              <br />
              What will you get? - 200+ Beautiful Screens design - Figma, XD &
              Sketch Files 100% editable and scalable. Thank You For Your Time.
            </div>
            <div className='flex w-full dark:bg-darkPrimary-3 '>
              <Avatar className='h-11 w-11 rounded-full bg-secondary-yellow-30 '>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  className='rounded-full'
                />
                <AvatarFallback className='rounded-full bg-secondary-yellow-30'>
                  HN
                </AvatarFallback>
              </Avatar>
              <div className='w-full'>
                <EmojiPickerComponent placeholder='Say something nice to follow Nishant...' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full shrink-0 flex-col md:hidden'>
        <PostOpenLeft />
      </div>

      <div className='rounded-2xl'>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            user={comment.user}
            comment={comment.comment}
            avatar={comment.avatar}
            postedDate={comment.postedDate}
            editedDate={comment.editedDate}
          />
        ))}
      </div>
    </article>
  );
};

export default PostOpenMain;
