import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';

const HostMeetupCard = () => {
  return (
    <Card className='p-5 rounded-2xl relative bg-center bg-no-repeat bg-cover bg-meetUpBg border-none'>
      <CardHeader className='p-0'>
        <CardTitle className='p-0 heading3 text-white mb-1'>
          Host a Meetup
        </CardTitle>
        <CardDescription className='!text-white bodyMd-regular mb-5 '>
          Find other Hipnoders in your area so you can learn, share, and work
          together.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex justify-between p-0 mt-5'>
        <Button className='!bg-secondary-red-60 !text-secondary-red-10 body-semibold hover:!bg-secondary-red-80'>
          Code of Conduct
        </Button>
        <Button className='bg-white !text-secondary-red-80 hover:!bg-white-700 body-semibold'>
          Host a Meetup
        </Button>
      </CardContent>
    </Card>
  );
};

export default HostMeetupCard;
