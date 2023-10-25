import Image from 'next/image';

import { Button } from '@/components/ui/button';

const ContactBtns = () => {
  return (
    <div className='flexCenter my-5 gap-[10px]'>
      <Button className='display-semibold min-w-[124px] bg-secondary-blue'>
        Follow
      </Button>
      <Button className='bg-secondary-blue-10' size='icon'>
        <Image src='message.svg' alt='user-img' width={20} height={20} />
      </Button>
    </div>
  );
};

export default ContactBtns;
