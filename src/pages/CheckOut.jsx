import { useContext } from "react";
import { userContext } from "./AppContext";
export default function CheckOut() {
  const { user } = useContext(userContext);
  return <div>'{user}' 첵크아웃</div>;
}
