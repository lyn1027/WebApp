// 자식 컴포넌트: 부모로부터 title과 desc를 받아 출력
const Card = ({ title, desc }) => {
  return (
    <div className="card-item">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
export default Card;
