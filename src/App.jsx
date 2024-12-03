
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
import Disasterguide from './pages/Disasterguide';
import ShelterManagement from './pages/ShelterManagement';
import Usermanagement from './pages/Usermanagement';
import Volunteermanagement from './pages/Volunteermanagement';
import HelpRequest from './pages/HelpRequest';
import DisasterManagement from './pages/DisasterManagement';
import AdminAuth from './pages/AdminAuth';



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
      <Route path='/disasterguide' element={<Disasterguide/>} />
      <Route path='/sheltermngm' element={<ShelterManagement/>}/>
      <Route path='/admin' element={<AdminAuth/>}/>
      <Route path='/usermngm' element={<Usermanagement/>}/>
      <Route path='/volunteermngm'element={<Volunteermanagement/>}/>
      <Route path='/helprequest' element={<HelpRequest/>}/>
      <Route path='/disastermngm' element={<DisasterManagement/>}/>
    </Routes>
   
    </>
  )
}

export default App
