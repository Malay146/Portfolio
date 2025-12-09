import React from 'react'
import Button from './ui_components/Button'
import BottomRight from './Lcorner/BottomRight'
import TopLeft from './Lcorner/TopLeft'

const Experience = () => {
  return (
    <div className=" py-3 md:py-6 flex flex-col gap-3 md:gap-4">
      <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
        <h2 className="font-roboto-mono font-bold tracking-tighter text-[18px] md:text-[24px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
          Experience
          <TopLeft />
          <BottomRight />
        </h2>
      </div>
      <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30 ">
        <p className='font-roboto-mono tracking-tight font-light text-[10px] md:text-[16px] hover:bg-white/10 transition-all duration-100'>Open to Full-time opportunites / freelance / internships. </p>
      </div>
    </div>
  )
}

export default Experience