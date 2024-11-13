import React from 'react'
import { Link } from 'react-router-dom'

function Homeknowmore() {
  return (
    <>
      <div className='bg-gray-900 ' style={{ height: '60vh' }}>
        <div className='flex justify-center flex-col items-center text-white py-20'>
          <h1 className='text-center md:text-4xl text-2xl '>Don't Know What to  Do in a Disaster?</h1>
          <h1 className='text-center md:text-4xl text-2xl  mt-3'>We,ve Got You Covered</h1>
          <Link to={'/disasterguide'}>    <button className='bg-sky rounded-full px-4 py-3 text-xl font-bold mt-10'>Know More</button></Link>
        </div>

      </div>

    </>
  )
}

export default Homeknowmore
