"use client"
import './globals.css';
import { Inter , Roboto ,Varela_Round, Merriweather , Noto_Sans, Roboto_Slab} from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Appstate from '@/context/Appstate';
import Head from 'next/head';
import { useState} from 'react';



const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto( {subsets: ['latin'] ,
weight: '400',
});

const noto = Noto_Sans({subsets:['latin'],
  weight: '400'
})

const robotoslab = Roboto_Slab({subsets:['latin'],
  weight: '300'
})


const varel = Varela_Round({subsets:['latin'],
  weight: '400'
});

  const merri = Merriweather({subsets:['latin'],
  weight :'300'
});



<Head>
        <title>Outsourced Paralegal Services | The Legal Base</title>
        <meta name="description" content="The Legal Base LPO provides you with experienced and skilled paralegal resources working in your time zone to deliver cost savings and better efficiency by sharing your workload." key="desc" />
       
       
      </Head>

export default function RootLayout({ children }) {
  



 
  
  const [font , setFont] = useState(inter);
    const changeFont = async (fontName)=>{
        console.log("before font is ",font)
        setFont(fontName);
        console.log("after font  is",font, " ",fontName);
      }


  return (
    <Appstate>
      
    <html lang="en">
       
        
      <body className={font.className}>
     
        <Navbar changeFont={changeFont}></Navbar>
        {children}
        <Footer></Footer>
        </body>
       
    </html>
    </Appstate>
  )
}
