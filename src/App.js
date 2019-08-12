import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import Todo from "./components/Todo";

function App () {
	return (
		<div className="App">
			<NavbarComponent />
			<Todo />
		</div>
	);
}

export default App;
