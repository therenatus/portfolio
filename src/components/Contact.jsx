import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-full bg-[#0a192f] mt-[100px] sm:mt-[200px] pb-[150px]'>
            <form action="" method="post" className='max-w-[600px] mx-auto px-4 flex flex-col justify-center items-center'>
                <div className='w-full mb-6'>
                    <p className='text-4xl font-bold text-white inline border-b-4 border-blue-400'>Contact</p>
                </div>
                <input className='w-full my-2 p-3 bg-gray-300 rounded-lg' name='name' type="text" placeholder='Name' />
                <input className='w-full my-2 p-3 bg-gray-300 rounded-lg' name='email' type="email" placeholder='Email' />
                <textarea className='w-full my-2 p-3 bg-gray-300 rounded-lg' name='message' rows="10" placeholder='Message'></textarea>
            </form>
        </div>
    )
}

export default Contact