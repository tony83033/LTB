"use client"
import React from 'react';
import Hero from '@/components/paralegalservices/Hero';
import Second from '@/components/paralegalservices/Second';
import Third from '@/components/paralegalservices/Third';
import Four from '@/components/paralegalservices/Four';
import Faq from '@/components/paralegalservices/Faq';
import { useContext } from 'react';
import contextValue from '../../context/Appcontext';


const page = () => {



  return (
  <React.Fragment>
    <Hero ></Hero>
    <Second></Second>
    <Third></Third>
    <Four></Four>
    <Faq></Faq>
  </React.Fragment>
  )
}

export default page