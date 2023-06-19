"use client"
import React from 'react'
import First from '@/components/paralegalservices/first'
import Second from '@/components/paralegalservices/second'
import Third from '@/components/paralegalservices/third'
import Four from '@/components/paralegalservices/four'
import Faq from '@/components/paralegalservices/faq'
import Five from '@/components/paralegalservices/five'
const page = () => {
  return (
  <React.Fragment className="bg-white mx-4">
    <>
    <div className=' bg-white'>
 <First></First>
 <Second></Second>
 {/* <Third></Third> */}
 <Four></Four>
 <Five></Five>
 <Faq></Faq>
 
 </div>
</>

  </React.Fragment>
  )
}

export default page