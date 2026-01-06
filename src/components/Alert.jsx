import { useTombola } from "../contexts/TombolaContext";

export default function Alert({ alert, setAlert }) {
	const { possibleNumbers, initializeTombola } = useTombola();

	return (
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
	);
}
