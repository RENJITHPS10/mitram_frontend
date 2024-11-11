
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import Disasters from './pages/Disasters';
import Shelters from './pages/Shelters';
import UserAuth from './pages/UserAuth';

AOS.init(); // Initialize AOS once on app load

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/disasters' element={<Disasters/>}  />
      <Route path='/shelters' element={<Shelters/>}/>
      <Route path='/userauth' element={<UserAuth/>} />
    </Routes>
   
    </>
  )
}

export default App
