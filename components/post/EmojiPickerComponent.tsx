'use client';

import { RefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import EmojiPicker, {
  EmojiStyle,
  Theme,
  EmojiClickData,
} from 'emoji-picker-react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Comment from './Comment';

interface EmojiPickerComponentProps {
  placeholder: string;
  showReplyInput: boolean;
  setShowReplyInput: (value: SetStateAction<boolean>) => void;
  showComment: boolean;
  setShowComment: (value: SetStateAction<boolean>) => void;
}

const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

const EmojiPickerComponent = ({
  placeholder,
  showReplyInput,
  setShowReplyInput,
  showComment,
  setShowComment,
}: EmojiPickerComponentProps) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>('1f60a');
  const [inputValue, setInputValue] = useState<string>('');
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  const emojiRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(emojiRef, () => setIsPickerOpen(false));

  function onClick(emojiData: EmojiClickData, event: MouseEvent) {
    setInputValue(
      (inputValue) =>
        inputValue + (emojiData.isCustom ? emojiData.unified : emojiData.emoji),
    );
    setSelectedEmoji(emojiData.unified);
    setIsPickerOpen(!isPickerOpen);
  }

  const showReply = () => {
    setShowComment(true);
  };

  return (
    <div ref={emojiRef}>
      <div className='emojiContainer relative w-full flex-1 bg-white dark:bg-darkPrimary-3'>
        <input
          className='display-regular ml-4 mr-3 w-full rounded-3xl border border-slate-300 px-3.5 py-2.5 dark:bg-darkPrimary-3'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
        />
        <Image
          src='/assets/posts/smiley.svg'
          alt='Smiley'
          width={24}
          height={24}
          onClick={() => setIsPickerOpen(!isPickerOpen)}
          className='absolute right-[5%] top-[24%] mr-2 cursor-pointer text-darkSecondary-600'
        />
        <div className='absolute right-[0] top-[32%] mr-2 cursor-pointer text-darkSecondary-600'>
          <AiOutlineArrowRight onClick={showReply} />
        </div>
      </div>

      {isPickerOpen && (
        <EmojiPicker
          theme={Theme.AUTO}
          onEmojiClick={onClick}
          autoFocusSearch={false}
          emojiStyle={EmojiStyle.NATIVE}
        />
      )}
      {showComment && (
        <Comment
          user='Hi'
          comment='This is a comment'
          avatar='./user-avatar.svg'
          postedDate='Feb 01'
          editedDate='feb 02'
        />
      )}
    </div>
  );
};

export default EmojiPickerComponent;
