"use client"
import React from 'react'
import First from '@/components/paralegalservices/first'
import Second from '@/components/paralegalservices/second'
import Third from '@/components/paralegalservices/third'
import Four from '@/components/paralegalservices/four'
import Faq from '@/components/paralegalservices/faq'
const page = () => {
  return (
  <React.Fragment>
    <>
 <First></First>
 <Second></Second>
 {/* <Third></Third> */}
 <Four></Four>
 <Faq></Faq>
 
  
</>

  </React.Fragment>
  )
}

export default page