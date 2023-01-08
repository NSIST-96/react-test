import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
