import { UserProvider } from "../context/UserContext";
import CheckOut from "./CheckOut";
import Login from "./Login";

function AppContext() {
  return (
    <div>
      <UserProvider>
        <Login />
        <CheckOut />
      </UserProvider>
    </div>
  );
}

export default AppContext;
