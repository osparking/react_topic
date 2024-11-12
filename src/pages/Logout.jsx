import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function Logout() {
  const { dispatch } = useContext(UserContext);
  return (
    <default>
      <button onClick={() => dispatch({ type: "logout"})}>
        로그아웃
      </button>
    </default>
  );
}
