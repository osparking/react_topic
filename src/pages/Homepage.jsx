import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  function readProfile() {
    navigate("/dashboard/profile");
  }
  return (
    <div>
      이것은 홈페이지이다.<button onClick={readProfile}>프로필 보기</button>
    </div>
  );
}
