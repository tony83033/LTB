import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

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
      <div className="grid grid-cols-4 gap-4 m-4">
        {data.map((item, index) => (
          <div className="flip-card" key={index} data-aos="fade-up">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white">
                <h1 className="text-xl text-center justify-center mt-4">
                  {item.title}
                </h1>
                <Image
                  src="/management.png"
                  className="justify-center mx-auto my-auto mt-2"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flip-card-back overflow-auto">
                <h1 className="text-xl text-center justify-center mt-4">
                  {item.title}
                </h1>
                <ul className="list-decimal space-y-4 mt-2">
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Five;
