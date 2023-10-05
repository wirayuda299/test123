import Image from 'next/image';
import { Button } from '../ui/button';

export default function AuthProviderButtons() {
	return (
		<div className='space-y-5'>
			<Button className='mt-3 inline-flex h-14 w-full items-center gap-3 bg-white-700 py-5 text-lg font-semibold text-darkSecondary-900 hover:bg-gray-200 md:text-base'>
				<Image
					className='aspect-auto h-5 w-5 object-contain'
					src={'/assets/icons/google.svg'}
					width={50}
					height={50}
					alt='google icon'
				/>
				Sign Up with Google
			</Button>
			<Button className='inline-flex h-14 w-full items-center  gap-3 bg-white-700 py-5 text-lg font-semibold text-darkSecondary-900 hover:bg-gray-200 md:text-base'>
				<Image
					className='aspect-auto h-5 w-5 object-contain'
					src={'/assets/icons/facebook.svg'}
					width={50}
					height={50}
					alt='google icon'
				/>
				Sign Up with Facebook
			</Button>
		</div>
	);
}
