import { createContext, useReducer } from "react";
const UserContext = createContext();
function UserProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "login":
        return "";
      case "logout":
        return "";
      default:
        return state;
    }
  }
  const [user, dispatch] = useReducer(reducer, "");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
