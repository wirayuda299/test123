'use client';

import Image from 'next/image';

export default function CreateGroupForm() {
  const handleCoverImageChange = () => {
    // const file = event.target.files[0];
    // setCoverImage(URL.createObjectURL(file));
  };

  const handleButtonClick = () => {
    // handle button click event
  };
  return (
    <form className='my-5 w-full max-w-[840px] rounded-2xl bg-white p-5'>
      <header className='flex flex-col '>
        <div
          className='flex w-28  items-start gap-2.5 rounded bg-white-800 px-2.5 py-1'
          aria-label='Set Cover'
        >
          <Image
            width={20}
            height={20}
            src={'/assets/icons/image.svg'}
            alt='Cover Image'
            className='aspect-square w-5 '
            loading='lazy'
          />
          <label
            htmlFor='cover-input'
            className='my-auto cursor-pointer text-xs font-semibold leading-[160%] text-darkPrimary-2'
          >
            Set Cover
          </label>
          <input
            type='file'
            id='cover-input'
            name='cover-input'
            accept='image/*'
            className='hidden'
            onChange={handleCoverImageChange}
          />
        </div>
        <div className='mt-5 flex w-full grow flex-col items-center justify-center bg-white-800 px-5 py-16 dark:bg-slate-800 max-md:max-w-full'>
          <Image
            width={20}
            height={20}
            src='/assets/icons/image.svg'
            alt='Profile Image'
            className='aspect-square w-10 max-w-full self-center overflow-hidden object-cover object-center'
            loading='lazy'
          />
        </div>
      </header>
      <aside className='mt-10 flex w-full max-w-[500px] items-center gap-2.5'>
        <div
          className='flex items-start gap-2.5  '
          aria-label='Set profile photo'
        >
          <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white-800'>
            <Image
              width={20}
              height={20}
              src={'/assets/icons/image.svg'}
              alt='profile Image'
              loading='lazy'
            />
          </div>
          <label
            htmlFor='profile-photo'
            className='my-auto inline-flex cursor-pointer items-center gap-3 rounded bg-white-800 p-2 text-xs font-semibold leading-[160%] text-darkPrimary-2'
          >
            <Image
              width={20}
              height={20}
              src={'/assets/icons/image.svg'}
              alt='profile Image'
              loading='lazy'
            />
            <span>Set Profile Photo</span>
          </label>
          <input
            type='file'
            id='profile-photo'
            name='cover-input'
            accept='image/*'
            className='hidden'
            onChange={handleCoverImageChange}
          />
        </div>
      </aside>
      <div className='mt-10 flex w-full max-w-full grow flex-col items-start'>
        <div className='flex w-full flex-col items-start max-md:max-w-full'>
          <div className='text-sm font-semibold leading-[157.143%] text-neutral-100'>
            Group Name
          </div>
          <div className='mt-2.5 w-full grow items-center rounded-lg border-2 border-solid bg-white-800 px-5 py-3 text-sm leading-[157.143%] text-darkPrimary-2 max-md:max-w-full'>
            <label htmlFor='group-name'>Name</label>
            <input
              type='text'
              className='w-full bg-transparent'
              id='group-name'
              name='group-name'
              aria-label='Group Name'
            />
          </div>
        </div>
        <div className='mt-5 flex w-full flex-col items-start max-md:max-w-full'>
          <div className='text-sm font-semibold leading-[157.143%] text-neutral-100'>
            Description
          </div>
          <div className='mt-2.5 w-full grow items-start rounded-lg border-2 border-solid border-[color:var(--Dark-4,#2C353D)] px-5 pb-24 pt-3 text-sm leading-[157.143%] text-neutral-400 max-md:max-w-full max-md:pb-2.5'>
            <label htmlFor='description'>Provide a short description...</label>
            <textarea
              id='description'
              name='description'
              aria-label='Description'
            ></textarea>
          </div>
        </div>
        <div className='mt-5 flex w-full flex-col items-start max-md:max-w-full'>
          <div className='text-sm font-semibold leading-[157.143%] text-neutral-100'>
            Add admins
          </div>
          <div className='mt-2.5 w-full grow items-center rounded-lg border-2 border-solid border-[color:var(--Dark-4,#2C353D)] px-5 py-3 text-sm leading-[157.143%] text-neutral-400 max-md:max-w-full'>
            <label htmlFor='admins'>Add admins...</label>
            <input
              type='text'
              id='admins'
              name='admins'
              aria-label='Add admins'
            />
          </div>
        </div>
        <div className='mt-5 flex w-full flex-col items-start max-md:max-w-full'>
          <div className='text-sm font-semibold leading-[157.143%] text-neutral-100'>
            Add members
          </div>
          <div className='mt-2.5 w-full grow items-center rounded-lg border-2 border-solid border-[color:var(--Dark-4,#2C353D)] px-5 py-3 text-sm leading-[157.143%] text-neutral-400 max-md:max-w-full'>
            <label htmlFor='members'>Add members...</label>
            <input
              type='text'
              id='members'
              name='members'
              aria-label='Add members'
            />
          </div>
        </div>
        <div className='mt-5 flex w-[190px] max-w-full items-start gap-5'>
          <button
            onClick={handleButtonClick}
            className='flex w-[125px] max-w-full flex-col items-start self-stretch rounded-lg bg-blue-500 px-5 py-2.5'
          >
            <div className='self-center text-base font-semibold leading-[150%] text-indigo-50'>
              Create
            </div>
          </button>
          <div className='my-auto self-center text-base leading-[150%] text-neutral-400'>
            Cancel
          </div>
        </div>
      </div>
    </form>
  );
}
