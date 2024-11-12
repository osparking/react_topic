import { createContext, useReducer } from "react";
const UserContext = createContext();
function UserProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "login":
        return action.payload;
      case "logout":
        return "guest";
      default:
        return state;
    }
  }
  const [user, dispatch] = useReducer(reducer, "");
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
