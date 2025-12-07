import React from 'react'
import Dither from './Dither'

const Hero1 = () => {
  return (
    <div className='w-full h-60 relative border border-b-white/50 overflow-hidden'>
        <Dither 
        mouseRadius={0.4}
        />
        <h1 className='font-pixelify text-white tracking-tighter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] pointer-events-none text-shadow-[7px_7px_0px_rgba(0,0,0,1)]'>Hey!!!</h1>
    </div>
  )
}

export default Hero1