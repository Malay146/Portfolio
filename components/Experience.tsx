import React from 'react'
import Button from './ui_components/Button'
import BottomRight from './Lcorner/BottomRight'
import TopLeft from './Lcorner/TopLeft'

const Experience = () => {
  return (
    <div className="py-6 flex flex-col gap-4">
      <div className="text-white flex justify-between items-center px-16 border-y border-dashed border-white/30">
        <h2 className="font-roboto-mono font-bold tracking-tighter text-[24px] px-2 border-x border-dashed border-white/30 relative">
          Experience
          <TopLeft />
          <BottomRight />
        </h2>
      </div>
      <div className="text-white flex justify-between items-center px-16 border-y border-dashed border-white/30">
        <p className='font-roboto-mono tracking-tight font-light text-[16px]'>Open to Full-time opportunites / freelance / internships. </p>
      </div>
    </div>
  )
}

export default Experience