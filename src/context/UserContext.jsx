import { createContext } from "react";
const UserContext = createContext();

function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
