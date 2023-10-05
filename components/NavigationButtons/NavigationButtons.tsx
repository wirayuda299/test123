import { FormEvent } from 'react';
import { Button } from '../ui/button';

type UserData = {
	username: string;
	email: string;
	password: string;
};

type NavigationButtonsProps = {
	isFirstStep: boolean;
	isLastStep: boolean;
	back: () => void;
	nextStep: () => void;
	type: 'signin' | 'signup';
	formData: Partial<UserData> | undefined;
	currentStep: number;
	handleSubmit: (e: FormEvent) => void;
};

export default function NavigationButtons({
	back,
	isFirstStep,
	isLastStep,
	nextStep,
	type,
	formData,
	currentStep,
	handleSubmit,
}: NavigationButtonsProps) {
	const handleClick = () => {
		if (currentStep === 0) {
			if (formData?.username !== null && formData?.username !== '') {
				nextStep();
			}
		} else if (currentStep === 1) {
			if (formData?.email !== null && formData?.email !== '') {
				nextStep();
			}
		} else if (currentStep === 2) {
			if (formData?.password !== null && formData?.password !== '') {
				nextStep();
			}
		}
	};

	return (
		<div className='space-x-3'>
			{type === 'signup' ? (
				<>
					{!isFirstStep && (
						<Button
							disabled={isFirstStep}
							onClick={isFirstStep ? undefined : back}
							className='my-5 bg-secondary-red-60 px-10 py-[10px] hover:bg-secondary-red-80'
						>
							Back
						</Button>
					)}
					<Button
						type='submit'
						onClick={!isLastStep ? handleClick : handleSubmit}
						className='my-5 bg-secondary-red-60 px-10 py-[10px] hover:bg-secondary-red-80'
					>
						{isLastStep ? 'Submit' : 'Next'}
					</Button>
				</>
			) : (
				<Button className='my-5 bg-secondary-red-60 px-10 py-[10px] hover:bg-secondary-red-80'>
					Log In
				</Button>
			)}
		</div>
	);
}
