'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import EmojiPicker, {
  Theme,
  EmojiStyle,
  EmojiClickData,
} from 'emoji-picker-react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useClickOutside } from '@/hooks/useClickOutside';

interface CommentInputProps {
  placeholder?: string;
  handleComment: (text: string) => void;
}

const CommentInput = ({ placeholder, handleComment }: CommentInputProps) => {
  const [, setSelectedEmoji] = useState<string>('1f60a');
  const [inputValue, setInputValue] = useState<string>('');
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false);

  function handleOnKeyDown(event: any) {
    if (event.key === 'Enter') {
      handleComment(inputValue);
      setInputValue('');
    }
  }

  const emojiRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(emojiRef, () => setIsEmojiPickerOpen(false));

  function onEmojiClick(emojiData: EmojiClickData, event: MouseEvent) {
    setInputValue(
      (inputValue) =>
        inputValue + (emojiData.isCustom ? emojiData.unified : emojiData.emoji),
    );
    setSelectedEmoji(emojiData.unified);
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  }
  return (
    <div className='flex bg-white pb-3 pl-0 pt-5 dark:bg-darkPrimary-3'>
      <Avatar className='h-11 w-11 rounded-full bg-secondary-yellow-30 '>
        <AvatarImage
          src='https://github.com/shadcn.png'
          className='rounded-full'
        />
        <AvatarFallback className='rounded-full !bg-secondary-yellow-30'>
          HN
        </AvatarFallback>
      </Avatar>
      <div className='flex-1'>
        <div ref={emojiRef}>
          <div className='emojiContainer relative w-full flex-1 bg-white dark:bg-darkPrimary-3'>
            <textarea
              className='bodyMd-regular md:display-regular ml-4 mr-3 h-10 w-full overflow-auto rounded-3xl border border-slate-300 px-3.5 py-2.5 align-middle dark:bg-darkPrimary-3 md:h-12'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={placeholder || 'Comment...'}
              onKeyDown={handleOnKeyDown}
            />
            <Image
              src='/assets/posts/smiley.svg'
              alt='Smiley'
              width={20}
              height={20}
              onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
              className='absolute right-[12%] top-[26%] cursor-pointer text-darkSecondary-600 md:right-[6%]'
            />
            <div className='absolute right-[0] top-[32%] cursor-pointer text-darkSecondary-600'>
              <AiOutlineArrowRight
                onClick={() => {
                  handleComment(inputValue);
                  setInputValue('');
                }}
              />
            </div>
          </div>

          {isEmojiPickerOpen && (
            <EmojiPicker
              theme={Theme.AUTO}
              onEmojiClick={onEmojiClick}
              autoFocusSearch={false}
              emojiStyle={EmojiStyle.NATIVE}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
