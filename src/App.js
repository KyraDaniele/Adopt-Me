import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
	return React.createElement("div", { id: "something-important" }, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, {
			name: "Zelda",
			animal: "Cat",
			breed: "Striped"
		}),
		React.createElement(Pet, {
			name: "Stormageddon, Dark Lord Of All",
			animal: "Cat",
			breed: "Blue Cream Tortie"
		}),
		React.createElement(Pet, {
			name: "Steve",
			animal: "Dog",
			breed: "Corgi"
		})
	]);
};

render(React.createElement(App), document.getElementById("root"));
