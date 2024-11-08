import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div>
      <Link to="/dashboard">대시보드</Link>
      이것은 홈페이지이다.
    </div>
  );
}
