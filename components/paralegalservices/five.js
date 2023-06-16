import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from "swiper";

export default function Five() {
    const cardData = [
        {
          title: "Case Management",
          description: "Reviewing, organizing, indexing, and summarizing client files\nPreparing different correspondence\nPreparing a variety of pleadings"
        },
        {
          title: "Discovery Preparation",
          description: "Drafting Subpoenas, Interrogatories, and Discovery Demands\nDetailed Analysis Reports of Depositions and Interrogatories\nWitness Summary\nRequesting for Medical Reports and Detailed Analysis of Medical Reports"
        },
        {
          title: "Trial Preparation",
          description: "Expert witness report summarization\nDocument summarization for discovery\nProperty search from public records\nDocument Management with the use of software Casemap"
        },
        {
          title: "Legal Document Production",
          description: "Contracts\nPower of attorneys\nPrenuptial agreements\nCase Information statements\nProperty Settlement agreements"
        },
        {
          title: "Editorial Support",
          description: "Abstraction of case law and legal journals\nIndexing legal material\nLegal research\nCopy editing"
        },
        {
          title: "Organizing Legal Database",
          description: "Creating legal databases for law firms and corporates\nProviding assistance in organizing the information into an index and searchable database"
        },
        {
          title: "Proofreading Services",
          description: "Reviewing and rectifying spellings\nMaking grammatical changes if needed\nConfirming uniformity in typefaces throughout the document\nDetermining accurate and consecutive numbering of several elements like page numbers\nLooking for errors in formatting\nValidating table of contents with elements like titles and subtitles\nValidating the appropriateness of in-text illustrations\nReal Estate Title Search\nData Entry Services"
        },
        {
          title: "Corporate Services",
          description: "Coordinating Hearings, Depositions, and Meetings with Clients\nPreparing Notices for Hearings and Depositions\nArranging Court Reporters and Ordering Transcripts\nFormatting and Finalizing Pleadings and Correspondence\nFiling Documents Electronically\nPreparing Periodic Client Invoices\nPerforming Clerical Tasks and Assignments\nPreparing Table of Authorities\nPreparing Table of Contents\nLegal Typing and Creating Minutes of Meetings"
        },
        {
          title: "Legal Research and Drafting Services",
          description: "Performing Due Diligence\nData Room Management\nAdministrative and Regulatory Law Research Services\nLegislation Research Services, including Primary (Regulations, Statutes, Cases, etc.) and Secondary Sources (Legal Dictionaries, Law Reviews, Treatises, etc.)\nCase Law Research Services\nCompliance Research Services\nMulti-Jurisdictional Research Services\nMemoranda of Law Research Services\nDrafting of agreements/contracts as well as court-specific documents\nAnalyzing SEC Forms such as Form 4 and inputting the relevant information into Excel."
        },
        {
          title: "Legal Transcription Services",
          description: "Transcribing audio files related to legal cases.\nTribunal Transcription\nVerbatim Voice Dictation"
        },
        {
          title: "Litigation Support Services",
          description: "Depositions\nMedical Records\nDocument Review Management\nElectronic Data Discovery Solutions\nProcessing of Information Stored Electronically"
        },
        {
          title: "Other services",
          description: "Data Management\nReviewing documentation\nLegal data entry services\nBusiness registrations\nPreparing Agreements and Contracts (business and other kind)\nData format conversion and storage\nCollection Evidence\nLegal Coding\nLegal Content Support"
        }
      ];
  
  return (
     <>
    

      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-3xl font-bold">
        TLB’s Paralegal Services
        </h2>
        <p className="dark:text-gray-400">
        We at The Legal Base understand the burden an attorney or a lawyer goes through. That is why we offer custom paralegal support services that are specially designed to suit your unique needs. Below mentioned are our portfolio of paralegal services that can be outsourced to us.


        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* Step 2: Map the card data to the SwiperSlides */}
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="text-white w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold ml-4">{card.title}</h3>
              </div>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      
    </>
  );
}
