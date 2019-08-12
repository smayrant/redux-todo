import React from "react";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="#home">Redux-ToDo</Navbar.Brand>
		</Navbar>
	);
};

export default NavbarComponent;
