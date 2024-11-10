import { createContext } from "react";
import CheckOut from "./CheckOut";
export const userContext = createContext();

function AppContext() {
  return (
    <div>
      <userContext.Provider value="guest">
        <CheckOut />
      </userContext.Provider>
    </div>
  );
}

export default AppContext;
