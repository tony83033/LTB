import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Five = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 0,
      duration: 1000,
    });
  }, []);

  const data = [
    {
      title: "Case Management",
      details: [
        "Reviewing, organizing, indexing, and summarizing client files",
        "Preparing different correspondence",
        "Preparing a variety of pleadings"
      ]
    },
    {
      title: "Discovery Preparation",
      details: [
        "Drafting Subpoenas, Interrogatories, and Discovery Demands",
        "Detailed Analysis Reports of Depositions and Interrogatories",
        "Witness Summary",
        "Requesting for Medical Reports and Detailed Analysis of Medical Reports"
      ]
    },
    {
      title: "Trial Preparation",
      details: [
        "Expert witness report summarization",
        "Document summarization for discovery",
        "Property search from public records",
        "Document Management with the use of software Casemap"
      ]
    },
    {
      title: "Legal Document Production",
      details: [
        "Contracts",
        "Power of attorneys",
        "Prenuptial agreements",
        "Case Information statements",
        "Property Settlement agreements"
      ]
    },
    {
      title: "Editorial Support",
      details: [
        "Editorial support to publishers who are looking for value-added enhancements to their publications. Our services comprise of:",
        "Abstraction of case law and legal journals",
        "Indexing legal material",
        "Legal research",
        "Copy editing"
      ]
    },
    {
      title: "Organizing Legal Database",
      details: [
        "Creating legal databases for law firms and corporates",
        "Providing assistance in organizing the information into an index and searchable database"
      ]
    },
    {
      title: "Proofreading Services",
      details: [
        "Reviewing and rectifying spellings",
        "Making grammatical changes if needed",
        "Confirming uniformity in typefaces throughout the document",
        "Determining accurate and consecutive numbering of several elements like page numbers",
        "Looking for errors in formatting",
        "Validating table of contents with elements like titles and subtitles",
        "Validating the appropriateness of in-text illustrations",
        "Real Estate Title Search",
        "Data Entry Services"
      ]
    },
    {
      title: "Corporate Services",
      details: [
        "Coordinating Hearings, Depositions, and Meetings with Clients",
        "Preparing Notices for Hearings and Depositions",
        "Arranging Court Reporters and Ordering Transcripts",
        "Formatting and Finalizing Pleadings and Correspondence",
        "Filing Documents Electronically",
        "Preparing Periodic Client Invoices",
        "Performing Clerical Tasks and Assignments",
        "Preparing Table of Authorities",
        "Preparing Table of Contents",
        "Legal Typing and Creating Minutes of Meetings"
      ]
    },
    {
      title: "Legal Research and Drafting Services",
      details: [
        "Performing Due Diligence",
        "Data Room Management",
        "Administrative and Regulatory Law Research Services",
        "Legislation Research Services, including Primary (Regulations, Statutes, Cases, etc.) and Secondary Sources (Legal Dictionaries, Law Reviews, Treatises, etc.)",
        "Case Law Research Services",
        "Compliance Research Services",
        "Multi-Jurisdictional Research Services",
        "Memoranda of Law Research Services",
        "Drafting of agreements/contracts as well as court-specific documents",
        "Analyzing SEC Forms such as Form 4 and inputting the relevant information into Excel."
      ]
    },
    {
      title: "Legal Transcription Services",
      details: [
        "Transcribing audio files related to legal cases.",
        "Tribunal Transcription",
        "Verbatim Voice Dictation"
      ]
    },
    {
      title: "Litigation Support Services",
      details: [
        "Depositions",
        "Medical Records",
        "Document Review Management",
        "Electronic Data Discovery Solutions",
        "Processing of Information Stored Electronically"
      ]
    },
    {
      title: "Other services",
      details: [
        "Data Management",
        "Reviewing documentation",
        "Legal data entry services",
        "Business registrations",
        "Preparing Agreements and Contracts (business and other kind)",
        "Data format conversion and storage",
        "Collection Evidence",
        "Legal Coding",
        "Legal Content Support"
      ]
    }
  ];
  

  return (
    <React.Fragment>
      <div className='mx-auto  sm:w-5/6 w-full md:w-5/6 lg:5/6'>
      <div className='m-4 space-y-3'>




      <div className="max-w-full px-8 py-4 bg-white rounded-lg shadow-md  hover:shadow-xl cursor-pointer" data-aos="fade-down">
  <div className="flex items-center justify-between">
    <span className="text-md font-bold text-black ">
     
    </span>
   
  </div>
  <div className="mt-2">
    <a
      href="#"
      className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
      tabIndex={0}
      role="link"
    >
     TLBs Paralegal Services

    </a>
    <p className="mt-2 text-black font-semibold ">
    We at The Legal Base understand the burden an attorney or a lawyer goes through. That is why we offer custom paralegal support services that are specially designed to suit your unique needs. Below mentioned are our portfolio of paralegal services that can be outsourced to us.

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
      <img
        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
        src="/law2.png"
        alt="avatar"
      />
     
    </div>
  </div>

  {/* ============================================================== */}

      <section className="bg-white dark:bg-white-90 mt-4">
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

export default Five;
