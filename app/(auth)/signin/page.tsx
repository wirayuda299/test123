import { AuthForm, Contents } from '@/components/index';
import { signInContents } from '@/constant';

export default function Signin() {
	return (
		<>
			<Contents title='Sign in to Hipnode.' contents={signInContents} />
			<AuthForm type='signin' />
		</>
	);
}
