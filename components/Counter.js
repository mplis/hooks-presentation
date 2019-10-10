import React from "react";
import "./Counter.css";

export const Counter = props => {
  const [count, setCount] = React.useState(0);

  return (
    <button
      className="Counter"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
};
