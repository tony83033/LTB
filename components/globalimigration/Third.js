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
      title: "Expertise and Knowledge:",
      description: "TLB provides specialized professionals in immigration laws, regulations, and processes across multiple countries. They have in-depth knowledge and expertise in navigating the complexities of immigration systems. By outsourcing to TLB, immigration law firms and corporate legal departments can benefit from their extensive experience and ensure that their immigration matters are handled efficiently and accurately.",
    },
    {
      title: "Time and Resource Efficiency:",
      description: "Immigration processes can be time-consuming and require significant administrative work. Outsourcing immigration management services to TLB frees up valuable time and resources for immigration law firms and corporate legal departments to focus on their core activities. Our professionals handling immigration matters can efficiently manage paperwork, applications, and compliance requirements, saving time and effort.",
    },
    {
      title: "Compliance and Risk Mitigation: ",
      description: "Immigration laws and regulations are subject to frequent changes, making compliance a challenging task. Outsourcing immigration management service to TLB ensures that immigration law firms and corporate legal departments stay updated with the latest immigration policies, rules, and procedures. TLB can proactively monitor changes, assess their impact, and help clients remain compliant, minimizing the risk of legal issues or penalties.",
    },
    {
      title: "Access to Global Networks: ",
      description: "TLB has extensive networks and relationships with immigration authorities, government agencies, and other relevant stakeholders. This can help expedite the immigration process, provide access to valuable resources, and navigate potential challenges more effectively.",
    },
    {
      title: "Tailored Solutions: ",
      description: "Each immigration case is unique, and outsourcing immigration management services to TLB allows immigration law firms and corporate legal departments to receive personalized and tailored solutions. TLB can assess specific needs, goals, and constraints to develop customized strategies and plans that align with clients' objectives.",
    },
    {
      title: "Scalability and Flexibility: ",
      description: "Outsourcing immigration management service to TLB enables immigration law firms and corporate legal department to scale their immigration efforts according to their requirements. Whether it's handling a single immigration case or managing a large-scale global mobility program, TLB can adapt to the scope and scale of the client's needs.",
    },
    {
      title: "Cost Savings: ",
      description: "While there is a cost associated with outsourcing immigration management service to TLB, it can often be more cost-effective than maintaining an in-house immigration team. Outsourcing eliminates the need for hiring and training dedicated immigration staff, investing in infrastructure and technology, and staying updated with evolving immigration regulations.",
    },
    {
      title: "Peace of Mind: ",
      description: "Immigration processes can be stressful and complex, especially when dealing with multiple countries and legal frameworks. Outsourcing immigration management service to TLB provides peace of mind, knowing that experts are managing the process, ensuring compliance, and handling any challenges that may arise.",
    },

  ];

  return (
    <>
      <div className="bg-transparent mx-auto w-5/6">

        <div className="container mx-auto p-4 my-6 space-y-2 text-center  mt-4 bg-w mb-4">
          <h2 className="text-3xl font-bold">
            Why Outsource Immigration Management Services to TLB?
          </h2>
          <p className="dark:text-gray-400">
            Outsourcing global immigration management services can offer several advantages to individuals and businesses. Here are some reasons why outsourcing these services to TLB is beneficial:
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

        <div className="m-4 mt-8 mb-4" data-aos="flip-down">
          <div className="max-w-full p-6 overflow-hidden  rounded-lg shadow bg-[#1E293B] text-gray-100" >
            <article>
              <h2 className="text-xl font-bold text-center mb-2">Our Global Immigration Management Service experts help your business by:</h2>
              {/* <p> */}
              <ul className="font-semibold text-md">
                  <li>as a virtual assistant for your Immigration Firm.</li>
                  <li>information from clients on the prescribed case management tool/database.</li>
                  <li>information in consonance with visa specific requirements.</li>
                  <li>with clients on behalf of the attorney/Firm for queries and other information requirements.</li>
                  <li>focused letters and cover letters to support Visa petitions</li>
                  <li>Attorney cover letters for visa application forms.</li>
                  <li>expert services on various software platforms like INSZoom, LawLogix and BlueDot.</li>
                  <li>of Visa application forms with the department of immigration (for e.g., USCIS) online.</li>
                  <li>post submission track on the status of applications/petitions.</li>
                  <li>continuous research on the changes and amendments in immigration policies and rules.</li>
                  <li>information from clients on recommended tools</li>
                  <li>information in accordance with specific Visa needs</li>
                  <li>with clients on behalf of immigration firms</li>
                  <li>filing of Visa application forms and offering post submission status</li>
                </ul>
              {/* </p> */}
              <p className="mt-4 text-gray-400"></p>
            </article>
          </div>
        </div>

        {/* <div data-aos="flip-down" className="m-4 mt-8 mb-4">
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

            </article>
          </div>
        </div> */}

      </div>
    </>
  );
}
