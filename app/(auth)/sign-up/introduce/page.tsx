import { BusinessInterest, Contents } from '@/components/index';
import { introduceContents } from '@/constant';

export default function Introduce() {
	return (
		<>
			<Contents
				contents={introduceContents}
				title='Tell us a little about yourself!'
			/>
			<BusinessInterest />
		</>
	);
}
