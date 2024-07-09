import React from 'react'

const Contact = () => {
  return (
    <div className="xl:w-9.5/10 dark:bg-stone-200 bg-zinc-900 dark:text-black text-white animate-fadeIn mx-auto  min-h-screen">
        <h1 className=' mt-10 text-2xl flex justify-center'>Contact me:</h1>
        <h2 className='text-xl mt-10'>Linkden:</h2>
        <a className=' text-l dark:text-indigo-700 text-blue-600' href="https://www.linkedin.com/in/adam-eltarzi-45313a23b/" target="_blank" rel="noopener noreferrer">
            Click here to visit my Linkden Page
        </a>
       
        <h2 className='text-xl mt-20'>Email:</h2>
        <a href={`mailto:adameltarzi@gmail.com`} className="dark:text-indigo-700 text-blue-600">
            adameltarzi@gmail.com 
         </a>


         <h2 className='text-xl mt-20'>Phone Number:</h2>
        <p>
            0 7311 658 542
        </p>

        <h2 className='text-xl mt-20'>GitHub:</h2>
        <a className=' text-l dark:text-indigo-700 text-blue-600' href="https://github.com/adambolt2" target="_blank" rel="noopener noreferrer">
            Click here to visit my GitHub Page
        </a>
       

    </div>
  )
}

export default Contact