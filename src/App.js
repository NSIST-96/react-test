import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
