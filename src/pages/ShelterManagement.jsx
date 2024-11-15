import React, { useContext } from 'react'
import AdminHeader from '../components/AdminHeader'
import {  faEdit, faHouseCircleCheck, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Adminsidebar from '../components/Adminsidebar'
import ShelterModal from '../components/ShelterModal'
import { modalResponseContext } from '../context/Contextshare'


function ShelterManagement() {
  const {setIsModalOpen}=useContext(modalResponseContext)
  

  return (
    <>


      <AdminHeader />
      <div className='flex'>
        <Adminsidebar />

        <div className='bg-gray-950  w-full '>

          <div className='flex justify-center  h-screen pt-28'>


            <div className="relative overflow-x-auto  max-w-6xl  sm:rounded-lg">
              <div className="flex justify-end">
                <button className="text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 rounded-xl px-6 py-3 font-semibold   hover:shadow-xl transition duration-300 ease-in-out mb-2" onClick={setIsModalOpen}>
                  <FontAwesomeIcon icon={faHouseCircleCheck} className="mr-2" />
                  ADD SHELTER
                </button>
              </div>

              <div className='overflow-x-auto'>
                <table className="w-full text-sm text-left   shadow-xl text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700   bg-gray-900 dark:text-gray-400 uppercase">
                    <tr>
                      <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                        SI_NO
                      </th>
                      <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                        ShelterName
                      </th>
                      <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                        Location
                      </th>
                      <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                        Capacity
                      </th>
                      <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                        ACTIONs
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" border-b bg-slate-800 border-gray-700 hover:bg-gray-800 ">
                      <th scope="row" className="md:px-14 px-5 py-2 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                      </th>
                      <td className="md:px-14 px-5 py-2 text-lg">
                        Kochi shelter
                      </td>
                      <td className="md:px-14 px-5 py-2 text-lg">
                        kochi
                      </td>
                      <td className="md:px-14 px-5 py-2 text-lg">
                        50
                      </td>
                      <td className="px-6 py-4 text-center space-x-4">
                        <button className="text-blue-500 hover:text-blue-600">
                          <FontAwesomeIcon icon={faEdit} className='fa-2x me-2' />
                        </button>
                        <button className="text-red-500 hover:text-red-600">
                          <FontAwesomeIcon icon={faTrash} className='fa-2x' />
                        </button>
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div>


          </div>
        </div>


      </div>
      <ShelterModal/>





    </>
  )
}

export default ShelterManagement
