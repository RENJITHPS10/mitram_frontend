
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

import Disasterguide from './pages/Disasterguide';
import ShelterManagement from './pages/ShelterManagement';
import Usermanagement from './pages/Usermanagement';

import HelpRequest from './pages/HelpRequest';
import DisasterManagement from './pages/DisasterManagement';
import AdminAuth from './pages/AdminAuth';
import UserDashboard from './pages/UserDashboard';
import Pagenotfound from './pages/Pagenotfound';
import Verificationmessage from './pages/Verificationmessage';



AOS.init(); 

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/userdashboard' element={<UserDashboard/>}  />
      <Route path='/disasters' element={<Disasters/>}  />
      <Route path='/shelters' element={<Shelters/>}/>
      <Route path='/userlogin' element={<Userlogin/>} />
      <Route path='/usersignup' element={<UserSignup/>} />
      <Route path='/disasterguide' element={<Disasterguide/>} />
      <Route path='/sheltermngm' element={<ShelterManagement/>}/>
      <Route path='/admin' element={<AdminAuth/>}/>
      <Route path='/usermngm' element={<Usermanagement/>}/>
      <Route path='/helprequest' element={<HelpRequest/>}/>
      <Route path='/disastermngm' element={<DisasterManagement/>}/>
      <Route path='/verify' element={<Verificationmessage/>}/>
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
   
    </>
  )
}

export default App
