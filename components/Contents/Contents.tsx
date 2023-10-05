import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode } from 'react';

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
};

export default function HeroContents({
	contents,
	title,
	bg,
	cardBg,
	children,
}: HeroContentsProps) {
	return (
		<section
			className={cn(
				'flex min-h-full w-full flex-col items-center justify-center bg-white-800 p-5 lg:max-w-720',
				bg
			)}
		>
			<div className='w-full max-w-442'>
				<h2 className='text-lg font-semibold text-darkSecondary-900 md:text-3xl md:font-bold'>
					{title}
				</h2>
				<div className='flex w-full flex-col items-start gap-5 pt-10'>
					{contents.map((content) => (
						<div
							className={cn(
								'flex h-full items-center w-full md:w-[370px] justify-start gap-6 rounded-lg bg-white p-5',
								cardBg
							)}
							key={content.text}
						>
							{content.icon && (
								<div
									className={`${content.background} mx-auto flex aspect-square h-60 w-60 items-center justify-center rounded-lg`}
								>
									<Image
										className='h-5 w-5 object-contain'
										src={content.icon}
										width={50}
										height={50}
										alt={content.alt || ''}
									/>
								</div>
							)}
							<p className='text-sm font-semibold leading-5 text-darkSecondary-900 md:text-lg'>
								{content.text}
							</p>
						</div>
					))}
				</div>
				{children}
			</div>
		</section>
	);
}
