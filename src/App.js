
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
          
          <Route path="/" element={<Home/>} />
        
      
      
        </Routes>
      <Footer/>

    </div>
    
  );
}

export default App;
