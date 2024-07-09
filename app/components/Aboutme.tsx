import React from 'react'
import MyImage from './MyImage'
import MyCodingImage from './MyCodingImage'
import MyGamingImage from './MyGamingImage'
import MyGuitar from './MyGuitar'
import MyRunningImage from './MyRunningImage'

const Aboutme = () => {
  return (
    <div className="xl:w-9.5/10 dark:bg-stone-200 bg-zinc-900 dark:text-black text-white animate-fadeIn mx-auto flex items-center justify-center min-h-screen">
    <div className='w-auto h-full ml-4 xl:ml-10 flex flex-col  xl:flex-row items-start'>
        <MyImage  />
        <div className='w-auto mt-4 xl:ml-10 p-4 flex-1'>
        <div className="box xl:ml-4">
        <h1 className="w-fit text-xl py-4 mb-0 font-bold animate-fadeInInner">About Me:</h1>
            </div>
            <p className='w-fit pl-5 mb-5  xl:mr-10 xl:text-justify animate-fadeInInner'>
                Since my earliest recollectable memory, I&apos;ve been fascinated with how programs work. I distinctly recall my early days filled with an insatiable curiosity, constantly questioning &ldquo;HOW&ldquo; whenever I engaged in anything online. This curiosity soon blossomed into a deep-seated love for the field of programming and technology.
                Over the course of 15 years or so, my passion for understanding the inner workings of the internet has only grown stronger. It&apos;s been a journey marked by countless hours of exploration, learning the fundamentals of programming languages, networking protocols, and diving into the intricacies of software development.
                What started as a simple fascination with the digital realm has evolved into a profound appreciation for the beauty of technology. I&apos;ve come to grasp not only the technical complexities but also the elegant solutions that underpin our digital experiences. From deciphering coding puzzles to unraveling the quirks of internet protocols, each discovery has been a step closer to comprehending the vast ecosystem that powers our connected world.
            </p>
            <p className='pl-5 mb-10  xl:mr-10 xl:text-justify animate-fadeInInner'>
                Today, as I reflect on my journey, I&apos;m filled with gratitude for the opportunities to delve deeper into this ever-evolving field. The internet, with all its complexities and nuances, continues to inspire and challenge me. It&apos;s not just about understanding how things work but also about appreciating the creativity and innovation that drive technological advancement.
                As I look ahead, I am excited by the prospect of contributing to this dynamic field, leveraging my knowledge and passion to create meaningful solutions and push the boundaries of what&apos;s possible. My fascination with programming and technology is not just a hobby or a career path—it&apos;s a lifelong journey of exploration and discovery.
            </p>
            <div className='flex justify-start xl:ml-4  xl:ml-'>
                <div className='box'>
                <h1 className='text-xl py-4 mb-0  font-bold'>Hobbies:</h1>

                </div>
            </div>
            <div className='flex flex-col xl:flex-row  xl:justify-between'>
                <div className=' xl:w-auto p-4'>
                    <table className='text-left table-row border collapse xl:ml-10'>
                        <thead>
                            <tr>
                                <th className='py-2'>Hobby</th>
                                <th className='px-4 py-2'>Description</th>
                                <th className='px-4 py-2 text-center'>Picture</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='py-2'>Programming</td>
                                <td className=' px-4 xl:text-justify py-2'>With how highly I just spoke about programming, you better believe that it is my top hobby.</td>
                                <td className=' px-4 py-2 text-center'><MyCodingImage/></td>
                            </tr>
                            <tr>
                                <td className=' py-2'>Gym</td>
                                <td className=' px-4 xl:text-justify py-2'>A wise man once said: &apos;A healthy body is a healthy mind.&apos; I&apos;m a firm believer that when you&apos;re stuck, working out isn&apos;t just for your muscles—it&apos;s a brainstorming session for your brain!</td>
                                <td className=' px-4 py-2 text-center'><MyRunningImage/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className=' xl:w-auto p-4'>
                    <table className='text-left table-row ml-4 xl:ml-10'>
                        <thead>
                            <tr>
                                <th className=' py-2'>Hobby</th>
                                <th className='px-4 py-2'>Description</th>
                                <th className='px-4 py-2 text-center'>Picture</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='  py-2'>Gaming</td>
                                <td className=' px-4 py-2 xl:text-justify'>Online gaming since 2006, with classics like RuneScape etched into my memory. It&apos;s not always relaxing, but hey, nothing pumps up the adrenaline quite like dodging virtual bullets!</td>
                                <td className=' px-4 py-2 text-center'><MyGamingImage/></td>
                            </tr>
                            <tr>
                                <td className='  py-2'>Playing the guitar</td>
                                <td className=' px-4 py-2 xl:text-justify'>They say music heals the soul. As a programmer, I must have the most battered soul out there. That&apos;s why playing the guitar is my daily therapy session to keep the code—and my sanity—in tune.</td>
                                <td className='px-4 py-2 text-center'><MyGuitar/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Aboutme