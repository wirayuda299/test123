import Statistic from '@/components/interviews/statistic';
import Image from 'next/image';

export default function InterviewDetail() {
  const tags = ['#technology', '#diversity', '#hr'];
  return (
    <div className='mx-auto h-full min-h-screen w-full max-w-[785px] p-5'>
      <section className='flex w-full flex-col justify-center rounded-lg bg-white dark:bg-darkPrimary-4'>
        <Image
          className='mx-auto object-cover object-center'
          src={'/assets/images/image.png'}
          width={785}
          height={273}
          alt='image'
        />
        <div className='p-5'>
          <div className='flex items-center gap-5 '>
            <h1 className='text-lg font-normal text-darkSecondary-600'>H1</h1>
            <h2 className='py-5 text-base font-semibold text-darkSecondary-900 dark:text-white-800 md:text-[26px]'>
              Leading with Empathy: An Interview with HR and People Management
              Experts
            </h2>
          </div>
          <section className='flex flex-wrap items-center justify-between gap-5 '>
            <Statistic />
            <div className='flex items-center gap-5'>
              {tags.map((tag) => (
                <p
                  key={tag}
                  className='text-xs font-normal text-secondary-yellow-90 md:text-base'
                >
                  {tag}
                </p>
              ))}
            </div>
          </section>
          <article className='py-5'>
            <p className='text-xs font-normal leading-4 text-darkSecondary-800 md:text-base'>
              In a recent interview with HR and people management experts, we
              explored the significance of leading with empathy in today&apos;s
              business world. Here are the key takeaways: Empathy in Leadership:
              Empathy is foundational for effective leadership, creating a more
              supportive work culture. Mental Health: Prioritizing employee
              mental health is essential, especially in high-pressure work
              environments. Inclusivity and Diversity: Fostering inclusivity and
              diversity is a priority, ensuring everyone&apos;s voice is heard.
              Remote Work Challenges: Managing and engaging remote teams require
              adaptability and strong communication.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
