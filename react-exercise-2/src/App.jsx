import "./App.scss";
import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting/Greeting";
import Home from "./components/Home/Home";
function App() {
  const dishes = [
    {
      id: 1,
      name: "plato 1",
      description: "Este es el plato 1",
      price: 10,
    },
    {
      id: 2,
      name: "plato 2",
      description: "Este es el plato 2",
      price: 20,
    },
    {
      id: 3,
      name: "plato 3",
      description: "Este es el plato 3",
      price: 15,
    },
  ];

  return (
    <div>
      <Greeting />
      <Home dishesList={dishes} />
      <Counter />
      <Counter count={3} mult={2} />
      <Counter count={97} mult={3} />
    </div>
  );
}

export default App;
