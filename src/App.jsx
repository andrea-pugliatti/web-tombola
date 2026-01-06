import Homepage from "./components/Homepage";
import { TombolaProvider } from "./contexts/TombolaContext";

function App() {
	return (
		<TombolaProvider>
			<Homepage />
		</TombolaProvider>
	);
}

export default App;
