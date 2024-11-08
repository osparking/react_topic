import { useReducer, useState } from "react";
export default function AppBank() {
  function reducer(state, action) {
    if (action.type === "withdraw") {
      return { ...state, balance: state.balance - amount };
    }
    if (action.type === "deposit") {
      return { ...state, balance: state.balance + amount };
    }
  }
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { balance: 0 });

  return (
    <div>
      범이은행
      <p>잔고: {state.balance}</p>
      <div>
        금액:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={() => dispatch({ type: "deposit" })}>입금</button>
        <button onClick={() => dispatch({ type: "withdraw" })}>출금</button>
      </div>
    </div>
  );
}
