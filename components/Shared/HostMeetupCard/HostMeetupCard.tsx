import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

interface HostButtonProps {
  cardBtns: {
    name: string;
    link: string;
  }[];
}

const HostMeetupCard: React.FC<HostButtonProps> = ({ cardBtns }) => {
  return (
    <Card className='p-5 rounded-2xl relative bg-center bg-no-repeat bg-cover bg-meetUpBg border-none'>
      <CardHeader className='p-0'>
        <CardTitle className='p-0 heading3 text-white mb-1'>
          {cardBtns[0]?.name}
        </CardTitle>
        <CardDescription className='!text-white bodyMd-regular mb-5 '>
          Find other Hipnoders in your area so you can learn, share and work
          together.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex justify-between p-0 mt-5'>
        <Link
          href={`${cardBtns[1]?.link}`}
          className='!bg-secondary-red-60 px-4 py-2.5 rounded-md !text-secondary-red-10 body-semibold hover:!bg-secondary-red-80'
        >
          {cardBtns[1]?.name}
        </Link>
        <Link
          href={cardBtns[0]?.link}
          className='bg-white px-4 py-2.5 rounded-md !text-secondary-red-80 hover:!bg-white-700 body-semibold'
        >
          {cardBtns[0]?.name}
        </Link>
      </CardContent>
    </Card>
  );
};

export default HostMeetupCard;
