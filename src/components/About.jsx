import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] flex flex-col justify-center mx-auto w-full h-full'>
            <div className='grid grid-cols-2 gap-8 w-full'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold border-b-4 inline border-blue-400'>About</p>
                </div>
                <div></div>
            </div>
            <div className='sm:grid grid-cols-2 gap-8 w-full'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='sm:text-right text-4xl font-bold'>Hi. I'm Clint, nice to meet you. Please take a look around.</p>
                </div>
                <div className='pb-8 pl-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia sunt atque expedita soluta, tempore reprehenderit quos ipsam officiis voluptatibus quo quisquam odit provident deserunt non, ducimus at similique dolorum?
                        Debitis iure doloribus cum eius consequatur repudiandae incidunt aut officiis, placeat dolorem natus voluptatum libero sequi officia sunt voluptate optio? Ullam quam iure, dolorem nobis quae facilis! Optio, eveniet tempore?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About