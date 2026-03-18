/**
 * interface를 사용하여 데이터의 '설계도'를 미리 정의
 * @param name: 인사할 사용자의 이름 (string)
 */
interface WelcomeProps {
  name: string; 
}

const Welcome = ({ name }: WelcomeProps) => {
  return <h1>Hello, {name}</h1>;
};

// 💡 리팩토링 팁: 
// 최신 React 버전에서는 React.FC 타입을 명시적으로 쓰는 것보다 
// 위와 같이 직접 Props 타입을 지정하는 방식이 불필요한 children 포함을 막아 더 권장됩니다.
