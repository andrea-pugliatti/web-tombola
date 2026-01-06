/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Ignore linter> */
import { useEffect, useState } from "react";

import { useTombola } from "../contexts/TombolaContext";

import Cartelle from "./Cartelle";
import Header from "./Header";
import Tabellone from "./Tombola";
import TombolaControls from "./TombolaControls";

export default function Homepage() {
	const { tombola, possibleNumbers, initializeTombola } = useTombola();
	const [alert, setAlert] = useState(false);

	useEffect(initializeTombola, []);

	return (
		<>
			<Header />

			<div className="container">
				<TombolaControls setAlert={setAlert} />

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
