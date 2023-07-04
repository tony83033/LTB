"use client"
import './globals.css';
import { Varela_Round} from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Appstate from '@/context/Appstate';
import Head from 'next/head';
import { useState} from 'react';

const varel = Varela_Round({subsets:['latin'],
  weight: '400'
});

 


<Head>
        <title>Outsourced Paralegal Services | The Legal Base</title>
        <meta name="description" content="The Legal Base LPO provides you with experienced and skilled paralegal resources working in your time zone to deliver cost savings and better efficiency by sharing your workload." key="desc" />
       
       
      </Head>

export default function RootLayout({ children }) {
  


const [theam,setTheam] = useState("dark")
 


  return (
    <Appstate>
      
    <html lang="en"  className={theam}>
       
        
      <body className={varel.className && "dark:bg-[#1E293B] bg-white"}>

     
        <Navbar setTheam={setTheam} theam={theam}></Navbar>
        {children}
        <Footer></Footer>
        </body>
       
    </html>
    </Appstate>
  )
}
