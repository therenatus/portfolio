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
                    <p className='sm:text-right text-4xl font-bold'>Hi. I'm Rinad, nice to meet you. Please take a look around.</p>
                </div>
                <div className='pb-8 pl-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eius tempora sequi id debitis, deleniti voluptate labore sint aliquid temporibus enim sit? Cumque adipisci similique, distinctio rerum tempora in necessitatibus?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About