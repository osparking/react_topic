import { useReducer, useState } from "react";
export default function AppBank() {
  function reducer() {}
  const [balance, setBalance] = useState(0);
  const [state, dispatch] = useReducer(reducer, { amount: 0 });

  return (
    <div>
      범이은행
      <p>잔고: {balance}</p>
      <div>
        금액: <input type="number" value="0" />
      </div>
      <div>
        <button>입금</button>
        <button>출금</button>
      </div>
    </div>
  );
}
