import Header from './Header';
import Hero from './Hero';
import Card from './Card';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* 2개 이상의 Props(title, desc)를 전달하여 조건 충족 */}
      <Card title="Concept 01" desc="Exploring gravity-free web design." />
      <About />
      <Footer />
    </div>
  );
}
export default App;
