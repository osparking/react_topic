import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="profile">프로필</Link>
        </li>
        <li>
          <Link to="settings">설정</Link>
        </li>
      </ul>
      이것은 대쉬보드이다.
      <Outlet />
    </div>
  );
}
