"use client";

import React from 'react'
import { cn } from '@/lib/cn'
import { useContext } from 'react'
import { TransitionContext } from './TransitionProvider'

const TransitionLink = ({href, children, className}: {href: string, children: React.ReactNode, className?: string}) => {

    const { navigate } = useContext(TransitionContext)
  return (
    <button
    onClick={() => {navigate(href)}}>
        {children}
    </button>
  )
}

export default TransitionLink