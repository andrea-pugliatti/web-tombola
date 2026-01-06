import { useEffect, useState } from "react";

import { useTombola } from "../contexts/TombolaContext";

import Alert from "./Alert";
import Cartelle from "./Cartelle";
import Header from "./Header";
import Tabellone from "./Tombola";
import TombolaControls from "./TombolaControls";

export default function Homepage() {
	const { tombola, initializeTombola } = useTombola();
	const [alert, setAlert] = useState(false);

	useEffect(initializeTombola, []);

	return (
		<>
			<Header />

			<Alert alert={alert} setAlert={setAlert} />

			<div className="container">
				<TombolaControls setAlert={setAlert} />

				<Tabellone tombola={tombola} />

				<Cartelle tombola={tombola} />
			</div>
		</>
	);
}
