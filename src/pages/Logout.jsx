import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function Logout() {
  const { setUser } = useContext(UserContext);
  return (
    <default>
      <button onClick={() => setUser("guest")}>로그아웃</button>
    </default>
  );
}
