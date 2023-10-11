import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const CreatePostBar = () => {
  return (
    <div className='barContainer'>
      <Avatar className='avatarCreatePostMobile'>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>HN</AvatarFallback>
      </Avatar>

      <Input
        type='text'
        placeholder="Let's share what's going on in your mind..."
        className='barInput'
      />

      <Button className='barButton'>Create Post</Button>
    </div>
  );
};

export default CreatePostBar;
