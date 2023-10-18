import Image from 'next/image';
import Link from 'next/link';

import { newAndPopularMobile } from '@/constant/homeLeftSidebar';

const NewAndPopularMobile = () => {
  return (
    <ul className='asideContainerSmall mb-5 flex items-center justify-center md:hidden'>
      {newAndPopularMobile.map((item) => (
        <li key={item.id} className='w-full'>
          <Link href='#' className='asideListItemLink justify-center'>
            <div className='asideImageDiv h-[32px] w-[32px]'>
              <Image src={item.icon} alt='Icon' width={20} height={20} />
            </div>

            <div>
              <div className='flex items-center gap-[6px]'>
                <h6 className='bodyMd-semibold text-darkSecondary-900 dark:text-white'>
                  {item.title}
                </h6>
                <p
                  className={`${
                    item.isFollowingNumberHidden ? 'hidden' : ''
                  } asideFollowingNumber`}
                >
                  24
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewAndPopularMobile;
