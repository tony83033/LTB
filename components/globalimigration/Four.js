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
      title: "Visa Petitions",
      details: [
        "TLB’s exclusive and dedicated immigration team are experts in multiple case management tools and can immediately adapt to the processes of law firms in US, UK and Canada.",
        "Draft petitions for varied regions.",
        "Draft employment and business visas, family visas, citizenship, and naturalization visas for the US",
        "LMIA application, Temporary work permits, C-Series applications, T-Series applications, and study permits for Canada.",
        "Skilled Worker Visas, Business Visas and Family Visas for the UK"
      ]
    },
    {
      title: "Docketing and Data Management",
      details: [
        "Changing docketing priorities in immigration departments can leave your team scrambling for resources. With TLB, you can equip your teams with the supporting documents they need for successful case outcomes.",
        "The immigration attorneys at TLB team can manage your billing and invoicing.",
        "Manage calendars, maintain case notes, work on client intakes.",
        "Manage changing docketing priorities for various departments.",
        "Manage emails and correspondences and track expenses for successful case outcomes.",
        "The team has a success record of streamlining processes for immigration law firms with end-to-end management solutions."
      ]
    },
    {
      title: "Form fillings",
      details: [
        "The Legal Base assists immigration consultants and attorneys in completing the formalities by taking care of the voluminous paperwork. The Legal Base Immigration team manages the majority of petition preparation work, and the final filings are completed by the attorneys or the law firms. This frees up a lot of the attorneys’ time and saves their costs considerably.",
        "Expertise in filling the following forms",
        "H1-B, H-2A, H-2B, H-4",
        "L1-A, L1-B, L-2",
        "F-1, F-2",
        "J-1, J-2",
        "K-1, K-3",
        "ETA 9089 through PERM process",
        "Visa Extensions"
      ]
    },
    {
      title: "Drafting Attorney Cover Letters for Immigration Petitions",
      details: [
        "The Legal Base has a team of competent immigration attorneys who can manage your entire immigration process with effortlessness. Also, Immigration assistance requires a lot of documentation, which due to its huge volume may prove difficult for immigration agencies to handle, hence they need to take help from immigration consultants for completing the paperwork.",
        "I-601 , Application for Disclaimer of Inadmissibility",
        "I-212, Application for Authorization to reapply for Admission After Deportation",
        "Criminal Relief",
        "Humanitarian Reinstatement and Parole",
        "Deferred Action for Childhood Arrivals (DACA)",
        "I-130, Family based Green Card",
        "I-140, Employment Based Green Card",
        "I-485, Adjustment of Status (AOS)",
        "I-526, Immigrant Petition by Alien Entrepreneur",
        "Consular Processing (CP)",
        "I-765, EAD (Application for Employment Authorization)"
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
                    TLB’s Global Immigration Services
                  </p>
                </div>
              </span>

            </div>
            <div className="mt-2">

              <p className="mt-2 lg:px-16 sm:px-12  px-0 text-black font-semibold ">
                Immigration is a specific area of law and expertise that requires a unique combination of compassion and legal expertise. Locating a competent and cost-effective immigration assistance agency is a huge challenge. The Legal Base has a team of competent immigration attorneys who can manage your entire immigration process with effortlessness.
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
