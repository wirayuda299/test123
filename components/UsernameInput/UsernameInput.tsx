import type { ChangeEvent } from 'react';

import { Input } from '../ui/input';

export default function UsernameInput({
	handleChange,
}: {
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<>
			<label
				htmlFor='username'
				className='text-lg font-semibold text-darkSecondary-900'
			>
				Choose a Username
			</label>
			<Input
				onChange={handleChange}
				required
				placeholder='e.g. Hipnode123'
				id='username'
				autoComplete='off'
				name='username'
				className='h-14 w-full bg-white-700 focus-visible:ring-0 focus-visible:ring-offset-0'
			/>
		</>
	);
}
