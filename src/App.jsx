import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, delta: 1 });

  function reducer(state, action) {
    if (action.type == "inc") {
      return { ...state, count: state.count + state.delta };
    } else if (action.type == "dec") {
      return { ...state, count: state.count - state.delta };
    } else if (action.type == "delta") {
      return { ...state, delta: action.payload };
    }
  }
  return (
    <div className="App">
      <div>
        변화량:
        <input
          type="text"
          value={state.delta}
          onChange={(e) =>
            dispatch({ type: "delta", payload: Number(e.target.value) })
          }
        />
      </div>
      상태: {state.count}
      <button onClick={() => dispatch({ type: "inc" })}>상태 ^</button>
      <button onClick={() => dispatch({ type: "dec" })}>상태 v</button>
    </div>
  );
}

export default App;
