import { createContext, useReducer, useState } from "react";
const UserContext = createContext();
function UserProvider({ children }) {
  const [user, dispatch] = useReducer(reducer, "");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
