import { createContext, useContext, useEffect, useState } from "react";

const TombolaContext = createContext();

function TombolaProvider({ children }) {
	const [tombola, setTombola] = useState(() => {
		const savedData = localStorage.getItem("tombola");
		return savedData ? JSON.parse(savedData) : [];
	});
	const [possibleNumbers, setPossibleNumbers] = useState(() => {
		const savedData = localStorage.getItem("possibleNumbers");
		return savedData ? JSON.parse(savedData) : [];
	});

	const initializeTombola = () => {
		const numbers = [];
		const possible = [];

		for (let i = 0; i < 90; i++) {
			numbers.push(false);
			possible.push(i);
		}

		setTombola(numbers);
		setPossibleNumbers(possible);
	};

	useEffect(
		() => localStorage.setItem("tombola", JSON.stringify(tombola)),
		[tombola],
	);

	useEffect(
		() =>
			localStorage.setItem("possibleNumbers", JSON.stringify(possibleNumbers)),
		[possibleNumbers],
	);

	return (
		<TombolaContext.Provider
			value={{
				tombola,
				setTombola,
				possibleNumbers,
				setPossibleNumbers,
				initializeTombola,
			}}
		>
			{children}
		</TombolaContext.Provider>
	);
}

function useTombola() {
	return useContext(TombolaContext);
}

export { TombolaProvider, useTombola };
