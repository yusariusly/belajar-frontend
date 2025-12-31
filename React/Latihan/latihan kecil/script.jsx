import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function tambah() {
    if (count >= 20) {
      alert("Maksimal 20");
      return;
    }
    setCount(count + 1);
  }

  function kurang() {
    if (count <= -5) {
      alert("Minimal -5");
      return;
    }
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={tambah}>+</button>
      <button onClick={kurang}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
