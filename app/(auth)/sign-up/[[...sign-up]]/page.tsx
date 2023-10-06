import { SignUp } from '@clerk/nextjs';

import { Contents } from '@/components/index';
import { signupContents } from '@/constant';

export default function Signup() {
	return (
		<>
			<Contents
				title='Join a thriving community of entrepreneurs and developers.'
				contents={signupContents}
			/>
			<div className='flex w-full items-center justify-center dark:bg-darkPrimary-3'>
				<SignUp />
			</div>
		</>
	);
}
