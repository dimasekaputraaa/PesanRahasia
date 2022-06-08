import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import './css/Style.css';
import Awal from './components/Awal';
import mobileNav from './components/mobileNav';
import Pesan from './components/Pesan';


function App() {
  return (
    <div>
      <div className='atas'>
        <NavigationBar />
        <mobileNav />
        <Awal />
      </div>
      {/* <div className='kedua'>
        <Pesan />
      </div> */}
    </div>
    
  );
}

export default App;
