import { useReducer, useState } from "react";
export default function AppBank() {
  function reducer(state, action) {
    if (action.type === "money") {
      return { amount: action.payload };
    }
  }
  const [balance, setBalance] = useState(0);
  const [state, dispatch] = useReducer(reducer, { amount: 0 });

  return (
    <div>
      범이은행
      <p>잔고: {balance}</p>
      <div>
        금액:
        <input
          type="text"
          value={state.amount}
          onChange={(e) =>
            dispatch({ type: "money", payload: Number(e.target.value) })
          }
        />
      </div>
      <div>
        <button
          onClick={() => {
            console.log(state.amount);
          }}
        >
          입금
        </button>
        <button>출금</button>
      </div>
    </div>
  );
}
