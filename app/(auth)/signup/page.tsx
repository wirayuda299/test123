import { Contents } from '@/components/index';
import { signupContents } from '@/constant';

export default function Signup() {
	return (
		<div>
			<Contents
				title='Join a thriving community of entrepreneurs and developers.'
				contents={signupContents}
			/>
		</div>
	);
}
