import React from 'react'
import MyUniversity from './MyUniversity'

const WorkExperience = () => {
  return (
    <div className="xl:w-9.5/10 dark:bg-stone-200 bg-zinc-900 dark:text-black text-white animate-fadeIn mx-auto flex justify-center min-h-screen">
    <div className="mt-10 mr-10 flex items-start">
      <div className="p-4 flex-1">

      <div className="box xl:ml-4">
        <h1 className="w-fit text-xl py-4 mb-0 font-bold animate-fadeInInner">Personal Project</h1>
        </div>
        <div className="pl-5 mb-5 animate-fadeInInner lg:text-justify">
        <h2 className='text-l pb-1 pt-4 mb-0 font-bold animate-fadeInInner text-decoration-line: underline'> Adams Webscraper API/Website    </h2>
        <p className=" animate-fadeInInner lg:text-justify">
         A personal project which I have started creating a full stack experience. Using Python to scrape ~3000 job postings from  indeed , LinkedIn and TotalJobs (Source code is available on my Github under 3 repositories) </p>
         <br/>
         <a className=" mb-5 text-xl dark:text-indigo-700 text-blue-600" href="https://webscrapingfront.vercel.app/" target="_blank" rel="noopener noreferrer">
          Click here to visit the fully deployed website!
        </a>
        <br/>
        <br/>
        <a className=" mb-5 dark:text-indigo-700 text-blue-600" href="https://github.com/adambolt2/webscrapingfront" target="_blank" rel="noopener noreferrer">
          Click here to view the frontend Source code!
        </a>

        <br/>
        <br/>
        <a className=" mb-5 dark:text-indigo-700 text-blue-600" href="https://github.com/adambolt2/WebScrappedBack" target="_blank" rel="noopener noreferrer">
          Click here to view the backend Source code!
        </a>

        <br/>
        <br/>
        <a className=" mb-5 dark:text-indigo-700 text-blue-600" href="https://github.com/adambolt2/python-official-WebScraper" target="_blank" rel="noopener noreferrer">
          Click here to view the Python Scrapers Source code!
        </a>

    <ol className="list-decimal mt-10 ml-3 pl-4">
    <li className="mb-5">Scraped 1,000+ job listings from Indeed, 700+ from LinkedIn, and 800+ from TotalJobs, focusing on Software Developer roles across the UK.</li>
    <li className="mb-5">Extracted detailed job information, including titles, descriptions, salaries, and locations, ensuring data integrity by handling errors and filtering out duplicates.</li>
    <li className="mb-5">Built the backend using ASP . NET Web API and Entity Framework, enabling efficient data management with a SQL database.</li>
    <li className="mb-5">Implemented the User Controller to manage user operations, handling user registration, authentication, and updates to user data.</li>
    <li className="mb-5">Introduced master keys to control access to administrative functions, ensuring only authorized users can make admin-level changes.</li>
    <li className="mb-5">Integrated pagination in the GET endpoints to handle large datasets more effectively.</li>
    <li className="mb-5">Developed a responsive website using React and Chart.js for visualizing job listings data, ensuring a seamless experience across devices, including mobile.</li>
    <li className="mb-5">Implemented user login, logout, and registration with verification codes sent to users via email using Mailjet, with these codes being validated on the backend.</li>
    <li className="mb-5">Enabled user subscriptions and API interactions, allowing users to access and utilize data within their own code.</li>
    <li className="mb-5">Proficient database design and management, including the use of SQL triggers to automate actions based on database events.</li>
    <li className="mb-5">Meticulous CSS work across all pages to ensure responsiveness and an optimal user interface.</li>
    <li className="mb-5">Skillful utilization of JavaScript to deliver a fluid and engaging user experience.</li>
    <li className="mb-5">Deployed the backend to Azure for reliable cloud-based operation and the frontend to Vercel for fast and scalable hosting.</li>
</ol>
        </div>
      <div className="box xl:ml-4">
        <h1 className="w-fit text-xl py-4 mb-0 font-bold animate-fadeInInner">Work & Experience</h1>
            </div>
        <p className="pl-5 mb-10 animate-fadeInInner lg:text-justify">
        Upon graduation, I embarked on an ardent quest to secure a position in my chosen field, eager to immerse myself in the professional world and gain firsthand experience. Fortuitously, I was swiftly ushered into my career, allowing me to seamlessly transition from academia to the practical realm of my discipline. </p>  
        <div className="box xl:ml-4">
        <h1 className="w-fit text-xl py-4 mb-0 font-bold animate-fadeInInner">Work:</h1>
            </div>
                    <div className="pl-5 mb-5 animate-fadeInInner lg:text-justify">
          <h2 className='text-l pb-1 pt-4 mb-0 font-bold animate-fadeInInner text-decoration-line: underline'> Piradzo limited company (June 2023- November 2023)        </h2>
          <p className='mt-2'>Entrusted with the development and optimization of a social media-like website, with a primary focus on ensuring security and a seamless user experience. My responsibilities included:</p>
          <ol className="list-decimal mt-2 ml-3 pl-4">
            <li className="mb-5">Implementation of an IP banning system to enhance website security.</li>
            <li className="mb-5">Implementation of tokenization and rate limiting to safeguard against unauthorized access and abuse.</li>
            <li className="mb-5">Integration of Server-Side Events (SSE) functionality to facilitate real-time updates and interactions.</li>
            <li className="mb-5">Implementation of stringent string checks and robust error handling mechanisms for enhanced reliability.</li>
            <li className="mb-5">Meticulous CSS work across all pages to ensure responsiveness and an optimal user interface.</li>
            <li className="mb-5">Proficient database design and management, including the use of SQL triggers to automate actions based on database events.</li>
            <li className="mb-5">Thorough optimization of both front-end and back-end components for optimal performance.</li>
            <li className="mb-5">Skillful utilization of JavaScript to deliver a fluid and engaging user experience.</li>
            <li className='pb-1'>Development of a seamless post and messaging system to facilitate user interactions.</li>
         </ol>
          <p className='pt-2'>These responsibilities collectively contributed to the successful creation and operation of the website, demonstrating my expertise in web development, security, and user experience enhancement.</p>

          <h2 className='text-l pb-1 pt-10 mb-0 text-decoration-line: underline font-bold animate-fadeInInner'>Nutshell apps limited company (November 2023 - June 2024)        </h2>
          <ol className="list-decimal mt-2 ml-3 pl-4">
            <li className="mb-2">Project: Online App Builder Development and Deployment:</li>
            <ul className="list-disc ml-6 mb-5">
                <li>Key member in the development and deployment of an online app builder.</li>
                <li>Assisted in creating a platform that enables users to build their own applications and deploy them on mobile/tablet devices using an online app builder.</li>
                <li>Guided and assisted builders with their infrastructure under leadership management.</li>
                <li>Worked with an experienced team to develop the application using a mix of JavaScript and Java.</li>
            </ul>
            <li className="mb-2">Front-end Development (JavaScript) </li>
            <ul className="list-disc ml-6 mb-5">
                <li>Utilised JavaScript for front-end logic.</li>
                <li>Enabled users to choose dynamic data variants through an intuitive interface.</li>
            </ul>
            <li className="mb-2">Back-end Development (Java)</li>
            <ul className="list-disc ml-6 mb-5">
                <li>Employed Java for back-end processes.</li>
                <li>Compiled code using Electron to ensure compatibility and functionality on mobile devices.</li>
                <li>Customised code for iOS and Android using tailoring techniques.</li>
            </ul>
            <li className="mb-2">Code Quality and Efficiency</li>
            <ul className="list-disc ml-6 mb-5">
                <li>Pull Requests (PRs): Employed PRs to ensure code quality, maintainability, and collaborative review.</li>
                <li>Object-Oriented Structure: Utilised object-oriented programming principles to create reusable and efficient code, promoting modularity and reducing redundancy.</li>
            </ul>   
            <li className="mb-2">Key Projects and Achievements:</li>
            <ul className="list-disc ml-6 mb-5">
                <li>Uniformity of Data Types: Ensured consistent data types across the application for reliable performance.</li>
                <li>Enhanced Query Capability: Developed a feature allowing users to type out queries directly instead of creating variables for CRUD operations.</li>
                <li>Bug Fixes: Responsible for identifying and resolving numerous bugs within the codebase, enhancing overall stability and user experience.</li>
                <li>Received Employee of the month whilst still on my probation.</li>
            </ul> 

            <li className="mb-2">Collaboration with Major Companies:</li>
            <ul className="list-disc ml-6 mb-5">
                <li>Humberside Police</li>
                <li>Transport for London</li>
                <li>NHS</li>
                <li>Northumbria Police</li>
                <li>Balfour Beatty</li>
            </ul> 
            <li className="mb-2">FRI Apps Development (Fatigue Risk Index)</li>
            <ul className="list-disc ml-6 mb-5">
                <li>Worked on FRI apps, which follow government regulations to help customers create shifts that ensure workers are not at risk due to fatigue. </li>
                <li>Implemented features to indicate workers who should not work due to fatigue risk, promoting safety and compliance.</li>
            </ul> 
         </ol>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default WorkExperience