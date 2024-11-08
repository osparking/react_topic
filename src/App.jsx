import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    if (action.type == "inc") {
      return { ...state, count: state.count + action.payload };
    } else if (action.type == "dec") {
      return { ...state, count: state.count - action.payload };
    }
  }
  return (
    <div className="App">
      상태: {state.count}
      <button onClick={() => dispatch({ type: "inc", payload: 1 })}>
        상태 ^
      </button>
      <button onClick={() => dispatch({ type: "dec", payload: 1 })}>
        상태 v
      </button>
    </div>
  );
}

export default App;
