import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {

    return (
        <>
            <Header />


            <div className='bg-cover  bg-homecover   ' >
                <div className=' text-white text-2xl'>
                    <marquee behavior="" direction="">
                        🚨 Disaster Alert: Evacuation order in effect! 🚨
                    </marquee>
                </div>
                <div className='grid md:grid-cols-3  text-white md:ps-28 py-36'>
                    <div className='bg-danger1 h-96 w-3/4 bg-cover bg-center flex items-center justify-center flex-col  rounded-3xl '>
                        <h1 className='text-3xl pt-24 ps-4'>REPORT</h1>
                        <h2 className='text-3xl ps-5'>DISASTER</h2>
                    </div>
                    <div className='bg-shelter1 h-96 w-3/4 bg-cover bg-center flex items-center justify-center flex-col  rounded-3xl'>
                        <h1 className='text-3xl pt-24 ps-4'>FIND</h1>
                        <h2 className='text-3xl ps-5'>SHELTER</h2>
                    </div>
                    <div className='bg-help1 h-96 w-3/4 bg-cover bg-center flex items-center justify-center flex-col  rounded-3xl'>
                        <h1 className='text-3xl pt-24 ps-4'>REQUEST</h1>
                        <h2 className='text-3xl ps-5'>HELP</h2>
                    </div>
                </div>

            </div>




            <Footer />
        </>
    )
}

export default Home
