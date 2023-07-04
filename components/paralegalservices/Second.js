"use client"
import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Second = () => {
    useEffect(() => {
        AOS.init({
          offset: 300, // offset (in px) from the original trigger point
          delay: 0, // values from 0 to 3000, with step 50ms
          duration: 1000, 
        });
      });
  return (
    <React.Fragment>
	<div className='bg-white dark:bg-[#1E293B]   sm:w-5/6 w-full md:w-5/6 lg:5/6 mx-auto'>
    <section className=" dark:text-white bg-white dark:bg-[#1E293B]">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div data-aos="fade-down">
			<h2 className="text-lg font-semibold tracking-tight text-center sm:text-5xl dark:text-gray-50 ">Here are some common paralegal services which are typically outsourced to TLB
</h2>
			{/* <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Here are some common paralegal services which are typically outsourced to TLB.</p> */}
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>

<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">

						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Legal Research
</h4>
							<p className="mt-2 dark:text-gray-400">TLB Paralegals can conduct legal research on specific issues, case law, statutes, and regulations. They can gather relevant information, analyze legal precedents, and provide summaries or briefs to assist attorneys in their case preparation.
</p>
						</div>
					</div>
				<div className="mt-12 space-y-12">
					<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-[100] rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Document Preparation and Review: 
</h4>
							<p className="mt-2 dark:text-gray-400">TLB Paralegals can assist with drafting, reviewing, and proofreading legal documents such as contracts, agreements, pleadings, motions, and correspondence. They ensure documents comply with legal formatting and assist with the organization and management of document databases.
</p>
						</div>
					</div>
					<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Case Management: 
</h4>
							<p className="mt-2 dark:text-gray-400">TLB Paralegals can help manage case files, organize documents, and evidence, and maintain electronic or physical filing systems. They may assist in preparing trial notebooks, exhibit lists, and witness binders, and support attorneys during hearings, depositions, or trials.
</p>
						</div>
					</div>
					<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Discovery Support: 
</h4>
							<p className="mt-2 dark:text-gray-400">TLB Paralegals can assist with the discovery process, including drafting and responding to discovery requests, organizing, and managing document productions, and preparing privilege logs. They may also assist with e-discovery, utilizing specialized software and tools.
</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0 " data-aos="fade-left">
				<img src="https://source.unsplash.com/random/360x800" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
	
<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Contract Management
</h4>
							<p className="mt-2 dark:text-gray-400">TLB Paralegals can help with contract management tasks, such as reviewing contracts, identifying key terms and risks, maintaining contract databases, and tracking contract deadlines and obligations.
</p>
						</div>
					</div>



					<div className="mt-12 space-y-12">
						<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" >
							<div className="flex-shrink-0" data-aos="fade-left">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4" data-aos="fade-left">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Corporate Governance Support: 
</h4>
								<p className="mt-2 dark:text-gray-400">TLB Paralegals can provide assistance with corporate governance matters, including preparing board meeting minutes, drafting resolutions, maintaining corporate records, and assisting with compliance-related tasks.</p>
							</div>
						</div>
						<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-left">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Intellectual Property Support: 
</h4>
								<p className="mt-2 dark:text-gray-400">TLB Paralegals with expertise in intellectual property law can assist with tasks such as trademark searches, patent filings, copyright registrations, and maintaining intellectual property portfolios.
</p>
							</div>
						</div>
						<div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-left">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Immigration Support: </h4>
								<p className="mt-2 dark:text-gray-400">TLB Paralegals can provide support in immigration matters, including completing immigration forms, gathering supporting documentation, and assisting with visa applications or petitions.
</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-aos="fade-right">
					<img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>



<section className="dark:bg-gray-800 dark:text-gray-100 m-4 mx-8 bg-white mb-4" data-aos="zoom-in">
  <div className="container flex flex-col mx-auto lg:flex-row">
    <div
      className="w-full lg:w-1/3"
      style={{
        backgroundImage: 'url("https://source.unsplash.com/random/640x480")',
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}
    />
    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
  
      <h2 className="text-xl font-semibold leading-loose">
      By outsourcing paralegal services to TLB, law firms and legal departments can access specialized expertise, scale their resources as needed, reduce costs, and increase efficiency. It allows attorneys to focus on core legal work while leveraging the support of qualified paralegals for various legal tasks.

      </h2>



    </div>
  </div>
</section>
</div>
   </React.Fragment>
  )
}

export default Second