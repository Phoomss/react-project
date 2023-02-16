import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import Laptop from './pages/Laptop';
import Mouse from './pages/Mouse';


function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/sing in' element={<SingIn/>}/>
    <Route path='/sing up' element={<SingUp/>}/>
    <Route path='/laptop' element={<Laptop/>}/>
    <Route path='/mouse' element={<Mouse/>}/>
   </Routes>
   
  );
}

export default App;
