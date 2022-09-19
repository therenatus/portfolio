import React from 'react';
import Recipe from '../assets/projects/recipe.png';
import Weather from '../assets/projects/weather.png';
import Crypto from '../assets/projects/crypto.png';
import Tender from '../assets/projects/tender.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full h-full bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4 text-gray-300'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Projects</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>


            {/* Container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>


                {/* Container Cards */}

                <div style={{backgroundImage: `url(${Recipe})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-cards'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-2xl'>React JS Application</span>
                        <div className='text-center mt-4'>
                            <a href="https://rinad-recipe-app.vercel.app" target='_blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href="https://github.com/therenatus/recipe-app" target='_blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>  
                </div>

                <div style={{backgroundImage: `url(${Weather})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-cards'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-2xl'>React JS Application</span>
                        <div className='text-center mt-4'>
                            <a href="https://rinad-openweather.vercel.app/" target='_blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href="https://github.com/therenatus/weather-app" target='_blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Crypto})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-cards'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-2xl'>React JS Application</span>
                        <div className='text-center mt-4'>
                            <a href="https://rinad-crypto.vercel.app/" target='_blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href="https://github.com/therenatus/crypto-app" target='_blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Tender})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-cards'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-2xl'>MERN FullStack Application</span>
                        <div className='text-center mt-4'>
                            <a href="http://212.112.120.194:3000/" target='_blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href="https://github.com/therenatus/crypto-app" target='_blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects