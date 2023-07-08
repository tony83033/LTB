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
      title: "Complaints Drafting Services",
      details: [
        "Slip and Fall Complaint",
        "Premises Liability Complaint",
        "Motor Vehicle Accident Complaint",
        "Medical Malpractice Complaint",
        "Wrongful Death Complaint",
        "Sexual Assault Complaint",
        "Negligence Complaint",
        "Dog Bite Complaint",
        "Dram Shop Complaint",
        "Construction Negligence Complaint",
      ]
    },
    {
      title: "Responsive Pleadings and Notices Services",
      details: [
        "Answer formations",
        "Cross Complaint",
        "Response to Written Discovery",
        "Notice of Errata",
        "Notice of Default",
        "Notice of Deposition",
      ]
    },
    {
      title: "Drafting of Discovery Documents Services",
      details: [
        "Request for Production of Documents(RFPD)",
        "Request for Form Interrogatories(FROG)",
        "Request for Form Interrogatories(SPROG)",
        "Request for Admissions(RFA)",
        "Meet and Confer Letters Regarding Discovery",
        "Notice of Depositions",
        "Meet and Confer Letters",
      ]
    },
    {
      title: "Summarization of Medical Records and Billing Services",
      details: [
        "Request Medical Records",
        "Send HIPAA Forms to Clients",
        "Draft of Demand / Settlement Letters",
      ]
    },
    {
      title: "Case File Management Services",
      details: [
        "Google Calendaring of Case Events",
        "Filing of Case Management Statements on Hearing",
        "E - Filing of Complaints",
        "Practice Management Software: Casemap, Clio, Time matters, Filevine and PC Law",
      ]
    },
    {
      title: "Deposition Services",
      details: [
        "Drafting of Deposition Notices",
        "Scheduling of Depositions With Veritext Legal Solutions and First Legal Summarization of Depositions and Expert Witnesses"
      ]
    },


    {
      title: "Medical Summaries",
      details: [
        "TLB’s medical summarization team has vast experience providing comprehensive support to law firms from beginning to end, including retrieval of records and making chronological summaries. The team has an impeccable record of summarising more than a hundred thousand medical records in tabular and narrative formats. Additionally, the team also has the capability of assisting you with annotations, billing summaries, indexing and pagination.",
      ]
    },
    {
      title: "Demand Letters",
      details: [
        "Our attorneys draft demand letters well ahead of time, so you can focus on the other aspects of the case. Having substantial experience drafting about twenty thousand demand letters for various plaintiff law firms, TLB’s attorneys well understand the purpose of each demand letter and the legal consequences of misses or errors in a letter. The attorneys are supported by the doctors in assessing the magnitude of injuries and they take note of what to retain or exclude in the demand letters to ensure you prevail in your case. We do understand the fact that if a client has hired an attorney, they are serious about protecting their rights.",
      ]
    },
    {
      title: "Standard of Care Reports",
      details: [
        "We assist law firms in understanding whether a reasonable standard of care was applied to a particular case or not through a review of the records. In the event of any errors or substandard care, our team draws your attention to it and notes the alternate care that should have been provided to a client. The team has been groomed by leading medicine practitioners to even interpret, for example, the standard of care in the case of a cancer patient should include a recommendation of chemotherapy or surgery. ",
      ]
    },
    {
      title: "Forensic Analysis",
      details: [
        "TLB’s forensic expert attorneys and doctors have over 20 years of experience in the field of forensic analysis and evaluations. They are skilled at making detailed processes of detecting, investigating, and documenting the reason, course, and consequences of an incident and the violations thereof. They can review photographic evidence in all types of personal injury cases and can interpret the injuries. Additionally, the team can track down the clinical situation that led to the adverse outcome. ",
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
                  <img
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src="/law2.png"
                    alt="avatar"
                  />

                  <p className="text-xl font-bold text-black  dark:hover:text-white-500">
                    TLB’s Personal Injury Litigation Services
                  </p>
                </div>
              </span>

            </div>
            <div className="mt-2">

              <p className="mt-2 lg:px-16 sm:px-12  px-0 text-black font-semibold ">
                The Legal Base brings you access to expert medico-legal consultants possessing
                in-depth knowledge in the field of personal injury and medicolegal. Our experts have
                huge experience in providing medico-legal advice to top law firms in the US, UK and
                Canada.
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
