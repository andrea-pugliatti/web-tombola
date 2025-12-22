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

	const getRandomNumber = (min, max) =>
		Math.floor(Math.random() * (max - min)) + min;

	const handleClick = () => {
		const newTombola = [...tombola];
		let randomNumber = getRandomNumber(1, 90);
		while (newTombola[randomNumber - 1]) {
			randomNumber = randomNumber(1, 90);
		}
		console.log(randomNumber);
		newTombola[randomNumber - 1] = true;
		setTombola(newTombola);
	};

	useEffect(inizializzaTombola, []);

	return (
		<>
			<button type="button" onClick={handleClick}>
				Estrai
			</button>
			{tombola.map((current, index) => (
				<div key={`btn-${index}-${Date.now()}`}>
					{index + 1} {current.toString()}
				</div>
			))}
		</>
	);
}

export default App;
