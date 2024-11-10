import { createContext, useState } from "react";
import CheckOut from "./CheckOut";
export const userContext = createContext();

function AppContext() {
  const [user, setUser] = useState("guest");
  return (
    <div>
      <userContext.Provider value={{user}}>
        <CheckOut />
      </userContext.Provider>
    </div>
  );
}

export default AppContext;
