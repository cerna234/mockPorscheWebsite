
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Cars from './pages/Cars';
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/cars" element={<Cars/>} />
        
      
      
        </Routes>
      <Footer/>

    </div>
    
  );
}

export default App;
