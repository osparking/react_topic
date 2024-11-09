import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <Link to="profile">프로필</Link>&nbsp;
      <Link to="settings">설정</Link>
      <br />
      이것은 대쉬보드이다.
      <Outlet />
    </div>
  );
}
