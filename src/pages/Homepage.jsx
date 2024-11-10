import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  function readProfile() {
    navigate("/dashboard/profile", { state: { username } });
  }
  return (
    <div>
      이것은 홈페이지이다.
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={readProfile}>프로필 보기</button>
      </div>
    </div>
  );
}
