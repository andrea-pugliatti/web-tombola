import { useEffect, useState } from "react";

function App() {
	const [tombola, setTombola] = useState([]);

	const inizializzaTombola = () => {
		const numbers = [];

		for (let i = 0; i < 90; i++) {
			numbers.push(false);
		}
		setTombola(numbers);
	};

	useEffect(inizializzaTombola, []);

	return (
		<>
			{tombola.map((current, index) => (
				<div key={`btn-${index}`}>
					{index + 1} {current.toString()}
				</div>
			))}
		</>
	);
}

export default App;
