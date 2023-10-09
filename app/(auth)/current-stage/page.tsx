import { Contents } from '@/components/index';
import { introduceContents, userDescContents } from '@/constant';

export default function CurrentStage() {
	return (
		<>
			<div className='h-screen w-full lg:sticky lg:top-0'>
				<Contents
					position='left'
					contents={introduceContents}
					title='Tell us a little about yourself!'
				/>
			</div>
			<Contents
				path='/programming-level'
				position='right'
				bg='bg-white dark:bg-darkPrimary-3'
				cardBg='bg-white-800 dark:bg-darkPrimary-4'
				contents={userDescContents}
				title="Which best describes the stage you're at right now?"
			/>
		</>
	);
}
