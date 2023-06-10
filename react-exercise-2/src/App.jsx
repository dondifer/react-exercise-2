import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting/Greeting";
import GreetingC from "./components/GreetingC/GreetingC";
import Home from "./components/Home/Home";
import HomeC from "./components/HomeC/HomeC";
import Header from "./components/Header/Header.jsx";

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
      <Header />
      <Greeting />
      <GreetingC />
      <Home dishesList={dishes} />
      <HomeC dishesList={dishes} />
      <Counter />
      <Counter count={3} mult={2} />
      <Counter count={97} mult={3} />
    </div>
  );
}

export default App;
