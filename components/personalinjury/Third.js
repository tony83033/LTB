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
      title: "Expertise and Specialized Knowledge:",
      description: "TLB personal injury experts specialize in handling various aspects of personal injury cases. They have expertise in medical record retrieval, billing and coding review, case administration, and other related tasks. By outsourcing to TLB, law firms can access specialized knowledge and skills that may not be available in-house.",
    },
    {
      title: "Cost Savings:",
      description: "Outsourcing to TLB can be cost-effective. It eliminates the need to hire additional staff or invest in expensive software and resources.Instead, law firms can pay for the specific services they require on a case-by -case basis, reducing overhead costs.",
    },
    {
      title: "Increased Efficiency and Productivity:",
      description: "TLB can help streamline processes and improve efficiency. TLB has established workflows, technology tools, and standardized procedures to handle tasks more quickly and accurately.This allows law firms to manage caseloads more effectively, improve turnaround times, and increase overall productivity",
    },
    {
      title: "Focus on Core Legal Work:",
      description: "By outsourcing to TLB, attorneys can dedicate more time and attention to core legal work, such as client consultations, legal research, strategy development, and courtroom representation.Delegating administrative and time- consuming tasks to TLB allows attorneys to focus on the most critical aspects of the case ",
    },
    {
      title: "Scalability and Flexibility:",
      description: "Outsourcing to TLB provides scalability and flexibility to handle fluctuations in caseloads.Law firms can easily ramp up or down TLB’s resources based on their current needs.This flexibility allows for efficient resource allocation without the burden of maintaining a large in-house support team during slower periods. ",
    },
    {
      title: "Access to Technology and Tools:",
      description: "TLB has access to advanced technology tools and software specifically designed for managing personal injury cases.This technology streamlines processes, improves data organization, and enhances communication and collaboration, resulting in increased efficiency and improved outcomes.",
    },
    {
      title: "Quality Assurance and Compliance:",
      description: "TLB has a robust quality assurance process in place to ensure accuracy, compliance with regulations, and adherence to best practices.This helps reduce errors and minimize the risk of non- compliance, enhancing the overall quality of the support services provided.",
    },
    {
      title: "Focus on Client Service",
      description: "By outsourcing to TLB, law firms can enhance their client service and satisfaction. With efficient and reliable support, attorneys can provide more personalized attention to clients, communicate updates more effectively, and deliver better overall outcomes. ",
    },

  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why Outsource Personal Injury Litigation Services to TLB?
          </h2>
          <p className="dark:text-gray-400">
            Outsourcing personal injury support services offers several advantages to law firms and
            attorneys:
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

        <div data-aos="flip-down" className="m-4 mt-8 mb-4">
          <div className="max-w-full p-6 overflow-hidden  rounded-lg shadow bg-[#1E293B] text-gray-100" >
            <article>
              <h2 className="text-xl font-bold text-center mb-2">It&apos;s important</h2>
              <p className="font-semibold text-md">
                Overall, outsourcing personal injury support services to TLB will allow law firms and
                attorneys to leverage specialized expertise, increase efficiency, reduce costs, and focus
                on delivering high-quality legal services to their clients. It enables them to streamline
                operations, enhance productivity, and improve the overall management of personal
                injury cases
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
