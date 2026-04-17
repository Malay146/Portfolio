import { cn } from '@/lib/cn'
import React from 'react'

const BottomRight = ({className}: {className?: string}) => {
  return (
    <span className={cn("absolute bottom-0 right-0 size-4 border-b border-r border-white", className)}></span>
  )
}

export default BottomRight