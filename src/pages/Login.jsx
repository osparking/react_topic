import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
export default function Login() {
  const [userId, setUserId] = useState("");
  const { dispatch } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: "login", payload: userId});
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
