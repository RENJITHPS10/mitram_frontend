import React from 'react'
import Header from '../components/Header'

function Home() {
    
    return (
        <>
        <Header/>
      <div className='bg-gray-900 text-white text-2xl'>
            <marquee behavior="" direction="">
            🚨 Disaster Alert: Evacuation order in effect! 🚨
            </marquee>
      </div>
      
      <div className='h-screen bg-cover  bg-homecover ' >
        <div className='grid grid-cols-3  text-white md:p-10  '>
            <div>1</div>
            <div>1</div>
            <div>1</div>

        </div>

      </div>
    

        


        </>
    )
}

export default Home
