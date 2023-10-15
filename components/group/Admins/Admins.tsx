import Image from 'next/image';

export default function Admins() {
  const admins = [
    {
      name: 'Uiajmad',
      profileImage: '/assets/images/profile.svg',
    },
    {
      name: 'Mandaruiux',
      profileImage: '/assets/images/profile.svg',
    },
    {
      name: 'Jubed Ahmed',
      profileImage: '/assets/images/profile.svg',
    },
    {
      name: 'AR Jakir',
      profileImage: '/assets/images/profile.svg',
    },
    {
      name: 'AR Jakir',
      profileImage: '/assets/images/profile.svg',
    },
  ];
  return (
    <div className='flex min-w-[170px] max-w-250 flex-col gap-5 rounded-2xl p-5 text-darkSecondary-900 dark:bg-darkPrimary-3 dark:text-white-800'>
      {admins.map((admin) => (
        <div
          key={admin.name}
          className='flex items-center justify-between gap-x-2'
        >
          <div className='flex items-center gap-x-2'>
            <Image
              src={'/assets/images/profile.svg'}
              width={30}
              height={30}
              alt={admin.name}
            />

            <h3>{admin.name}</h3>
          </div>
          <button className='flex h-10 w-10 items-center justify-center rounded-full bg-secondary-blue-10'>
            <Image
              src={'/assets/icons/follow.svg'}
              width={30}
              height={30}
              alt={admin.name}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
