import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Usermanagement() {
  return (
    <>
     <div className='bg-gray-950  w-full '>
        <div className='flex justify-center  h-screen pt-28'>
            

<div className="relative overflow-x-auto   sm:rounded-lg">
    <table className="w-full text-sm text-left   shadow-xl text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700   bg-gray-900 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-14 py-3 text-xl">
                 SI NO
                </th>
                <th scope="col" className="px-14 py-3 text-xl">
                USERNAME
                </th>
                <th scope="col" className="px-14 py-3 text-xl">
                EMAIL
                </th>
                <th scope="col" className="px-14 py-3 text-xl">
                    PROOF
                </th>
                <th scope="col" className="px-14 py-3 text-xl">
                    ACTION
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className=" border-b bg-slate-800 border-gray-700 hover:bg-gray-800 ">
                <th scope="row" className="px-14 py-2 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td className="px-14 py-2 text-lg">
               RENJITH 
                </td>
                <td className="px-14 py-2 text-lg">
                 renjithpandiyath@gmail.com
                </td>
                <td className="px-14 py-2 text-lg">
                  <img src="/camp.jpg" alt="proof" className='h-20 w-20 rounded-full' />
                </td>
                <td className="px-14 py-2 text-lg">
                 <div className='flex '>
                    <button><FontAwesomeIcon icon={faCircleXmark}  className='text-red-700 fa-2x'/></button>
                    <button><FontAwesomeIcon icon={faCircleCheck}  className='text-green-700 fa-2x ms-4'/></button>

                 </div>
                </td>
            </tr>
           
          
        </tbody>
    </table>
</div>


        </div>
   

    </div>
      
    </>
  )
}

export default Usermanagement
