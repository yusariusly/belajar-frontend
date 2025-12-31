import { useState } from "react";

function App() {
  const [lampu, setLampu] = useState({
    status: "OFF",
    menyala: false
  });

  function toggleLampu() {
    setLampu({
      ...lampu,
      status: lampu.menyala ? "OFF" : "ON",
      menyala: !lampu.menyala
    });
  }

  function resetLampu() {
    setLampu({
      status: "OFF",
      menyala: false
    });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Status Lampu: {lampu.status}</h2>

      <button onClick={toggleLampu}>Toggle</button>
      <button onClick={resetLampu}>Reset</button>
    </div>
  );
}

export default App;
