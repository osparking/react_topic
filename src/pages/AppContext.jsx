import { createContext } from "react";
import CheckOut from "./CheckOut";

function AppContext() {
  const userContext = createContext();
  return (
    <div>
      <userContext.Provider>
        <CheckOut />
      </userContext.Provider>
    </div>
  );
}

export default AppContext;
