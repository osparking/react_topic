import { UserProvider } from "../context/UserContext";
import CheckOut from "./CheckOut";
import Login from "./Login";
import Logout from "./Logout";

function AppContext() {
  return (
    <div>
      <UserProvider>
        <Login />
        <CheckOut />
        <Logout />
      </UserProvider>
    </div>
  );
}

export default AppContext;
