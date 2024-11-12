
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import Disasters from './pages/Disasters';
import Shelters from './pages/Shelters';
import Userlogin from './pages/Userlogin';
import UserSignup from './pages/UserSignup';
import Volunteerlogin from './pages/Volunteerlogin';
import VolunteerSignup from './pages/VolunteerSignup';


AOS.init(); 

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/disasters' element={<Disasters/>}  />
      <Route path='/shelters' element={<Shelters/>}/>
      <Route path='/userlogin' element={<Userlogin/>} />
      <Route path='/usersignup' element={<UserSignup/>} />
      <Route path='/volunteerlogin' element={<Volunteerlogin/>} />
      <Route path='/volunteersignup' element={<VolunteerSignup/>} />
    </Routes>
   
    </>
  )
}

export default App
