import React from 'react'
import myRunning from './RunningInGym.gif'

const MyRunningImage = () => {
  return (
    <div className="flex flex-col items-center animate-fadeInInner">
    <img className="w-96 h-32 rounded-full object-cover" src={myRunning.src} alt="Running Man Picture" />
    </div>
  )
}

export default MyRunningImage