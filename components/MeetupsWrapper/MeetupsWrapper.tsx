import Image from 'next/image';
import { Badge } from '../ui/badge';

const MeetupsWrapper = () => {
  const meetupsData = [
    {
      title: 'UIHUT - Crunchbase Company Profile & Funding',
      companyName: 'UIHUT',
      location: 'Sylhet, Bangladesh',
      description:
        'Contact Email mansurul@uihut.com; Phone Number +8801777138513. UI HUT is a design resources platform for UX/UI designers, developers, and founders.',
      tags: ['Remote', 'Part-time', 'WorldWide'],
      date: 'Feb 7',
      image: 'images/job1.svg',
    },
    {
      title: 'Design Meetups USA | Dribbble',
      companyName: 'Dribbble',
      location: 'Austin, Texas, USA',
      description:
        'Dribbble Meetups are a chance for designers to socialize, talk shop, and foster their local design communities. They are self-organized events that range from the casual, five-person, coffee-shop roundtable to the chef-catered, bar-tended, 200-person extravaganza...',
      tags: ['Remote', 'Part-time'],
      date: 'Feb 7',
      image: 'images/job2.svg',
    },
  ];

  return (
    <>
      {meetupsData?.map((meetupData) => (
        <div className='w-full p-5 shadow-md rounded-2xl bg-white dark:bg-darkPrimary-3  mb-4'>
          <div key={meetupData.companyName}>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <Image
                  className='w-12 sm:w-20'
                  src={meetupData.image}
                  width={100}
                  height={100}
                  quality={100}
                  alt={meetupData.companyName}
                />
                <div className='px-5 flex flex-col justify-evenly'>
                  <h1 className='bodyMd-semibold md:heading3 text-darkSecondary-900 dark:text-white'>
                    {meetupData.title}
                  </h1>
                  <p className='bodySm-semibold md:body-regular text-darkSecondary-800'>
                    {meetupData.companyName} - {meetupData.location}
                  </p>
                </div>
              </div>
              <div className='border-2 px-3 py-1 text-center border-darkSecondary-600 rounded-md md:px-4 md:py-2 dark:border-none dark:shadow-darkShadow'>
                <p className='bodyMd-semibold sm:display-semibold uppercase text-darkSecondary-900 dark:text-white'>
                  Feb
                </p>
                <p className='display-semibold sm:heading1 text-secondary-blue'>
                  7
                </p>
              </div>
            </div>
            <p className='bodyMd-regular md:body-regular my-6 text-darkSecondary-900 dark:text-white'>
              Contact Email mansurul@uihut.com; Phone Number +8801777138513. UI
              HUT is a design resources platform for UX/UI designers,
              developers, and founders.
            </p>
            <div className='flex'>
              {meetupData.tags?.map((tag) => (
                <Badge
                  key={tag}
                  className='bodyXs-semibold md:bodyMd-semibold text-darkSecondary-700 mr-2.5 bg-white-700 dark:bg-darkPrimary-4'
                  variant='secondary'
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MeetupsWrapper;
