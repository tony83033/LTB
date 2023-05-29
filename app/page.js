import Image from 'next/image'
import React from 'react'
import First from '@/components/landing/first'
import Second from '@/components/landing/second'
import Third from '@/components/landing/third'
import Forth from '@/components/landing/forth'
export default function Home() {
  return (
    <React.Fragment>
      <First></First>
      <Second></Second>
      <Third></Third>
      <Forth></Forth>
    </React.Fragment>
  )
}
