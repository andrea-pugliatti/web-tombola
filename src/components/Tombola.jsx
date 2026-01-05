export default function Tabellone({ tombola }) {
	return (
		<div className="row">
			{tombola.map((current, index) => (
				<div
					className={`number ${current ? "active" : ""}`}
					key={`btn-${index}-${Date.now()}`}
				>
					{index + 1}
				</div>
			))}
		</div>
	);
}
