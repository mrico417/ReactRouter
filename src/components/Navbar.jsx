import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div id="navbar">
			<Link to="/">Home</Link>
			<Link to="/blue">Blue</Link>
			<Link to="/Red">Red</Link>
		</div>
	);
};
