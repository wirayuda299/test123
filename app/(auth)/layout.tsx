import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<section className='flex min-h-screen w-full flex-col justify-center lg:flex-row'>
			{children}
		</section>
	);
}
