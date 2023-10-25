import { useState } from "react";

function HookCounter2() {
  const initialcount = 0;
  const [count, setCount] = useState(initialcount);
  const buttonStyle = {
    padding: "8px 16px",
    fontSize: "16px",
    borderRadius: "3px",
    cursor: "pointer",
    color: "white",
  };
  return (
    <div>
      count:{count}
      <button
        style={{ ...buttonStyle, backgroundColor: "red" }}
        onClick={() => setCount(initialcount)}
      >
        Reset
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "green" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "blue" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default HookCounter2;
