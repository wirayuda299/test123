import { AuthForm, Contents } from '@/components/index';
import { signupContents } from '@/constant';

export default function Signup() {
	return (
		<>
			<Contents
				title='Join a thriving community of entrepreneurs and developers.'
				contents={signupContents}
			/>
			<AuthForm type='signup' />
		</>
	);
}
