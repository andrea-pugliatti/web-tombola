import { createContext, useContext, useState } from "react";

const TombolaContext = createContext();

function TombolaProvider({ children }) {
	const [tombola, setTombola] = useState([]);
	const [possibleNumbers, setPossibleNumbers] = useState([]);

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
