import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();
  return (
    <div>
      <p>제품 상세 정보</p>
      <p>표시되는 제품 ID: {id}</p>
    </div>
  );
}
