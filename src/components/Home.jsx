import React from 'react';
import { HiArrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] pl-[60px] md:pl-0 pt-[40px] md:pt-0'>

        {/* Container */}
        <div className='max-w-[1000px] px-5 m-auto flex flex-col h-full justify-center'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Moldokabylov Rinad</h1>
            <p className='text-4xl sm:text-7xl font-bold text-blue-500'>I'm a JavaScript developer</p>
            <div>
                <button className='flex group border-2 px-7 py-4 my-4 text-white items-center hover:border-blue-600 hover:bg-blue-600 '>
                    View work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowRight className='ml-4' size={20}/>
                    </span> 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home