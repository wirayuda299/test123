import { ChangeEvent } from 'react';
import { Input } from '../ui/input';

export default function CredentialInput({
	handleChange,
}: {
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<div className='w-full space-y-5'>
			<label
				htmlFor='email'
				className='text-lg font-semibold text-darkSecondary-900'
			>
				Email
			</label>
			<Input
				type='email'
				placeholder='hellouihut@gmail.com'
				id='email'
				required
				onChange={handleChange}
				autoComplete='off'
				name='email'
				className='h-14 w-full bg-white-700 focus-visible:ring-0 focus-visible:ring-offset-0'
			/>
			<label
				htmlFor='password'
				className='pt text-lg font-semibold text-darkSecondary-900'
			>
				Password
			</label>
			<Input
				name='password'
				type='password'
				placeholder='uikit.to074#'
				id='password'
				onChange={handleChange}
				required
				autoComplete='off'
				className='h-14 w-full bg-white-700 focus-visible:ring-0 focus-visible:ring-offset-0'
			/>
		</div>
	);
}
