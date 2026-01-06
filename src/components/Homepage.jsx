/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Ignore linter> */
import { useEffect, useState } from "react";

import { useTombola } from "../contexts/TombolaContext";

import Cartelle from "./Cartelle";
import Header from "./Header";
import Tabellone from "./Tombola";

export default function Homepage() {
	const {
		tombola,
		setTombola,
		possibleNumbers,
		setPossibleNumbers,
		initializeTombola,
	} = useTombola();
	const [lastExtracted, setLastExtracted] = useState(null);
	const [alert, setAlert] = useState(false);

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

	useEffect(initializeTombola, []);

	return (
		<>
			<Header />

			<div className="container">
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

				<Tabellone tombola={tombola} />

				<Cartelle tombola={tombola} />
			</div>

			<div
				className={`alert ${alert || possibleNumbers.length === 0 ? "" : "d-none"}`}
			>
				<h2>HAI FATTO TOMBOLA!</h2>
				<button
					type="button"
					className="button alert-button"
					onClick={() => {
						setAlert(false);
						initializeTombola();
					}}
				>
					Reset
				</button>
			</div>
		</>
	);
}
