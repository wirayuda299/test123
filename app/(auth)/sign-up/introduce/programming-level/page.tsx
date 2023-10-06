import Link from 'next/link';

import { Contents } from '@/components/index';
import { introduceContents, programmingLevels } from '@/constant';

export default function ProgrammingLevel() {
	return (
		<section className='flex h-full w-full items-center'>
			<div className='top-0 h-screen w-full lg:sticky'>
				<Contents
					type='left-content'
					contents={introduceContents}
					title='Tell us a little about yourself!'
				/>
			</div>
			<Contents
				bg='bg-white dark:bg-darkPrimary-3'
				cardBg='bg-white-800 dark:bg-darkPrimary-4 hover:bg-secondary-red-60 '
				contents={programmingLevels}
				title='Do you know how to code?'
			>
				<Link
					href='/'
					className='mt-5 block w-min rounded bg-secondary-red-60 px-10 py-3 text-white-700'
				>
					Next
				</Link>
			</Contents>
		</section>
	);
}
