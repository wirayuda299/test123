import { ReactElement, useState } from 'react';

type useMultiStepFormProps = ReactElement[];

export default function useMultiStepForm(steps: useMultiStepFormProps) {
	const [currentStep, setCurrentStep] = useState(0);

	const nextStep = () =>
		setCurrentStep((prev) => {
			if (prev === steps.length) return prev;
			return prev + 1;
		});

	const back = () =>
		setCurrentStep((prev) => {
			if (prev === 0) return prev;
			return prev - 1;
		});

	return {
		currentStep,
		nextStep,
		isFirstStep: currentStep === 0,
		back,
		steps: steps[currentStep],
		isLastStep: currentStep === steps.length - 1,
	};
}
