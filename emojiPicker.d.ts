declare module 'emoji-picker-react' {
  import React from 'react';

  export interface EmojiObject {
    emoji: string;
  }

  export interface EmojiPickerProps {
    onEmojiClick: (event: React.MouseEvent, emojiObject: EmojiObject) => void;
  }

  const EmojiPicker: React.FC<EmojiPickerProps>;
  export default EmojiPicker;
}
