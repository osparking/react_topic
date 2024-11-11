import { useContext } from "react";
import { UserContext } from "./AppContext";
export default function CheckOut() {
  const { user } = useContext(UserContext);
  return <div>'{user}' 첵크아웃</div>;
}
