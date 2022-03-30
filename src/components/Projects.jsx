import React from 'react';
import WorkImg from '../assets/workImg.jpeg';

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

                <div style={{backgroundImage: `url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-cards'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-2xl'>React JS Application</span>
                        <div className='text-center mt-4'>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-cards'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-2xl'>React JS Application</span>
                        <div className='text-center mt-4'>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-cards'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-2xl'>React JS Application</span>
                        <div className='text-center mt-4'>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-cards'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-2xl'>React JS Application</span>
                        <div className='text-center mt-4'>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-cards'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-2xl'>React JS Application</span>
                        <div className='text-center mt-4'>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-cards'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-2xl'>React JS Application</span>
                        <div className='text-center mt-4'>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href=""><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects