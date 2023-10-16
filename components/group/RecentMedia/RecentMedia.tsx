import Image from 'next/image';

const examplesPictures = [
  '/assets/images/1.png',
  '/assets/images/2.png',
  '/assets/images/3.png',
  '/assets/images/4.png',
  '/assets/images/5.png',
  '/assets/images/6.png',
  '/assets/images/7.png',
  '/assets/images/8.png',
];
export default function RecentMedia() {
  return (
    <section className='rounded-2xl bg-white p-5'>
      <h3 className='text-base font-semibold text-darkSecondary-900 dark:text-white-800'>
        Recent Media
      </h3>
      <div className='grid grid-cols-2 gap-1 md:grid-cols-4'>
        {examplesPictures.map((pic, i) => (
          <Image
            src={pic}
            width={88}
            className={`${
              i % 2 === 0 ? 'aspect-square' : 'aspect-[9/16]'
            } h-full max-w-full  rounded-lg`}
            height={88}
            alt='picture'
            key={pic}
          />
        ))}
      </div>
    </section>
  );
}
