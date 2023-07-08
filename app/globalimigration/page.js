"use client"
import React from 'react';
import Hero from '@/components/globalimigration/Hero';
import Second from '@/components/globalimigration/Second';
import Third from '@/components/globalimigration/Third'; 
import New from '@/components/globalimigration/New'; 
import Four from '@/components/globalimigration/Four';
const page = () => {
  return (
  <React.Fragment>
    <Hero></Hero>
    <Second></Second>
    <Third></Third>
    {/* <New></New> */}
    <Four></Four>
  </React.Fragment>
  )
}

export default page