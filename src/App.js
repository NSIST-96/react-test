import './App.css';
import Profile from './Components/Profile/Profile.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Dialogs from './Components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <Dialogs />
      <Footer />
    </div>
  );
}

export default App;
