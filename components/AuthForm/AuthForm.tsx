'use client';

import Link from 'next/link';
import { useState, type FormEvent, ChangeEvent } from 'react';

import useMultiStepForm from '@/hooks/useMultiStepForm';
import {
	UsernameInput,
	CredentialInput,
	NavigationButtons,
	AuthProviderButtons,
} from '../index';

type UserData = {
	username: string;
	email: string;
	password: string;
};

export default function AuthForm({ type }: { type: 'signin' | 'signup' }) {
	const [formData, setFormData] = useState<Partial<UserData>>();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const { steps, nextStep, back, isFirstStep, isLastStep, currentStep } =
		useMultiStepForm([
			<UsernameInput key='name' handleChange={handleChange} />,
			<CredentialInput key='credential' handleChange={handleChange} />,
		]);

	const renderFormContent = () => {
		if (type === 'signin') {
			return <CredentialInput handleChange={handleChange} />;
		}
		return steps;
	};

	const renderNavigationLink = () => {
		let linkText, linkHref;
		if (type === 'signin') {
			linkText = "Don't have an account yet?";
			linkHref = '/signup';
		} else {
			linkText = 'Already have an account?';
			linkHref = '/signin';
		}

		return (
			<p className='text-sm font-semibold text-darkSecondary-900'>
				{linkText}{' '}
				<Link className='text-secondary-red-80' href={linkHref}>
					{type === 'signin' ? 'Sign Up' : 'Sign in.'}
				</Link>
			</p>
		);
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		console.log(formData);
	};

	return (
		<div className='flex min-h-screen w-full flex-col items-center justify-center bg-white p-5 lg:max-w-720'>
			<div className='w-full max-w-442'>
				<form className='w-full' onSubmit={onSubmit}>
					{renderFormContent()}
					<NavigationButtons
						handleSubmit={onSubmit}
						formData={formData}
						type={type}
						back={back}
						currentStep={currentStep}
						isFirstStep={isFirstStep}
						isLastStep={isLastStep}
						nextStep={nextStep}
					/>
					{renderNavigationLink()}
				</form>
				<div className='flex items-center gap-3 pt-7'>
					<div className='h-[1px] w-full bg-darkSecondary-900' />
					<span className='text-lg font-semibold'>or</span>{' '}
					<div className='h-[1px] w-full bg-darkSecondary-900' />
				</div>
				<AuthProviderButtons />
			</div>
		</div>
	);
}
