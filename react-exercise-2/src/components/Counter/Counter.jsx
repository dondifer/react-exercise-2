import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props?.count || 0);
  return (
    <div>
      <div className="card">
        <p>
          <span>count is {count}</span>
        </p>
        <button
          onClick={() => setCount((count) => count + 1 * (props.mult || 1))}
        >
          +
        </button>
        <button
          onClick={() => setCount((count) => count - 1 * (props.mult || 1))}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
