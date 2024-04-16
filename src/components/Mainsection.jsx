import { Routes, Route } from "react-router-dom";
import { Home } from "/src/components/Home";
import { Blue } from "/src/components/Blue";
import { Red } from "/src/components/Red";

export const Mainsection = () => {
	return (
		<div id="main-section">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blue" element={<Blue />} />
				<Route path="/red" element={<Red />} />
			</Routes>
		</div>
	);
};
