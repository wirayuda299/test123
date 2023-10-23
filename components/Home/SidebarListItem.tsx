import Image from 'next/image';
import Link from 'next/link';

interface SidebarListItemProps {
  id: number;
  icon: string;
  title: string;
  text: string;
  isFollowingNumberHidden?: boolean;
  bgColor?: string;
  hashtag?: boolean;
  noOfPosts?: number;
  dimensions1?: number;
  dimensions2?: number;
}

const colors: {
  [key: string]: string;
} = {
  yellow: 'bg-secondary-yellow-10 dark:bg-[#594F43]',
  red: 'bg-secondary-red-10 dark:bg-[#473E3B]',
  blue: 'bg-secondary-blue-10 dark:bg-[#444F5F]',
  green: 'bg-secondary-green-10 dark:bg-[#335248]',
  purple: 'bg-secondary-purple-10 dark:bg-[#46475B]',
  transparent: 'bg-transparent',
};

const dimensions: { [key: string]: string } = {
  32: 'h-[32px] w-[32px]',
  28: 'h-[28px] w-[28px]',
  20: 'h-[20px] w-[20px]',
};

const SidebarListItem = ({
  id,
  icon,
  title,
  text,
  isFollowingNumberHidden = true,
  bgColor,
  noOfPosts,
  hashtag = false,
  dimensions1,
  dimensions2,
}: SidebarListItemProps) => {
  return (
    <li key={id} className='mb-2.5 w-full'>
      <Link href='#' className='asideListItemLink'>
        <div
          className={`asideImageDiv ${bgColor && colors[bgColor]} ${
            dimensions1 && dimensions[dimensions1]
          }`}
        >
          <Image
            src={icon}
            alt='Icon'
            width={32}
            height={32}
            className={`${dimensions2 && dimensions[dimensions2]}`}
          />
        </div>

        <div>
          <div className='flex items-center gap-[6px]'>
            <h6
              className={`bodyMd-semibold dark:text-white ${
                hashtag ? 'text-darkSecondary-800' : 'text-darkSecondary-900'
              }`}
            >
              {hashtag ? `#${title}` : title}
            </h6>
            <p
              className={`${
                isFollowingNumberHidden ? 'hidden' : ''
              } asideFollowingNumber`}
            >
              24
            </p>
          </div>
          <p className='bodyXs-regular text-darkSecondary-800'>
            {noOfPosts} {text}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default SidebarListItem;
