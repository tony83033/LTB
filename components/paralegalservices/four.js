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

export default function Four() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="bg-white shadow-lg rounded-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold ml-4">Appointment Scheduling: 
</h3>
          </div>
          <p class="text-gray-700">TTLB can assist in scheduling initial consultations or appointments between potential clients and attorneys. TLB can manage calendars, coordinate availability, and communicate with both parties to ensure smooth scheduling.

</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="bg-white shadow-lg rounded-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold ml-4">Appointment Scheduling: 
</h3>
          </div>
          <p class="text-gray-700">TTLB can assist in scheduling initial consultations or appointments between potential clients and attorneys. TLB can manage calendars, coordinate availability, and communicate with both parties to ensure smooth scheduling.

</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="bg-white shadow-lg rounded-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold ml-4">Appointment Scheduling: 
</h3>
          </div>
          <p class="text-gray-700">TTLB can assist in scheduling initial consultations or appointments between potential clients and attorneys. TLB can manage calendars, coordinate availability, and communicate with both parties to ensure smooth scheduling.

</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="bg-white shadow-lg rounded-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold ml-4">Appointment Scheduling: 
</h3>
          </div>
          <p class="text-gray-700">TTLB can assist in scheduling initial consultations or appointments between potential clients and attorneys. TLB can manage calendars, coordinate availability, and communicate with both parties to ensure smooth scheduling.

</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="bg-white shadow-lg rounded-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold ml-4">Appointment Scheduling: 
</h3>
          </div>
          <p class="text-gray-700">TTLB can assist in scheduling initial consultations or appointments between potential clients and attorneys. TLB can manage calendars, coordinate availability, and communicate with both parties to ensure smooth scheduling.

</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="bg-white shadow-lg rounded-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold ml-4">Appointment Scheduling: 
</h3>
          </div>
          <p class="text-gray-700">TTLB can assist in scheduling initial consultations or appointments between potential clients and attorneys. TLB can manage calendars, coordinate availability, and communicate with both parties to ensure smooth scheduling.

</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="bg-white shadow-lg rounded-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold ml-4">Appointment Scheduling: 
</h3>
          </div>
          <p class="text-gray-700">TTLB can assist in scheduling initial consultations or appointments between potential clients and attorneys. TLB can manage calendars, coordinate availability, and communicate with both parties to ensure smooth scheduling.

</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="bg-white shadow-lg rounded-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold ml-4">Appointment Scheduling: 
</h3>
          </div>
          <p class="text-gray-700">TTLB can assist in scheduling initial consultations or appointments between potential clients and attorneys. TLB can manage calendars, coordinate availability, and communicate with both parties to ensure smooth scheduling.

</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="bg-white shadow-lg rounded-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold ml-4">Appointment Scheduling: 
</h3>
          </div>
          <p class="text-gray-700">TTLB can assist in scheduling initial consultations or appointments between potential clients and attorneys. TLB can manage calendars, coordinate availability, and communicate with both parties to ensure smooth scheduling.

</p>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
