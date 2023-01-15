import './App.css';
import Content from './Components/Content/Content.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

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
