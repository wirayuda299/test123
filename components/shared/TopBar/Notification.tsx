import Image from "next/image";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface NotificationProps {
  name: string;
  avatar: string;
  typeIcon: string;
  typeText: string;
  text: string;
  title: string;
  date: string;
  time: string;
  isSeen: boolean;
}

const Notification: React.FC<NotificationProps> = ({
  name,
  avatar,
  typeIcon,
  typeText,
  text,
  title,
  date,
  time,
  isSeen,
}) => {
  return (
    <div className='mb-[35px]'>
      <div className='notificationContainer'>
        <Avatar className='w-[50px] h-[50px] relative'>
          <AvatarImage
            src={avatar}
            alt='Avatar'
            width={50}
            height={50}
            className='notificationAvatarImage'
          />
          <AvatarFallback className='rounded-[100%]'>HN</AvatarFallback>
          <div className='notificationAvatarIcon'>
            <Image
              src={typeIcon}
              alt='Notification Type Icon'
              width={18}
              height={18}
              className='avatarIconImage'
            />
          </div>
        </Avatar>
        <div className='w-[449px]'>
          <div className='ml-[2px]'>
            <div className='flex items-center justify-start mb-[8px]'>
              <h4 className='display-semibold mr-2 text-darkSecondary-800'>
                {name}
              </h4>
              <h6 className='bodyMd-regular mt-1 text-darkSecondary-800'>
                {typeText}
              </h6>
            </div>
            {text && <h6 className='notificationText'>{text}</h6>}
            <h4
              className={`${
                isSeen ? "text-darkSecondary-800" : "text-secondary-red-80"
              } heading3 mr-2 wrap mb-[4px]`}
            >
              {title}
            </h4>

            <h6 className='bodySm-regular text-darkSecondary-800'>
              {date}, {time}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
