import "./App.css";
import { Navbar } from "./components/Navbar";
import { Mainsection } from "./components/Mainsection";

function App() {
	return (
		<>
			<div id="container">
				<Navbar />
				<Mainsection />
			</div>
		</>
	);
}

export default App;
