import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import Image from 'next/image';


const Four = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 0,
      duration: 1000,
    });
  }, []);

  const data = [
    {
      title: "24/7 Answering Services",
      details: [
        "No matter what type of law you practice, potential clients may call at any time. With our round-the-clock legal intake services, you can rest easy knowing that there will always be a live operator available to answer their calls. Our expert legal intake professionals will use scripts that you design and gather all the relevant information to help you move ahead with your business. With our services, you can be sure that all the right information is always collected."
      ]
    },
    {
      title: "Scalable Services",
      details: [
        "We have a professionally run legal intake centre that can handle all your call and chat volume, whether you are receiving sporadic calls throughout the night or multiple inquiries from potential clients. Our legal intake professionals are experts in multitasking and dealing with every caller so that you never miss a lead."
      ]
    },
    {
      title: "High-quality Reporting Services",
      details: [
       "Our legal intake representatives will record all the calls and other data you receive and deliver it to you in the format of your choice, whether it&apos;s through web-based databases or email communication. Our goal is to capture every potential opportunity and deliver the data that you need to capitalise on it. With our legal intake reporting services, we eliminate the need for further data entry, allowing you to move quickly on all your leads."
      ]
    }
  ];


  return (
    <React.Fragment>
      <div className='mx-auto  sm:w-5/6 w-full md:w-5/6 lg:5/6'>
        <div className='m-4 space-y-3'>




          <div className="max-w-full px-8 py-4 bg-[#f8fafc] rounded-lg shadow-gray-400   cursor-pointer" data-aos="fade-down">
            <div className="flex items-center justify-between">
              <span className="text-md font-bold text-black ">
                <div className='flex items-center justify-between'>
                  <img
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src="/law2.png"
                    alt="avatar"
                  />

                  <p className="text-xl font-bold text-black  dark:hover:text-white-500">
                    TLB&apos;s Case Intake Services
                  </p>
                </div>
              </span>

            </div>
            <div className="mt-2">

              <p className="mt-2 lg:px-16 sm:px-12  px-0 text-black font-semibold ">
                TLB is a legal intake company with decades of experience in providing top-notch
                services to clients. We understand that every legal practice is unique and that&apos;s why we have a
                range of offerings to match your specific needs. Here&apos;s what you can expect from our legal
                intake services:
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              {/* <a
      href="#"
      className="text-blue-600 dark:text-blue-400 hover:underline"
      tabIndex={0}
      role="link"
    >
      Read more
    </a> */}
              <div className="flex items-center">


              </div>
            </div>

            {/* ============================================================== */}

            <section className="bg-[#f8fafc] dark:bg-white-90 mt-4">
              <div className="container px-6 py-8 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {data.map((item, index) => (

                    <article
                      key={index} data-aos="zoom-in-down"
                      className="rounded-xl bg-white-050 shadow-xl border-t-2 border-gray-100 hover:shadow-2xl  h-80  "
                    >

                      <div className='w-full'>
                        <div className="flex items-center gap-4   p-2 shadow-lg rounded-t-lg hover:rounded-t-xl hover:shadow-xl" >
                          <img
                            alt="Developer"
                            src="/law.png"
                            className="h-16 w-16 rounded-full object-cover"
                          />


                          <div>
                            <h3 className="text-lg  font-medium text-black">
                              {item.title}
                            </h3>

                          </div>
                        </div>
                      </div>



                      <div className=' w-full h-48   overflow-auto  shadow-sm  '>
                        <ul className="mt-4 space-y-2  mx-auto w-full  ">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="">
                              <a
                                href="#"
                                className="block h-full rounded-xl  p-2 "
                              >
                                {/* <strong className="font-medium text-black">
                          {idx + 1}
                        </strong> */}
                                <p className="mt-1 text-xs font-medium text-black">
                                  {detail}
                                </p>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Four;
