import "./App.scss";
import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting/Greeting";
import Home from "./components/Home/Home";
function App() {
  const dishes = [
    {
      id: 1,
      name: "Carbonara",
      description:
        "La carbonara è un primo piatto tipico della tradizione romana preparato con un condimento a base di uova, guanciale e pecorino romano.",
      price: 10,
    },
    {
      id: 2,
      name: "Ricotta alle fungi",
      description:
        "La ricotta è un latticino dall'aspetto piuttosto denso e granuloso. ",
      price: 20,
    },
    {
      id: 3,
      name: "Focaccia",
      description:
        "La focaccia è un pane basso, composto da un impasto di farina, acqua, sale e lievito, che può essere cotto sia al forno che alla brace",
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
