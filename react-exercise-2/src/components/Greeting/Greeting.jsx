import "./Greeting.scss";
import { useState, useEffect } from "react";

const Greeting = (props) => {
  const [name, setName] = useState(props?.name || "Euralio");
  useEffect(() => {
    setTimeout(() => {
      setName("Alfonsina");
    }, 3000);
  }, []);
  return (
    <div>
      <div className="card">
        <p>
          <span>Hola {name}</span>
        </p>
      </div>
    </div>
  );
};

export default Greeting;
