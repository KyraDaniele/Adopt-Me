const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
