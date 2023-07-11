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
			<div className='bg-white    sm:w-5/6 w-full md:w-5/6 lg:5/6 mx-auto'>
				<section className="dark:bg-white bg-white">
					<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
						<div data-aos="fade-down">
							<h2 className="text-lg font-semibold tracking-tight text-center sm:text-5xl">Here are some common elements of outsourced case intake services
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
										<h4 className="text-lg font-medium leading-6">Initial Contact and Communication:
										</h4>
										<p className="mt-2 dark:text-gray-400">TLB can act as the first point of contact for potential clients and handle phone calls, emails, or
											web inquiries from individuals seeking legal assistance. TLB can gather essential information
											about the potential case, such as the nature of the legal issue, relevant dates, parties involved,
											and any supporting documentation.</p>
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
											<h4 className="text-lg font-medium leading-6">Data Collection and Documentation
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB can collect relevant data and documents from potential clients during the intake process.
												This may include personal information, contact details, incident descriptions, medical records,
												contracts, or any other relevant information needed for evaluation.
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
											<h4 className="text-lg font-medium leading-6">Initial Assessment and Screening:
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB can assess the potential cases based on predetermined criteria or instructions provided by
												the law firm. TLB can evaluate the viability of the case, determining if it falls within the firm&apos;s
												practice areas and meets the necessary requirements for further consideration. This
												assessment helps filter out cases that do not align with the firm&apos;s expertise or do not meet
												specific criteria.
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
											<h4 className="text-lg font-medium leading-6">Case Prioritization and Routing:
											</h4>
											<p className="mt-2 dark:text-gray-400">Once the initial assessment is complete, TLB can prioritize and route qualified cases to the
												appropriate attorney or legal team within the law firm. This involves categorizing cases based on
												urgency, complexity, practice area, or other predefined factors to ensure proper allocation of
												resources.
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
											<h4 className="text-lg font-medium leading-6">Appointment Scheduling:
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB can assist in scheduling initial consultations or appointments between potential clients and
												attorneys. TLB can manage calendars, coordinate availability, and communicate with both
												parties to ensure smooth scheduling.
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
												<h4 className="text-lg font-medium leading-6">Client Relationship Management:
												</h4>
												<p className="mt-2 dark:text-gray-400">During the case intake process, TLB can maintain communication with potential clients, keeping
													them informed about the progress of their inquiry or case. TLB can provide updates, answer
													basic questions, and address any concerns or follow-up inquiries.
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
												<h4 className="text-lg font-medium leading-6">Data Management and Reporting:
												</h4>
												<p className="mt-2 dark:text-gray-400">TLB can employ case management software or databases to capture and organize the intake
													data. TLB can generate reports and provide analytics related to case intake volume, case types,
													conversion rates, or other relevant metrics to help law firms assess their performance and make
													data-driven decisions.
												</p>
											</div>
										</div>
										{/* <div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-left"> */}
											{/* <div className="flex-shrink-0">
												<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
												</div>
											</div> */}
											{/*
											<div className="ml-4">
												<h4 className="text-lg font-medium leading-6">Immigration Support: </h4>
												<p className="mt-2 dark:text-gray-400">TLB Paralegals can provide support in immigration matters, including completing immigration forms, gathering supporting documentation, and assisting with visa applications or petitions.
												</p>
											</div>
											*/}
										{/* </div> */}
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
								Outsourcing case intake services can bring several benefits, including increased efficiency in
								handling inquiries, improved client experience during the initial contact phase, streamlined data
								management, and the ability to focus on core legal work. It allows law firms to ensure proper
								evaluation and prioritization of potential cases while optimizing their resources.
							</h2>



						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

export default Second