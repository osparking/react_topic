import { createContext } from "react";
export const UserContext = createContext();

function UserProvider() {
  return (
    <UserContext.Provider value={{ user, setUser }}></UserContext.Provider>
  );
}
