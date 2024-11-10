import { useState } from "react";
export default function Login() {
  const [userId, setUserId] = useState("");
  return (
    <div>
      <form>
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
