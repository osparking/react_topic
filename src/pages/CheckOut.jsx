import { useContext } from "react";
import { userContext } from "./AppContext";
export default function CheckOut() {
  const value = useContext(userContext);
  return <div>'{value}' 첵크아웃</div>;
}
