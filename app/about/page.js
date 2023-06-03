'use client'
import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import Intro1 from '@/components/about/intro1'
import Intro2 from '@/components/about/intro2'
import Teem1 from '@/components/about/teem1'
import Infra from '@/components/about/infra'
import Quality from '@/components/about/quality'
import Software from '@/components/about/software'
import Control from '@/components/about/control'
import Drive from '@/components/about/drive'
import Project from '@/components/about/project'
import Last from '@/components/about/last'
import TestIntro from '@/components/about/testintro'
const about = () => {

  const menuItems = [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'About',
      href: '#',
    },
    {
      name: 'Contact',
      href: '#',
    },
  ]

  const locations = [
    {
      title: 'Bengaluru office',
      timings: 'Mon-Sat 9am to 5pm.',
      address: '100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN',
    },
    {
      title: 'Head office',
      timings: 'Mon-Sat 9am to 5pm.',
      address: '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN',
    },
    {
      title: 'Karnataka office',
      timings: 'Mon-Sat 9am to 5pm.',
      address: '42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN',
    },
  ]

  const users = [
    {
      name: 'Gabrielle Fernandez',
      image:
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      position: 'Marketing Lead',
    },
    {
      name: 'Victória Silva',
      image:
        'https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg',
      position: 'Back-end developer',
    },
    {
      name: 'Gabrielle Fernandez',
      image:
        'https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
      position: 'Sales',
    },
    {
      name: 'Sadie Lewis',
      image:
        'https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
      position: 'Sales',
    },
    {
      name: 'Thilde Olaisen',
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600',
      position: 'Marketing Lead',
    },
    {
      name: 'Deepika Ramesh',
      image:
        'https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg',
      position: 'Front-end developer',
    },
    {
      name: 'Jordi Santiago',
      image:
        'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      position: 'Front-end developer',
    },
    {
      name: 'Kerim Fahri',
      image:
        'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
      position: 'Back-end developer',
    },
  ]

  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen)
  // }
  return (
    <React.Fragment>



      <div className='m-4'>


        <div className="mx-auto max-w-7xl px-4">
          {/* Hero Map */}
          <div className="flex flex-col space-y-8 pb-10 pt-5 md:pt-10">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">The Legal Base LPO
              </p>
            </div>

          </div>
          {/*======================================== */}
          {/* <section className="text-gray-600 body-font">
            <div className="container px-5 py-0 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs  text-indigo-500 tracking-widest font-medium title-font mb-1">Experience | Expertise | Excellence
                </h2>
                <h1 className="sm:text-3xl text-2xl font-bold  title-font mb-4 text-gray-900">Who we are</h1>

              </div>
            </div>
          </section> */}


        </div>



    <TestIntro></TestIntro>
        {/* <Intro1></Intro1> */}

        <Teem1></Teem1>
        <Infra></Infra>

        <Quality></Quality>
        <Software></Software>
        <Control></Control>
        <Drive></Drive>
        <Project></Project>
        <Last></Last>
        {/* ======================================================= */}





      </div>


    </React.Fragment>
  )
}

export default about