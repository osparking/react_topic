import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <Link to="/">홈페이지</Link>&nbsp;
      <Link to="/dashboard">대시보드</Link>
    </div>
  );
}
