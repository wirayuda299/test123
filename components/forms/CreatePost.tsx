'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
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
import { createPostData } from '@/constant';

const CreatePost = () => {
  const editorRef = useRef(null);
  const form = useForm<z.infer<typeof CreatePostSchema>>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: '',
      post: '',
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
                  className='heading3 md:heading1 min-h-[48px] rounded-lg border-none bg-white-800 px-5 py-3 text-darkSecondary-800 dark:bg-darkPrimary-4 md:min-h-[60px]'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex gap-5'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Title...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Group' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='m@example.com'>m@example.com</SelectItem>
                    <SelectItem value='m@google.com'>m@google.com</SelectItem>
                    <SelectItem value='m@support.com'>m@support.com</SelectItem>
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
                    <SelectTrigger className='body-semibold rounded border-none bg-white-800 text-darkSecondary-900 dark:bg-darkPrimary-4 dark:text-white-800'>
                      <p className='text-darkSecondary-800'>Create - </p>
                      <SelectValue placeholder='Create - Post' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className='dark:bg-darkPrimary-4'>
                    {createPostData.map((data) => (
                      <SelectItem value='post' key={data.title}>
                        <div className='flex flex-row items-center justify-between gap-2.5 p-1'>
                          <Image
                            src={data.icon}
                            alt={`${data.title} - icon`}
                            width={15}
                            height={15}
                            className='dark:brightness-0 dark:invert'
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
                  init={{
                    skin: window.matchMedia('(prefers-color-scheme: dark)')
                      .matches
                      ? 'oxide-dark'
                      : 'oxide',
                    content_css: window.matchMedia(
                      '(prefers-color-scheme: dark)',
                    ).matches
                      ? 'dark'
                      : 'default',
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
                    ],
                    toolbar:
                      'Write preview CodeOfConduct |' +
                      'bold italic underline strikethrough forecolor link image alignleft aligncenter alignright alignjustify bullist numlist |',
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
                    className='bodyMd-regular md:body-regular min-h-[50px] rounded-lg border-2 border-white-800 bg-white px-5 py-3 text-darkSecondary-800 dark:border-darkPrimary-4 dark:bg-darkPrimary-3'
                    onKeyDown={(e) => handleInput(e, field)}
                  />
                  {field.value.length > 0 && (
                    <div className='flex-start flex gap-2.5'>
                      {field.value.map((tag: any) => (
                        <div
                          key={tag}
                          className='bodyXs-regular mt-2.5 cursor-pointer rounded-[4px] bg-white-700 px-[10px] py-[6px] dark:bg-darkPrimary-4'
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
          className='body-semibold md:display-semibold rounded-lg bg-secondary-blue px-10 py-[10px] text-secondary-blue-10 hover:bg-secondary-blue hover:opacity-90 dark:bg-secondary-blue dark:text-secondary-blue-10'
        >
          Publish
        </Button>
        <Button
          type='button'
          className='md:display-regular body-semibold bg-white text-darkSecondary-800 hover:bg-white dark:bg-darkPrimary-3 dark:text-darkSecondary-800'
        >
          Cancel
        </Button>
      </form>
    </Form>
  );
};

export default CreatePost;
