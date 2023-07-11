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
      title: "Improved Responsiveness:",
      description: "Outsourcing to TLB can ensure a prompt response to potential clients. By having a dedicated team managing initial inquiries, law firms can provide timely and professional communication, enhancing the overall client experience and satisfaction.",
    },
    {
      title: "Scalability and Flexibility:",
      description: "TLB can scale their resources based on the volume of inquiries. During periods of high demand, such as marketing campaigns or peak seasons, TLB can quickly ramp up their capacity to handle a larger influx of potential cases. Conversely, during slower periods, TLB can adjust their resources, accordingly, avoiding underutilized staff.",
    },
    {
      title: "Cost Savings:",
      description: "Outsourcing to TLB can be cost-effective compared to hiring and training an in-house team. Law firms can avoid expenses associated with recruitment, salaries, benefits, office space, and technology infrastructure. Additionally, outsourcing to TLB allows for a variable cost structure, as firms only pay for the services utilized.",
    },
    {
      title: "Expertise and Specialization:",
      description: "TLB specializes in efficiently managing the intake process. TLB has experience in gathering relevant information, conducting initial case assessments, and routing cases to the appropriate legal teams. TLB’s expertise in case intake procedures can result in more accurate and efficient evaluations of potential cases.",
    },
    {
      title: "Focus on Core Legal Work:",
      description: "By outsourcing to TLB, law firms can free up their internal resources, allowing attorneys and legal staff to concentrate on core legal work. Instead of spending time on administrative tasks and initial client screenings, attorneys can focus on providing legal advice, strategizing cases, and advocating for their clients.",
    },
    {
      title: "Consistent Processes and Quality Assurance:",
      description: "TLB follows standardized processes and protocols for case intake. This consistency helps ensure that each potential case receives thorough and consistent evaluation and treatment. Quality assurance measures implemented by TLB helps maintain a high level of service and accuracy.",
    },
    {
      title: "Enhanced Efficiency and Productivity:",
      description: "Outsourcing case intake services to TLB will streamlines the intake process, resulting in increased efficiency and productivity. TLB leverages technology and automation tools to streamline data collection, organization, and reporting, reducing manual effort and improving overall workflow.",
    },
    {
      title: "Access to Data and Analytics:",
      description: "TLB offers reporting and analytics capabilities and can provide law firms with valuable insights and metrics on case intake volume, conversion rates, lead sources, and other relevant data. This information helps firms make data-driven decisions, optimize marketing strategies, and allocate resources effectively.",
    },

  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why Outsource Case Intake Services to TLB?
          </h2>
          <p className="dark:text-gray-400">
            Outsourcing case intake services to TLB offers several advantages to law firms and legal
            organizations:
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

        <div  data-aos="flip-down" className="m-4 mt-8 mb-4">
          <div className="max-w-full p-6 overflow-hidden  rounded-lg shadow bg-[#1E293B] text-gray-100" >
            <article>
              <h2 className="text-xl font-bold text-center mb-2">It&apos;s important</h2>
              <p className="font-semibold text-md">
                Overall, outsourcing case intake services to TLB will allows law firms to improve client service,
                increase efficiency, reduce costs, and focus on their core legal work. By leveraging the expertise
                and scalability TLB, firms can effectively manage the initial contact and evaluation process,
                ensuring that potential cases are properly assessed and directed to the appropriate legal teams.
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
