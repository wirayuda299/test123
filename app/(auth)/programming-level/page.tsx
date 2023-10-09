import { Contents } from '@/components/index';
import { introduceContents, programmingLevels } from '@/constant';

export default function ProgrammingLevel() {
	return (
		<section className='flex h-full w-full items-center'>
			<div className='top-0 h-screen w-full lg:sticky'>
				<Contents
					position='left'
					contents={introduceContents}
					title='Tell us a little about yourself!'
				/>
			</div>
			<Contents
				path='/interest'
				position='right'
				bg='bg-white dark:bg-darkPrimary-3'
				cardBg='bg-white-800 dark:bg-darkPrimary-4 hover:bg-secondary-red-60 '
				contents={programmingLevels}
				title='Do you know how to code?'
			/>
		</section>
	);
}
