import { useState } from "react";
import CheckOut from "./CheckOut";
import Login from "./Login";

function AppContext() {
  const [user, setUser] = useState("guest");
  return (
    <div>
      <Login />
      <CheckOut />
    </div>
  );
}

export default AppContext;
