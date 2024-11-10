import { createContext, useState } from "react";
import CheckOut from "./CheckOut";
import Login from "./Login";
export const userContext = createContext();

function AppContext() {
  const [user, setUser] = useState("guest");
  return (
    <div>
      <Login />
      <userContext.Provider value={{ user }}>
        <CheckOut />
      </userContext.Provider>
    </div>
  );
}

export default AppContext;
