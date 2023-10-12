import Image from 'next/image';

type CardProps = {
  icon: string;
  title: string;
  text: string;
  style?: string;
};

export default function Card({ icon, title, text, style }: CardProps) {
  return (
    <div
      className={`inline-flex items-center justify-start gap-x-2 rounded-lg ${style}`}
    >
      <Image
        className='aspect-auto object-cover'
        src={icon}
        width={34}
        height={34}
        alt={title}
      />
      <div className='w-full text-left'>
        <h3 className='text-left text-xs font-semibold'>{title}</h3>
        <p className='truncate text-left text-[10px] text-darkSecondary-800'>
          {text}
        </p>
      </div>
    </div>
  );
}
