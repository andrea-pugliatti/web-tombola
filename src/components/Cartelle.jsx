/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Ignore linter> */
import { useState } from "react";

export default function Cartelle({ tombola }) {
	const [cartelle, setCartelle] = useState([]);
	const [numPlayers, setNumPlayers] = useState("");

	const getRandomNumber = (min, max) =>
		Math.floor(Math.random() * (max - min)) + min;

	const handleSubmit = (e) => {
		e.preventDefault();

		const players = [];
		for (let i = 0; i < numPlayers; i++) {
			const numbers = [];
			const counters = Array(9).fill(0);

			while (numbers.length < 15) {
				const random = getRandomNumber(1, 90);
				const decimal = Math.floor(random / 10);

				if (counters[decimal] >= 3) continue;

				if (numbers.includes(random)) continue;

				numbers.push(random);
				counters[decimal] += 1;
			}

			numbers.sort((a, b) => a - b);

			for (let i = 0; i < counters.length; i++) {
				const nNums = counters[i];

				if (nNums === 0) {
					numbers.splice(i * 3, 0, " ", " ", " ");
				} else if (nNums === 1) {
					const num = numbers.splice(i * 3, 1, " ", " ", " ");
					const random = getRandomNumber(0, 3);
					numbers[i * 3 + random] = num[0];
				} else if (nNums === 2) {
					const random = getRandomNumber(0, 3);
					numbers.splice(i * 3 + random, 0, " ");
				}
			}
			console.log(numbers);
			players.push(numbers);
		}
		setCartelle(players);
	};

	return (
		<>
			<div className="form-cartelle">
				<form onSubmit={handleSubmit}>
					<input
						type="number"
						name="players"
						placeholder="Inserisci"
						value={numPlayers}
						onChange={(e) => setNumPlayers(e.target.value)}
					/>

					<button type="submit">Genera cartelle</button>
				</form>
			</div>

			<div className="cartelle">
				{cartelle.map((cartella, index) => {
					return (
						<div key={`cartella-${index}`} className="cartella">
							{cartella.map((numero, index) => {
								return (
									<span
										className={`number ${tombola[numero - 1] ? "active" : ""}`}
										key={`numero-${index}`}
									>
										{numero}
									</span>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
}
