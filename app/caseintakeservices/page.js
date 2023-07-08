"use client"
import React from 'react';
import Hero from '@/components/caseintakeservices/Hero';
import Second from '@/components/caseintakeservices/Second';
import Third from '@/components/caseintakeservices/Third';
import Four from '@/components/caseintakeservices/Four';
import Faq from '@/components/caseintakeservices/Faq';
const page = () => {
  return (
  <React.Fragment>
    <Hero></Hero>
    <Second></Second>
    <Third></Third>
    <Four></Four>
    <Faq></Faq>
  </React.Fragment>
  )
}

export default page