import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      이것은 대쉬보드이다.
      <Outlet />
    </div>
  );
}
