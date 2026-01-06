import { useState } from "react";
import { useTombola } from "../contexts/TombolaContext";

export default function TombolaControls({ setAlert }) {
	const { tombola, setTombola, possibleNumbers, setPossibleNumbers } =
		useTombola();
	const [lastExtracted, setLastExtracted] = useState(null);

	const getRandomNumber = (min, max) =>
		Math.floor(Math.random() * (max - min)) + min;

	const handleClick = () => {
		const newTombola = [...tombola];

		const randomIndex = getRandomNumber(0, possibleNumbers.length);

		setLastExtracted(possibleNumbers[randomIndex] + 1);

		newTombola[possibleNumbers[randomIndex]] = true;
		setTombola(newTombola);

		possibleNumbers.splice(randomIndex, 1);
		setPossibleNumbers([...possibleNumbers]);
	};

	return (
		<div className="top-tabellone">
			<button
				className="button extract-button"
				type="button"
				onClick={handleClick}
			>
				Estrai
			</button>

			<button
				className="button end-button"
				type="button"
				disabled={possibleNumbers.length > 75}
				onClick={() => setAlert(true)}
			>
				Termina Partita
			</button>

			{lastExtracted && (
				<span className="last-extracted">
					Ultimo estratto:{" "}
					<span className="extracted-number">{lastExtracted}</span>
				</span>
			)}
		</div>
	);
}
