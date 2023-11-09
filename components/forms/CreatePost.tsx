'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CreatePostSchema } from '@/lib/validations';
import { createPostData, sidebarContents } from '@/constant';

const CreatePost = () => {
  const { theme } = useTheme();
  const editorRef = useRef(null);
  // const [image, setImage] = useState<
  //   {
  //     fileKey: string;
  //     fileName: string;
  //     fileSize: number;
  //     fileUrl: string;
  //     key: string;
  //     name: string;
  //     size: number;
  //     url: string;
  //   }[]
  // >([]);

  const form = useForm<z.infer<typeof CreatePostSchema>>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: '',
      post: '',
      group: '',
      createType: '',
      tags: [],
    },
  });

  function onSubmit(values: z.infer<typeof CreatePostSchema>) {
    console.log(values);
  }

  const handleInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any,
  ) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== '') {
        if (tagValue.length > 15) {
          return form.setError('tags', {
            type: 'required',
            message: 'Tags must be less than 15 characters',
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue('tags', [...field.value, tagValue]);
          tagInput.value = '';
          form.clearErrors('tags');
        }
      } else {
        form.trigger();
      }
    }
  };

  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);

    form.setValue('tags', newTags);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder='Title...'
                  {...field}
                  className='heading3 md:heading1 bg-white-800 text-darkSecondary-800 dark:bg-darkPrimary-4 min-h-[48px] rounded-lg border-none px-5 py-3 md:min-h-[60px]'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex gap-5'>
          {/* implement AWS */}

          <FormField
            control={form.control}
            name='group'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='bodyXs-regular md:body-semibold bg-white-800 text-darkSecondary-900 dark:bg-darkPrimary-4 dark:text-white-800 flex items-center gap-2 rounded border-none'>
                      <SelectValue placeholder='Select Group' />
                      <Image
                        src='form-down-arrow.svg'
                        alt='icon'
                        width={15}
                        height={15}
                        className='h-2.5 w-2.5 dark:brightness-0 dark:invert md:h-3.5 md:w-3.5'
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className='dark:bg-darkPrimary-4 max-h-[500px] overflow-y-auto'>
                    <div className='dark:bg-darkPrimary-3 flex w-full flex-col gap-3 p-3 md:flex-row'>
                      {sidebarContents.map((content) => (
                        <div
                          className='mb-2 flex flex-col items-start space-y-5'
                          key={content.label}
                        >
                          <div className='bg-secondary-yellow-10 h-full !w-full flex-1 rounded-lg p-3'>
                            <div className=' flex items-center gap-2'>
                              <Image
                                className='aspect-auto object-contain'
                                src={content.icon}
                                alt='growth icon'
                                width={20}
                                height={20}
                              />
                              <h2 className='text-darkSecondary-900 text-lg font-semibold'>
                                {content.label}
                              </h2>
                            </div>
                            <p className='text-darkSecondary-800 text-left text-xs'>
                              {content.text}
                            </p>
                          </div>

                          <div className='flex flex-col items-start gap-3'>
                            {content.items.map((item) => (
                              <div
                                className={`mb-3 inline-flex h-full  items-center justify-start gap-x-2 rounded-lg`}
                                key={item.title}
                              >
                                <Image
                                  className='aspect-auto bg-transparent object-cover'
                                  src={item.icon}
                                  width={34}
                                  height={34}
                                  alt={item.title}
                                />
                                <div className='w-full text-left'>
                                  <SelectItem
                                    value={item.title}
                                    className='cursor-pointer'
                                  >
                                    {item.title}
                                  </SelectItem>

                                  <p className='text-10 text-darkSecondary-800 truncate text-left'>
                                    {item.text}
                                  </p>
                                </div>
                              </div>
                            ))}

                            <button className='bg-secondary-purple-20 text-9 text-secondary-purple w-max rounded-full px-2 py-[2px] font-semibold'>
                              See all
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='createType'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='bodyXs-regular md:body-semibold bg-white-800 text-darkSecondary-900 dark:bg-darkPrimary-4 dark:text-white-800 flex items-center gap-2 rounded border-none'>
                      <SelectValue placeholder='Create - Post' />
                      <Image
                        src='form-down-arrow.svg'
                        alt='icon'
                        width={15}
                        height={15}
                        className='h-2.5 w-2.5 dark:brightness-0 dark:invert md:h-3.5 md:w-3.5'
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className='dark:bg-darkPrimary-4'>
                    {createPostData.map((data) => (
                      <SelectItem value={data.value} key={data.title}>
                        <div className='flex flex-row items-center justify-between gap-1 p-1 md:gap-2.5'>
                          <Image
                            src={data.icon}
                            alt={`${data.title} - icon`}
                            width={15}
                            height={15}
                            className='h-2.5 w-2.5 dark:brightness-0 dark:invert md:h-3.5 md:w-3.5'
                          />
                          <p className='bodyMd-semibold'>{data.title}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* {image.length > 0 && (
          <Image
            src={image[0].fileUrl}
            alt='cover image'
            width={870}
            height={500}
            className='w-full rounded-lg'
          />
        )} */}

        <FormField
          control={form.control}
          name='post'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  // @ts-ignore
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue=''
                  onEditorChange={(content) => field.onChange(content)}
                  init={{
                    skin: theme === 'dark' ? 'oxide-dark' : 'oxide',
                    content_css: theme === 'dark' ? 'dark' : 'default',
                    setup: function (editor) {
                      editor.ui.registry.addButton('Write', {
                        icon: 'edit-block',
                        text: 'Write',
                        onAction: function () {
                          alert('Button clicked!');
                        },
                      });
                      editor.ui.registry.addButton('CodeOfConduct', {
                        text: 'Code of Conduct',
                        onAction: function () {
                          return alert('TODO: link');
                        },
                      });
                    },
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'code',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                      'code',
                      'help',
                      'wordcount',
                      'codesample',
                    ],
                    toolbar:
                      'Write preview CodeOfConduct |' +
                      'bold italic underline strikethrough forecolor codesample link image alignleft aligncenter alignright alignjustify bullist numlist |',
                    content_style:
                      'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='tags'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='md:body-semibold bodyMd-semibold text-darkSecondary-900 dark:text-white-800'>
                Add or change tags (up to 5) so readers know what your story is
                about
              </FormLabel>
              <FormControl>
                <>
                  <Input
                    placeholder='Add a tag...'
                    className='bodyMd-regular md:body-regular border-white-800 text-darkSecondary-800 dark:border-darkPrimary-4 dark:bg-darkPrimary-3 min-h-[50px] rounded-lg border-2 bg-white px-5 py-3'
                    onKeyDown={(e) => handleInput(e, field)}
                  />
                  {field.value.length > 0 && (
                    <div className='flex-start flex gap-2.5'>
                      {field.value.map((tag: any) => (
                        <div
                          key={tag}
                          className='bodyXs-regular bg-white-700 dark:bg-darkPrimary-4 mt-2.5 cursor-pointer rounded-[4px] px-[10px] py-[6px]'
                          onClick={() => handleTagRemove(tag, field)}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='body-semibold md:display-semibold bg-secondary-blue text-secondary-blue-10 dark:bg-secondary-blue dark:text-secondary-blue-10 rounded-lg px-10 py-[10px] hover:bg-[#347ae2e6] dark:hover:bg-[#347ae2e6]'
        >
          Publish
        </Button>
        <Button
          type='button'
          className='md:display-regular body-semibold text-darkSecondary-800 dark:bg-darkPrimary-3 dark:text-darkSecondary-800 bg-white hover:bg-white'
        >
          Cancel
        </Button>
      </form>
    </Form>
  );
};

export default CreatePost;
