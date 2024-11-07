import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>증가 1</button>
      <button onClick={() => setCount(count - 1)}>감소 1</button>
    </div>
  );
}

export default App;
