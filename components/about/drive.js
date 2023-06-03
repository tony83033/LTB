import React from 'react'
import Image from 'next/image'
const drive = () => {
  return (
    <React.Fragment>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-22 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image
        width={500}
        height={500}
          alt="content"
          className="object-cover object-center h-full w-full"
          src="/about.jpg"
        />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
            What Drives Us?
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base">
            At The Legal Base, we are driven by a relentless pursuit of excellence and the desire to constantly elevate the standard of legal service delivery. 

            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
            
Description: The Legal Base LPO was born from a desire to be more than just another outsourced legal process services provider. Our founders envisioned a company that would be a true partner to corporates, law firms, and attorneys around the globe - a trusted extension of their teams that would deliver legal services and process consulting with the highest level of professionalism. We strive to be a valued and integral part of our client&apos;s operations, always working alongside them to achieve their goals and objectives.

          </p>
          {/* <a className="text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  </div>
</section>





<section className="text-gray-600 body-font">
  <div className="container px-5 py-1 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block w-8 h-8 text-gray-400 mb-8"
        viewBox="0 0 975.036 975.036"
      >
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
      </svg>
      <p className="leading-relaxed text-lg">
      At The Legal Base, we are driven by a relentless pursuit of excellence and the desire to constantly elevate the standard of legal service delivery. We are dedicated to delivering value and a competitive edge at every stage of the process, ensuring that our clients see superior long-term returns on their investment. Our focus is always on protecting our client&apos;s interests and delivering results that exceed their expectations. We believe that by going above and beyond, we can build lasting partnerships and help our clients achieve their goals.

      </p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
     
    </div>
  </div>
</section>


    </React.Fragment>
  )
}

export default drive