import { Button } from '../ui/button';
import Link from 'next/link';

const interests = [
	'Advertising',
	'Task Management',
	'Email Marketing',
	'Crypto',
	'Design',
	'Finance',
	'Outdoors',
	'health & Fitness',
	'Investing',
	'Home Automation',
	'Sports',
];

export default function BusinessInterest() {
	return (
		<section className='flex min-h-full w-full flex-col items-center justify-center bg-white p-5 dark:bg-darkPrimary-3 lg:max-w-720'>
			<div className='w-full max-w-442'>
				<h2 className='py-10 text-lg font-semibold text-darkSecondary-900 dark:text-white-800 md:text-3xl md:font-bold'>
					What types of businesses are you most interested in running?
				</h2>
				<p className='text-base font-semibold text-secondary-blue-80'>
					Choose as many as you like.{' '}
				</p>
				<div className='mt-5 flex w-full flex-wrap gap-5'>
					{interests.map((interest) => (
						<Button
							key={interest}
							className='bg-white-700 text-lg font-semibold text-darkSecondary-900 hover:bg-secondary-red-60 hover:text-white dark:bg-darkPrimary-4 dark:text-white-800'
						>
							{interest}
						</Button>
					))}
				</div>
				<Link
					href='/'
					className='mt-5 block w-min rounded bg-secondary-red-60 px-10 py-3 text-white-700'
				>
					Next
				</Link>
			</div>
		</section>
	);
}
