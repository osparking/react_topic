import { useContext, useState } from "react";
import { userContext } from "./AppContext";
export default function Login() {
  const [userId, setUserId] = useState("");
  const { user, setUser } = useContext(userContext);
  function handleSubmit(e) {
    e.preventDefault();
    setUser(userId);
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
