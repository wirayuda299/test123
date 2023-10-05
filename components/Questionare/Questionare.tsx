'use client';

import useAfterAuth from '@/hooks/useAfterAuth';
import { BusinessInterest, Contents } from '../index';
import { Button } from '../ui/button';

export const introduceContents = [
	{
		icon: '/assets/icons/rocket.svg',
		alt: 'rocket icon',
		text: 'Help us build the best community for people like you.',
		background: 'bg-secondary-red-10',
	},
	{
		icon: '/assets/icons/chat.svg',
		alt: 'lightning icon',
		text: 'See the best content and conversations, tailored to your interests.',
		background: 'bg-secondary-yellow-10',
	},
];

const userDescContents = [
	{
		text: 'Considering or planning to start a business',
		background: 'bg-white-800',
	},
	{
		text: 'Actively getting started on something new',
		background: 'bg-white-800',
	},
	{
		text: 'No interest in starting a business',
		background: 'bg-white-800',
	},
	{
		text: 'Working on a business, no revenue yet',
		background: 'bg-white-800',
	},
];

export default function Questionare() {
	const { currentContents, nextContent, backToPrev, current, isLast } =
		useAfterAuth([
			<Contents
				key={'desc'}
				bg='bg-white'
				cardBg='bg-white-800'
				contents={userDescContents}
				title="Which best describes the stage you're at right now?"
			/>,
			<BusinessInterest key='interest' />,
		]);
	return (
		<section className='flex min-h-full w-full '>
			<div className='flex w-full flex-col justify-center lg:flex-row'>
				<Contents
					contents={introduceContents}
					title='Tell us a little about yourself!'
				/>
				<div className=' w-full '>
					{currentContents}
					<div className='mx-auto mb-5 flex max-w-442 gap-5 pl-5 sm:pl-0'>
						<Button
							disabled={current === 0}
							onClick={backToPrev}
							className=' flex justify-end bg-secondary-red-60 px-10 py-[10px] hover:bg-secondary-red-80'
						>
							Back
						</Button>
						<Button
							disabled={isLast}
							onClick={nextContent}
							className=' flex justify-end bg-secondary-red-60 px-10 py-[10px] hover:bg-secondary-red-80'
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
