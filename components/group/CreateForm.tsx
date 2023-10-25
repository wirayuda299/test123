'use client';

import Image from 'next/image';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  cover: z.string(),
  profile: z.string(),
  name: z.string().min(3),
  admins: z.array(z.string()),
  members: z.array(z.string()),
  description: z.string().min(200, {
    message: 'Descriptions must minimum 200 characters ',
  }),
});

export default function CreateGroupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const cover = form.getValues('cover');
  console.log(cover);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='my-5 flex w-full max-w-[840px] flex-col gap-5 rounded-2xl bg-white p-5 dark:bg-darkPrimary-3'
      >
        <FormField
          control={form.control}
          name='cover'
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor='cover-input'
                className='flex w-28 gap-2.5 rounded bg-white-800 px-2.5 py-1 dark:bg-darkPrimary-4'
              >
                <Image
                  width={20}
                  height={20}
                  src={'/assets/icons/image.svg'}
                  alt='Cover Image'
                  className='aspect-square w-5 '
                  loading='lazy'
                />
                <span className='my-auto cursor-pointer text-xs font-semibold leading-[160%] text-darkPrimary-2 dark:text-white-800'>
                  Set Cover
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  type='file'
                  id='cover-input'
                  accept='image/png, image/jpeg'
                  className='hidden'
                  placeholder='set cover'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className=' flex w-full grow flex-col items-center justify-center bg-white-800 px-5 py-16 dark:bg-darkPrimary-4 max-md:max-w-full'>
          <Image
            width={20}
            height={20}
            src={'/assets/icons/image.svg'}
            alt='Profile Image'
            className='aspect-square w-10 max-w-full self-center overflow-hidden object-cover object-center'
            loading='lazy'
          />
        </div>
        <FormField
          control={form.control}
          name='profile'
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor='profile'
                className=' flex w-max items-center gap-5 '
              >
                <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white-800 dark:bg-darkPrimary-4'>
                  <Image
                    width={20}
                    height={20}
                    src={'/assets/icons/image.svg'}
                    alt='profile Image'
                    loading='lazy'
                  />
                </div>
                <div className='flex items-center gap-2.5 rounded bg-white-800 px-2.5 py-1 text-xs font-semibold leading-[160%] text-darkPrimary-2 dark:bg-darkPrimary-4 dark:text-white-800'>
                  <Image
                    width={20}
                    height={20}
                    className='dark:brightness-0 dark:invert'
                    src={'/assets/icons/image.svg'}
                    alt='profile Image'
                    loading='lazy'
                  />
                  <span>Set Profile Photo</span>
                </div>
              </FormLabel>
              <FormControl>
                <Input
                  type='file'
                  id='profile'
                  accept='image/png, image/jpeg'
                  className='hidden'
                  placeholder='set cover'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm font-semibold text-darkPrimary-2 dark:text-white-800'>
                Group Name
              </FormLabel>
              <FormControl>
                <Input
                  className='h-12 rounded-lg bg-white-800 focus-visible:!ring-0 focus-visible:!ring-transparent focus-visible:!ring-offset-transparent dark:bg-darkPrimary-4'
                  placeholder='Name'
                  autoComplete='off'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm font-semibold text-darkPrimary-2 dark:text-white-800'>
                Description
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Provide a short description...'
                  className='h-36 bg-white-800 text-sm font-normal placeholder:text-darkSecondary-800 focus-visible:!ring-0  focus-visible:!ring-transparent focus-visible:!ring-offset-transparent dark:border-darkPrimary-4 dark:bg-darkPrimary-4'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='admins'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm font-semibold text-darkPrimary-2 dark:text-white-800'>
                Add admins
              </FormLabel>
              <FormControl>
                <Input
                  className='h-12 rounded-lg bg-white-800 focus-visible:!ring-0  focus-visible:!ring-transparent focus-visible:!ring-offset-transparent dark:border-darkPrimary-4 dark:bg-darkPrimary-4'
                  placeholder='Add Admins'
                  autoComplete='off'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='members'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm font-semibold text-darkPrimary-2 dark:text-white-800'>
                Add members
              </FormLabel>
              <FormControl>
                <Input
                  className='h-12 rounded-lg bg-white-800  focus-visible:!ring-0 focus-visible:!ring-transparent focus-visible:!ring-offset-transparent dark:border-darkPrimary-4 dark:bg-darkPrimary-4'
                  placeholder='Add members'
                  autoComplete='off'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-5'>
          <Button className='flex w-[125px] rounded-lg !bg-secondary-blue px-5 py-2.5 text-center text-base font-semibold leading-[150%] !text-white-800 hover:bg-secondary-blue-80'>
            Create
          </Button>
          <Button className=' !bg-transparent text-base leading-[150%] !text-darkSecondary-900'>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
