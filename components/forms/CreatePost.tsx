'use client';

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
import { CreatePostSchema } from '@/lib/validations';

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
                          alert('Button clicked!');
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
                <Input
                  placeholder='Add a tag...'
                  {...field}
                  className='bodyMd-regular md:body-regular rounded-lg border-2 border-white-800 px-5 py-3 text-darkSecondary-800 dark:border-darkPrimary-4'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='body-semibold md:display-semibold rounded-lg bg-secondary-blue px-10 py-[10px] text-secondary-blue-10 hover:bg-secondary-blue hover:opacity-90'
        >
          Publish
        </Button>
        <Button
          type='button'
          className='md:display-regular body-semibold bg-white text-darkSecondary-800 hover:bg-white dark:hover:bg-darkPrimary-3'
        >
          Cancel
        </Button>
      </form>
    </Form>
  );
};

export default CreatePost;
