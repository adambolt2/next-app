import React from 'react'
import MyUniversity from './MyUniversity'

const AcademicMe = () => {
  return (
<div className="xl:w-9.5/10 dark:bg-stone-200 bg-zinc-900 dark:text-black text-white animate-fadeIn mx-auto flex justify-center min-h-screen">
  <div className="mt-10 flex items-start">
    <div className="p-4 flex-1">
    <div className="box ml-4">
        <h1 className="w-fit text-xl py-4 mb-0 font-bold animate-fadeInInner">Academic History & Achievements:</h1>
    </div>
      <p  className="pl-5 mb-10 animate-fadeInInner lg:text-justify">
      Having spent 15 formative years in a British school meticulously preparing us for the rigors of the IGCSE, the decision to transition to life in Britain was a natural progression. This path led me to Northumbria University, celebrated as the University of the Year, where I embarked on an in-depth journey into the world of programming. Under the tutelage of professors from a myriad of backgrounds, I was taught the fundamentals of a plethora of programming languages. Graduating with a first-class degree and achieving one of the highest overall grades in my year (top 20), I acquired essential skills that have proven invaluable, enabling me to adeptly navigate and conquer programming challenges to this day.      </p>
      <div className="box ml-4">
        <h1 className="w-fit text-xl py-4 mb-0 font-bold animate-fadeInInner">Projects & Modules:</h1>
    </div>
          <div className="pl-5 mb-5 animate-fadeInInner lg:text-justify">
        <h2 className='text-l py-4 mb-0 font-bold animate-fadeInInner'> Dementia With Lewy Bodies Project (2022 - 2023) awarded with a First class  </h2>
        <ul className="list-none pl-4 lg:text-justify">
          <li className="custom-list-item mb-5">  Conducted research on the psychology of Dementia With Lewy Bodies (DLB) and simulated it in a VR setting using Unreal Engine 5.</li>
          <li className='custom-list-item mb-5 '> Created a low-fidelity prototype for the project with a high-fidelity follow-up. After doing so a game design document was also written up. </li>
          <li className='custom-list-item mb-5 '> Developed animations and gameplay using VR to simulate DLB in a horror game. </li>
          <li className='custom-list-item mb-5 '> Received great feedback on the VR game and inspired my younger peers to persue VR for their dessertation. </li>
        </ul>
        <h2 className='text-l py-4 mb-0 font-bold animate-fadeInInner lg:text-justify'>Error Detection in C Project (2021-2022) & Java Optimization- Received a first Class </h2>
        <ul className="list-none pl-4">
          <li className="custom-list-item mb-5">  Fixed errors in faulty C code in a Linux environment, including handling TCP and UDP communication issues. Achieved a score of 100% in the coding aspect of the module and a total score of 90%.</li>
          <li className='custom-list-item mb-5 '> Optimized faulty Java code while maintaining code integrity as part of an assessment. </li>
        </ul>
        <h2 className='text-l py-4 mb-0 font-bold animate-fadeInInner lg:text-justify'>Graphics and Animation (2022-2023)- Received a first Class </h2>
        <ul className="list-none pl-4 lg:text-justify">
          <li className="custom-list-item mb-5">  Was awarded the highest mark in said module, with a 93%.</li>
          <li className='custom-list-item mb-5 '> Was asked to design a 3D world using ThreeJS&quot;s library.</li>
          <li className='custom-list-item mb-5 '> Created high-level animations and physics.</li>
          <li className='custom-list-item mb-5 '> deployed it on a local website using Nodejs.</li>
          <li className="custom-list-item mb-5 dark:text-indigo-700 text-blue-600">
          <a href="https://github.com/adambolt2/GraphicsUsingJS.Github.git" target="_blank" rel="noopener noreferrer">
          Click here for the Github Repository
        </a>
      </li>          
        </ul>
        <div className="box">
        <h1 className="w-fit text-xl py-4 mb-0 font-bold animate-fadeInInner">Volunteer Work:</h1>
        </div>
        <h2 className='text-l py-4 mb-0 font-bold animate-fadeInInner'> Institute of Science, Hungary (2022 - 2023)</h2>
        <ul className="list-none pl-4">
          <li className="custom-list-item mb-5">  Contributed to a project focused on creating a dynamic interface for an artificial intelligent greenhouse energy controlling system.</li>
          <li className='custom-list-item mb-5 '> Worked on developing the user interface for the system using modern web technologies.</li>
          <li className='custom-list-item mb-5 '> Collaborated with the team to ensure seamless integration with the AI system.</li>
          <li className='custom-list-item mb-5 '> Received positive feedback from the client and the system is being used for ongoing research.</li>
          <li className="custom-list-item mb-5 dark:text-indigo-700 text-blue-600">
          <a href="https://github.com/aronbencsiknu/KV6002_RL-BEMS" target="_blank" rel="noopener noreferrer">
            Click here for the Github Repository (Responsiblities were around the GUI website and the database)
        </a>
        </li>
        </ul>
      </div>
    </div>
    <div className="ml-10 mr-2">
      <MyUniversity />
    </div>
  </div>
</div>
  )
}

export default AcademicMe