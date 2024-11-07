import { useReducer, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type == "inc") {
      return state + action.payload;
    } else if (action.type == "dec") {
      return state - action.payload;
    }
  }
  return (
    <div className="App">
      계수: {count}
      <button onClick={() => setCount(count + 1)}>증가 1</button>
      <button onClick={() => setCount(count - 1)}>감소 1</button>
      <br />
      상태: {state}
      <button onClick={() => dispatch({ type: "inc", payload: 1 })}>
        상태 ^
      </button>
    </div>
  );
}

export default App;
