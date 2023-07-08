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
            title: "Acting as a virtual assistant for your Immigration Firm.",
            details: [
                ""
            ]
        },
        {
            title: "Collecting information from clients on the prescribed case management tool/database.",
            details: [
                ""
            ]
        },
        {
            title: "Scrutinizing information in consonance with visa specific requirements.",
            details: [
                ""
            ]
        },
        {
            title: "Interacting with clients on behalf of the attorney/Firm for queries and other information requirements.",
            details: [
                ""
            ]
        },
        {
            title: "Drafting focused letters and cover letters to support Visa petitions",
            details: [
                ""
            ]
        },
        {
            title: "Drafting Attorney cover letters for visa application forms.",
            details: [
                ""
            ]
        },
        {
            title: "Providing expert services on various software platforms like INSZoom, LawLogix and BlueDot.",
            details: [
                ""
            ]
        },
        {
            title: "Filing of Visa application forms with the department of immigration (for e.g., USCIS) online.",
            details: [
                ""
            ]
        },
        {
            title: "Providing post submission track on the status of applications/petitions.",
            details: [
                ""
            ]
        },
        {
            title: "Doing continuous research on the changes and amendments in immigration policies and rules.",
            details: [
                ""
            ]
        },
        {
            title: "Gathering information from clients on recommended tools",
            details: [
                ""
            ]
        },
        {
            title: "Analyzing information in accordance with specific Visa needs",
            details: [
                ""
            ]
        },
        {
            title: "Communicating with clients on behalf of immigration firms",
            details: [
                ""
            ]
        },
        {
            title: "Online filing of Visa application forms and offering post submission status",
            details: [
                ""
            ]
        },

    ];


    return (
        <React.Fragment>
            <div className='mx-auto  sm:w-5/6 w-full md:w-5/6 lg:5/6'>
                <div className='m-4 space-y-3'>




                    <div className="max-w-full px-8 py-4 bg-[#f8fafc] rounded-lg shadow-gray-400   cursor-pointer" data-aos="fade-down">
                        <div className="flex items-center justify-between">
                            <span className="text-md font-bold text-black ">
                                <div className='flex items-center justify-between'>
                                    {/* <img
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src="/law2.png"
                    alt="avatar"
                  /> */}

                                    <p className="text-xl font-bold text-black dark:hover:text-white-500 text-center">
                                        Our Global Immigration Management Service experts help your business by:
                                    </p>
                                </div>
                            </span>

                        </div>
                        <div className="mt-2">

                            <p className="mt-2 lg:px-16 sm:px-12  px-0 text-black font-semibold ">
                                {/* Immigration is a specific area of law and expertise that requires a unique combination of compassion and legal expertise. Locating a competent and cost-effective immigration assistance agency is a huge challenge. The Legal Base has a team of competent immigration attorneys who can manage your entire immigration process with effortlessness. */}
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
                                            className="rounded-xl bg-white-050 shadow-xl border-t-2 border-gray-100 hover:shadow-2xl"
                                        >

                                            <div className='w-full'>
                                                <div className="flex items-center gap-4   p-2 shadow-lg rounded-t-lg hover:rounded-t-xl hover:shadow-xl h-40">
                                                    {/* <img
                                                        alt="Developer"
                                                        src="/law.png"
                                                        className="h-16 w-16 rounded-full object-cover"
                                                    /> */}


                                                    <div>
                                                        <h3 className="text-lg  font-medium text-black">
                                                            {item.title}
                                                        </h3>

                                                    </div>
                                                </div>
                                            </div>

                                            {/* 
                                            <div className=' w-full h-48   overflow-auto  shadow-sm  '>
                                                <ul className="mt-4 space-y-2  mx-auto w-full  ">
                                                    {item.details.map((detail, idx) => (
                                                        <li key={idx} className="">
                                                            <a
                                                                href="#"
                                                                className="block h-full rounded-xl  p-2 "
                                                            >
                                                                <p className="mt-1 text-xs font-medium text-black">
                                                                    {detail}
                                                                </p>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                             */}
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
