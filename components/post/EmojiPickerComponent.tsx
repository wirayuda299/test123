'use client';

import Image from 'next/image';
import { useState } from 'react';
import EmojiPicker, { EmojiStyle, EmojiClickData } from 'emoji-picker-react';

const EmojiPickerComponent = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>('1f60a');
  const [inputValue, setInputValue] = useState<string>('');
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  function onClick(emojiData: EmojiClickData, event: MouseEvent) {
    setInputValue(
      (inputValue) =>
        inputValue + (emojiData.isCustom ? emojiData.unified : emojiData.emoji),
    );
    setSelectedEmoji(emojiData.unified);
    setIsPickerOpen(!isPickerOpen);
  }

  return (
    <div>
      <div className='relative w-[515px] flex-1 bg-white '>
        <input
          className='display-regular ml-[15px] w-full rounded-3xl border border-slate-300 px-3.5 py-2.5'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Say something nice to follow Nishant...'
        />
        <Image
          src='/assets/posts/smiley.svg'
          alt='Smiley'
          width={24}
          height={24}
          onClick={() => setIsPickerOpen(!isPickerOpen)}
          className='absolute right-[1%] top-[24%] cursor-pointer text-darkSecondary-600'
        />
      </div>
      {isPickerOpen && (
        <EmojiPicker
          onEmojiClick={onClick}
          autoFocusSearch={false}
          emojiStyle={EmojiStyle.NATIVE}
        />
      )}
    </div>
  );
};

export default EmojiPickerComponent;
