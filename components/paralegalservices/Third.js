"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Third() {
  const cardData = [
    {
      title: "Cost savings",
      description: "Outsourcing paralegal support to TLB can be more cost-effective than hiring and maintaining an in-house paralegal team. By outsourcing to TLB, organizations can avoid costs associated with salaries, benefits, training, office space, equipment, and other overhead expenses.",
    },
    {
      title: "Scalability and flexibility",
      description: "Outsourcing to TLB allows for flexibility in scaling paralegal resources based on workload fluctuations or specific project requirements. During peak periods or when facing a sudden increase in caseload, organizations can quickly ramp up paralegal support without the need for long-term commitments.",
    },
    {
      title: "Access to specialized expertise",
      description: "Outsourcing to TLB provides access to a pool of paralegals with diverse backgrounds and expertise in various areas of law. Organizations can tap into this specialized knowledge without having to invest in extensive training or hiring full-time paralegals with specific skill sets.",
    },
    {
      title: "Enhanced efficiency and productivity",
      description: "TLB Paralegal support can help streamline legal operations, increase efficiency, and improve overall productivity. TLB Paralegals are experienced in handling routine legal tasks, document management, research, and administrative duties, allowing attorneys to focus on higher-level legal work.",
    },
    {
      title: "Focus on core legal work",
      description: "By outsourcing paralegal support to TLB, attorneys and legal professionals can devote more time and attention to their core legal work, such as strategy, client counseling, case management, and courtroom advocacy. TLB Paralegals handle the time-consuming tasks, freeing up attorneys to focus on matters that require their expertise.",
    },
    {
      title: "Access to advanced technology and resources",
      description: "TLB Outsourced paralegal service providers often have access to advanced legal technology, research databases, and document management systems. Leveraging these tools can improve efficiency, accuracy, and the quality of work delivered.",
    },
    {
      title: "Reduced administrative burden",
      description: "TLB Paralegals can assist with administrative tasks, such as organizing documents, managing calendars, and maintaining case files. By outsourcing these administrative responsibilities to TLB, attorneys can minimize their administrative workload and allocate their time more effectively.",
    },
    {
      title: "Increased agility and competitiveness",
      description: "Outsourcing to TLB paralegal support allows organizations to stay agile and competitive in a rapidly changing legal landscape. They can quickly adapt to new projects, expand their services, and meet client demands without being constrained by limited in-house resources.",
    },

  ];
  
  return (
     <>
    <div className="bg-transparent mx-auto w-5/6">

      <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
        <h2 className="text-3xl font-bold">
          Why Outsource Paralegal Support Services to TLB?
        </h2>
        <p className="dark:text-gray-400">
          Outsourcing paralegal support offers several benefits to law firms and
          legal departments:
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
          modifier: 1,
         shadow: true,
        }}
        pagination={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper space-y-2"
      >
        {/* Step 2: Map the card data to the SwiperSlides */}
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white tiles rounded-b-xl shadow-gray-700 shadow-xl rounded-t-lg    p-8 ">
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

    <div  className="m-4 mt-8 mb-4">
    <div className="max-w-full p-6 overflow-hidden  rounded-lg shadow bg-[#1E293B] text-gray-100" >
	<article data-aos="flip-down">
		<h2 className="text-xl font-bold text-center mb-2">It&apos;s important</h2>
    <p className="font-semibold text-md">
    &quot;It&apos;s important to note that outsourcing paralegal support does not replace the need for qualified attorneys. Rather, it complements legal expertise by providing additional support and resources, enabling legal professionals to operate more efficiently and effectively.&quot;
    </p>

		<p className="mt-4 text-gray-400"></p>
		{/* <div className="flex items-center mt-8 space-x-4">
			<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
			<div>
				<h3 className="text-sm font-medium">Leroy Jenkins</h3>
				<time datetime="2021-02-18" className="text-sm text-gray-400">Feb 18th 2021</time>
			</div>
		</div> */}
	</article>
</div>
    </div>

   </div>
    </>
  );
}
