import React, { useState } from 'react'

const MySkills = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const [isExpandedInter, setIsExpandedInter] = useState(false);

    const toggleExpandInter = () => {
      setIsExpandedInter(!isExpandedInter);
    };

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
    
    return (
        <div className="xl:w-9.5/10 dark:text-black dark:bg-stone-200 bg-zinc-900 text-white animate-fadeIn mx-auto flex justify-center min-h-screen">
          <div className="w-full max-w-4xl p-5">
            <h1 className='text-2xl font-bold text-center mt-5'>Skills</h1>
            
            <div
  className={`ml-5 mt-5 box w-fit text-xl py-4 mb-0 font-bold animate-fadeInInner hover:cursor-pointer text-white ${
    isExpanded
      ? 'bg-gray-500 hover:bg-gray-500 dark:hover:bg-rose-400 dark:bg-rose-400 dark:text-black'
      : 'bg-slate-800 hover:bg-slate-600 dark:hover:bg-rose-400 dark:bg-rose-100 dark:text-black'
  }`}
  onClick={toggleExpand}
>
  {isExpanded ? 'Minimize Programming Skills' : 'Show Programming Skills'}
</div>

      
            {isExpanded && (
            <div>
                <table className="ml-5 mt-5 mb-20 w-full border-collapse animate-fadeIn">
              <thead>
                <tr>
                  <th className="border-b-2 dark:border-black border-gray-300 p-3 text-left">Language</th>
                  <th className="border-b-2 dark:border-black border-gray-300 p-3 text-left">Proficiency Source</th>
                  <th className="border-b-2 dark:border-black border-gray-300 p-3 text-left">Years of Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">JavaScript + TypeScript</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">University Courses + Work Experience</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">3 Years</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">Object Oriented Programming</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">University Courses + Work Experience</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">3 Years</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">Java</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">University Courses + Work Experience</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">2 Years</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">PHP</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">University Courses + Work Experience</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">2 Year</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">NodeJS</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">University Courses</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">2 Year</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">ThreeJS</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">University Courses</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">1 Year</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">NextJS</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">Self Learning (This website is built on this)</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">1 Year</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">React</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">Self Learning (This website is built on this)</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">1 Year</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">Tailwind CSS</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">Self Learning (This website is built on this)</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">1 Year</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">C# & .NET Core using MVC</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">Self Learning</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">1 Year</td>
                </tr>
                <tr>
                  <td className="dark:border-black border-b border-gray-200 p-3">C++</td>
                  <td className=" dark:border-black border-b border-gray-200 p-3">University Courses</td>
                  <td className="dark:border-black border-b border-gray-200 p-3">1 Year</td>
                </tr>
                
              </tbody>
            </table>
            </div>
            )}
             
             
             <div
  className={`ml-5 mt-5 box w-fit text-xl py-4 mb-0 font-bold animate-fadeInInner hover:cursor-pointer text-white ${
    isExpandedInter
      ? 'bg-gray-500 hover:bg-gray-500 dark:hover:bg-rose-400 dark:bg-rose-400 dark:text-black'
      : 'bg-slate-800 hover:bg-slate-500 dark:hover:bg-rose-500 dark:bg-rose-100 dark:text-black'
  }`}
  onClick={toggleExpandInter}
>
  {isExpandedInter ? 'Minimize Interpersonal Skills' : 'Show Interpersonal Skills'}
</div>


            
      {isExpandedInter && (
            <div>       
           <table className="ml-5 mt-5 w-full border-collapse animate-fadeIn">
              <thead>
                <tr>
                  <th className="border-b-2 dark:border-black border-gray-300 p-3 text-left">Skill</th>
                  <th className="border-b-2 dark:border-black border-gray-300 p-3 text-left">Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">Public speaking</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">Public speaking is often considered one of the most daunting tasks, yet for me, it’s a realm where I truly thrive. I am not afraid of public speaking; rather, I embrace it with confidence and enthusiasm. The prospect of addressing an audience invigorates me, fueling my passion for communication and connection.</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">Time management</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">Time management is an essential skill that I have mastered, enabling me to effectively balance various responsibilities and achieve my goals efficiently. My proficiency in time management is evident through my ability to prioritize tasks, maintain organization, and maximize productivity.</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">Multilingual (Fluent in English, Expertise in Egyptian Arabic)</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">Being multilingual, proficient in both Arabic and English, has been a significant asset in my personal and professional life. My ability to effortlessly navigate between these two languages reflects not only linguistic competence but also cultural understanding and communication versatility.</td>
                </tr>
                <tr>
                  <td className="border-b dark:border-black border-gray-200 p-3">Under Pressure Performance</td>
                  <td className="border-b dark:border-black border-gray-200 p-3">Performing under pressure is where I truly excel, as I thrive in dynamic and challenging environments whilst mantaining my composure. Rather than feeling overwhelmed, pressure fuels my determination and sharpens my focus, enabling me to deliver exceptional results.</td>
                </tr> 
              </tbody>
            </table>
            </div>
            )}
          </div>
        </div>
      )
      
              
      
}

export default MySkills