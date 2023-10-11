import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const CreatePostBar = () => {
  return (
    <div className='flex items-center justify-between gap-[20px] rounded-[16px] bg-white p-[20px]'>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>HN</AvatarFallback>
      </Avatar>
      <Input
        type='text'
        placeholder="Let's share what's going on in your mind..."
        className='body-regular border-none bg-white-700 text-darkSecondary-700'
      />
      <Button className='body-semibold no-focus min-w-[112px] rounded-[16px] bg-secondary-red-80 text-white hover:bg-secondary-red-80 hover:opacity-80'>
        Create Post
      </Button>
    </div>
  );
};

export default CreatePostBar;
