import type { ReactNode } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

type HeroContentsProps = {
	title: string;
	contents: {
		background: string;
		icon?: string;
		alt?: string;
		text: string;
	}[];
	bg?: string;
	cardBg?: string;
	children?: ReactNode;
	type?: string;
};

export default function HeroContents({
	contents,
	title,
	bg,
	cardBg,
	children,
	type,
}: HeroContentsProps) {
	return (
		<section
			className={cn(
				'flex h-screen lg:sticky top-0 w-full flex-col items-center justify-center bg-white-800 dark:bg-darkPrimary-2 p-5 lg:max-w-720',
				bg
			)}
		>
			<div className='w-full max-w-442'>
				<h2 className='text-lg font-semibold text-darkSecondary-900 dark:text-white-800 md:text-3xl md:font-bold'>
					{title}
				</h2>
				<div className='flex w-full flex-col items-start gap-5 pt-10'>
					{contents.map((content) => (
						<div
							className={cn(
								`flex h-full group items-center w-full max-w-500 justify-start gap-6 rounded-lg bg-white p-5 dark:bg-darkPrimary-3 ${
									type && type !== 'left-content'
										? 'hover:bg-secondary-red-60 text-white'
										: ''
								}`,
								cardBg
							)}
							key={content.text}
						>
							{content.icon && (
								<div
									className={cn(
										`mx-auto flex aspect-square h-60 w-60 items-center justify-center rounded-lg dark:bg-darkPrimary-4`,
										content.background
									)}
								>
									<Image
										className='h-5 w-5 object-contain'
										src={content.icon}
										width={50}
										height={50}
										alt={content.alt ?? ''}
									/>
								</div>
							)}
							<p
								className={`text-sm font-semibold leading-5 text-darkSecondary-900  dark:text-white-800 md:text-lg ${
									type !== 'left-content' ? 'group-hover:text-white' : ''
								}`}
							>
								{content.text}
							</p>
						</div>
					))}
					{children}
				</div>
			</div>
		</section>
	);
}
