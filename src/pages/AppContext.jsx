import { createContext, useState } from "react";
import CheckOut from "./CheckOut";
import Login from "./Login";

function AppContext() {
  const [user, setUser] = useState("guest");
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <Login />
        <CheckOut />
      </userContext.Provider>
    </div>
  );
}

export default AppContext;
