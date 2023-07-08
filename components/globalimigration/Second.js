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
							<h2 className="text-lg font-semibold tracking-tight text-center sm:text-5xl">Key Components of Global Immigration Management Services:
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
										<h4 className="text-lg font-medium leading-6">Immigration Consultation:
										</h4>
										<p className="mt-2 dark:text-gray-400">TLB can assist clients in providing expert advice and guidance on immigration options, eligibility requirements, and strategies tailored to the specific needs and goals of individuals or businesses.</p>
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
											<h4 className="text-lg font-medium leading-6">Visa and Work Permit Assistance:
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB can assist clients with preparing and submitting visa and work permit applications, ensuring compliance with immigration regulations, and liaising with immigration authorities.
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
											<h4 className="text-lg font-medium leading-6">Document Preparation and Review:
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB can assist clients with the preparation, review, and verification of immigration-related documents, such as application forms, supporting letters, translations, and other required paperwork.
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
											<h4 className="text-lg font-medium leading-6">Immigration Compliance:
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB can assist clients in ensuring compliance with immigration laws and regulations, including monitoring visa expiration dates, managing renewals and extensions, and staying updated on changing immigration policies.
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
											<h4 className="text-lg font-medium leading-6">Global Mobility Programs:
											</h4>
											<p className="mt-2 dark:text-gray-400">TLB can assist clients in providing support for companies with their global mobility initiatives, including managing employee relocations, visa sponsorship, and coordination of immigration processes across multiple countries.
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
												<h4 className="text-lg font-medium leading-6">Destination Services:
												</h4>
												<p className="mt-2 dark:text-gray-400">TLB can assist clients in providing support with the practical aspects of settling into a new country, including assistance with housing, schools, healthcare, and other essential services.
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
												<h4 className="text-lg font-medium leading-6">Immigration Policy and Advocacy:
												</h4>
												<p className="mt-2 dark:text-gray-400">TTLB can assist clients in monitoring and analyzing immigration policy changes, providing guidance on their impact, and advocating for clients&apos; interests through engagement with government agencies and immigration authorities.
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
									<h4 className="text-lg font-medium leading-6">Technology Solutions:
									</h4>
									<p className="mt-2 dark:text-gray-400">TLB can assist clients in implementation of technology platforms or software solutions that streamline the immigration process, improve data management, and provide real-time updates on application statuses.</p>
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
										<h4 className="text-lg font-medium leading-6">Compliance Training:
										</h4>
										<p className="mt-2 dark:text-gray-400">TLB can assist clients in conducting training programs and workshops to educate clients on immigration laws, compliance requirements, and best practices in global immigration management.
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
										<h4 className="text-lg font-medium leading-6">Ongoing Support:
										</h4>
										<p className="mt-2 dark:text-gray-400">TLB can assist clients with continued assistance throughout the immigration process, including answering inquiries, resolving issues, and providing updates on the progress of applications.
										</p>
									</div>
								</div>
							</div>
							{/* <div className="flex shadow-lg p-4 hover:shadow-2xl hover:p-4 border-solid  rounded-md" data-aos="fade-right">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium leading-6">Immigration Compliance:
										</h4>
										<p className="mt-2 dark:text-gray-400">TLB can assist clients in ensuring compliance with immigration laws and regulations, including monitoring visa expiration dates, managing renewals and extensions, and staying updated on changing immigration policies.
										</p>
									</div>
								</div> */}
						</div>
						<div aria-hidden="true" className="mt-10 lg:mt-0 " data-aos="fade-left">
							<img src="https://source.unsplash.com/random/360x800" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
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
								Global Immigration Management Services aim to simplify and optimize the immigration process, ensuring clients can navigate the complexities of immigration laws and procedures efficiently and effectively. These services are particularly valuable for individuals or businesses that have international mobility needs or are planning to expand their operations to different countries.
							</h2>



						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

export default Second