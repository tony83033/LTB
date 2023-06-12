import React from 'react'

const Third = () => {
  return (
    <React.Fragment>
        <div className="mx-auto my-12 max-w-7xl md:my-24 lg:my-32 ">
  <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
    <div className="px-4 py-10 lg:col-span-5 lg:px-0 m-2">
      <span className="mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold">
        Pricing that fits your budget
      </span>
      <h1 className="text-lg p-2 font-bold md:text-5xl">
      TLBS Paralegal Services

      </h1>
      <p className="mt-8 font-medium">
      We at The Legal Base understand the burden an attorney or a lawyer goes through. That is why we offer custom paralegal support services that are specially designed to suit your unique needs. Below mentioned are our portfolio of paralegal services that can be outsourced to us.

      </p>
      <div className="mt-8  p-2 flex w-full max-w-sm items-center space-x-2">
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Email"
        />
        {/* <button
      type="button"
      class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Book Appointment
    </button> */}
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Book Appointment
        </button>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
      <div className="w-full p-5 md:w-1/2">
        <div className="rounded-md border bg-white bg-opacity-90">
          <div className=" border-b">
            <div className="px-9 py-7">
              <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
              Case Management:

              </h3>
              <p className="font-medium leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consect etur adipiscing maror.
              </p>
            </div>
          </div>
          <div className="px-9 pb-9 pt-8">
            {/* <p class="mb-6 font-medium leading-relaxed text-gray-600">
          Features included:
        </p> */}
            {/* <ul class="mb-11">
          <li class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-semibold leading-normal">3 Team Members</p>
          </li>
          <li class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-semibold leading-normal">1200+ UI Blocks</p>
          </li>
          <li class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-semibold leading-normal">
              10 GB Cloud Storage
            </p>
          </li>
          <li class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-semibold leading-normal">
              Individual Email Account
            </p>
          </li>
          <li class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-semibold leading-normal">Premium Support</p>
          </li>
        </ul> */}
            <p className=" leading-relaxed -500 font-semibold ">
            <ul class="list-disc">
  <li className='mt-2'>Reviewing, organizing, indexing, and summarizing client files
</li>

<li className='mt-2'> Preparing different correspondence

</li>
<li className='mt-2'>Preparing a variety of pleadings

</li>
 
</ul>
<li className='mt-2'></li>
            </p>
            {/* <p class="mb-6 text-lg font-semibold leading-normal text-gray-600">
          <span>Starting from</span>
          <span class="ml-2 text-gray-900">$49/mo</span>
        </p> */}
            <div className="md:inline-block mt-4">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-5 md:w-1/2">
        <div className="rounded-md border bg-white bg-opacity-90">
          <div className=" border-b">
            <div className="px-9 py-7">
              <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
              Discovery Preparation:

              </h3>
              <p className="font-medium leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consect etur adipiscing maror.
              </p>
            </div>
          </div>
          <div className="px-9 pb-9 pt-8">
            {/* <p class="mb-6 font-medium leading-relaxed text-gray-600">
          Features included:
        </p> */}
            {/* <ul class="mb-11">
          <li class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-semibold leading-normal">3 Team Members</p>
          </li>
          <li class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-semibold leading-normal">1200+ UI Blocks</p>
          </li>
          <li class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-semibold leading-normal">
              10 GB Cloud Storage
            </p>
          </li>
          <li class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-semibold leading-normal">
              Individual Email Account
            </p>
          </li>
          <li class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-semibold leading-normal">Premium Support</p>
          </li>
        </ul> */}
            <p className=" leading-relaxed -500 font-semibold ">
            <ul class="list-disc">
  <li className='mt-2'>Drafting Subpoenas ,Interrogatories, and Discovery Demands

</li>

<li className='mt-2'> Detailed Analysis Reports of Depositions and Interrogatories


</li>

<li className='mt-2'>Witness Summary


</li>

 
</ul>              
            </p>
            {/* <p class="mb-6 text-lg font-semibold leading-normal text-gray-600">
          <span>Starting from</span>
          <span class="ml-2 text-gray-900">$49/mo</span>
        </p> */}
            <div className="md:inline-block mt-4">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  )
}

export default Third