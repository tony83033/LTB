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
										<h4 className="text-lg font-medium leading-6">Medical Records Retrieval:
										</h4>
										<p className="mt-2 dark:text-gray-400">Personal injury cases often require obtaining relevant medical records and documentation. TLB
											can assist in retrieving medical records, organizing them in a secure and accessible manner,
											and preparing summaries or chronologies for easy reference.
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
											<h4 className="text-lg font-medium leading-6">Medical Billing and Coding Review:
											</h4>
											<p className="mt-2 dark:text-gray-400">Personal injury claims involve analyzing medical bills and coding to ensure accuracy and
												identify any potential discrepancies or overcharges. TLB can review medical billing statements,
												verify billing codes, and help identify areas where medical expenses may have been improperly
												charged.
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
											<h4 className="text-lg font-medium leading-6">Document Management:
											</h4>
											<p className="mt-2 dark:text-gray-400">Personal injury cases involve numerous documents, including police reports, witness
												statements, accident reports, and insurance policies. TLB can help organize and manage these
												documents, ensuring easy access and retrieval when needed.
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
											<h4 className="text-lg font-medium leading-6">Investigation Support:
											</h4>
											<p className="mt-2 dark:text-gray-400">
												TLB can assist in conducting investigations related to personal injury cases. This may involve
												gathering evidence, interviewing witnesses, collecting accident scene data, or working with
												private investigators to uncover critical information.
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
											<h4 className="text-lg font-medium leading-6">Case Administration and Management:
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB can handle administrative tasks associated with case management. This includes
												maintaining case files, managing calendars and deadlines, scheduling appointments, and
												providing regular case status updates to attorneys
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
												<h4 className="text-lg font-medium leading-6">Demand Letter Preparation:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													TLB can assist in preparing demand letters, which outline the client&apos;s claim for compensation
													and damages. They can help gather necessary information, draft the letter, and ensure its
													completeness and accuracy
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
												<h4 className="text-lg font-medium leading-6">
													Settlement Negotiation Support:
												</h4>
												<p className="mt-2 dark:text-gray-400">
													TLB can offer assistance during settlement negotiations. This may involve reviewing settlement
													offers, calculating damages, conducting research to support the negotiation process, and
													advising on negotiation strategies.
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
												<h4 className="text-lg font-medium leading-6">
													Litigation Support:
													</h4>
												<p className="mt-2 dark:text-gray-400">
													In cases that proceed to litigation, TLB can provide support during trial preparation. This
													includes assistance with drafting pleadings, organizing exhibits, conducting legal research, and
													preparing trial notebooks.
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
								By outsourcing personal injury support services to TLB, law firms and attorneys can benefit from
								specialized expertise, increased efficiency, reduced administrative burden, and improved case
								management. It allows legal professionals to focus on strategic aspects of the case, such as
								client advocacy, while delegating time-consuming tasks to qualified support providers.
							</h2>



						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

export default Second