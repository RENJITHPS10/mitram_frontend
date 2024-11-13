import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { faTriangleExclamation, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Usermanagement from '../components/Usermanagement'
import Volunteermanagement from '../components/Volunteermanagement'


function AdminDashboard() {
  return (
    <>
    <AdminHeader/>
    <div className='flex'>
    <div className='bg-black h-screen w-96 pt-28' >
        <h1 className='text-xl text-white   p-5'><FontAwesomeIcon icon={faUsers}  className='me-2 clear-start text-blue-500'/>User Managament</h1>
        <h1 className='text-xl text-white   p-5'><FontAwesomeIcon icon={faTriangleExclamation}  className='me-2 text-yellow-400'/>Disaster Alert</h1>
        <h1 className='text-xl text-white   p-5'><FontAwesomeIcon icon={faUsers}  className='me-2'/>Volunteer Managament</h1>
        <h1 className='text-xl text-white   p-5'><FontAwesomeIcon icon={faUsers}  className='me-2'/>Shelter Managament</h1>
        
        

    </div>
    {/* <Usermanagement/> */}
  <Volunteermanagement/>
   

    </div>
    

      
    </>
  )
}

export default AdminDashboard
