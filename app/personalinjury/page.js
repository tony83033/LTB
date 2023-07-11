"use client"
import React from 'react';
import Hero from '@/components/personalinjury/Hero';
import Second from '@/components/personalinjury/Second';
import Third from '@/components/personalinjury/Third';
import Four from '@/components/personalinjury/Four';
import Faq from '@/components/personalinjury/Faq';
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