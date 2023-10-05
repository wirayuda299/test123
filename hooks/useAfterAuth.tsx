import { ReactElement, useState } from 'react';

export default function useAfterAuth(contents: ReactElement[]) {
	const [current, setCurrent] = useState<number>(0);

	const nextContent = () => {
		setCurrent((prev) => {
			if (prev === contents.length) return prev;
			return prev + 1;
		});
	};

	const backToPrev = () => {
		if (current === 0) return current;
		setCurrent((prev) => prev - 1);
	};

	return {
		nextContent,
		backToPrev,
		currentContents: contents[current],
		current,
		isLast: current === contents.length - 1,
	};
}
