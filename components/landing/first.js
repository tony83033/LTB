import React from 'react'

const first = () => {
  return (
    <React.Fragment>
        <div className="sticky  w-full bg-white">
  <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
      <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
        <div className="rounded-full bg-white p-1 px-2">
          <p className="text-sm font-medium">Want&apos; Solution</p>
        </div>
        <p className="text-sm font-medium">Get in touch with us →</p>
      </div>
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
        Personal Injury Legal Solutions
      </h1>
      <p className="mt-8 text-lg text-gray-700">
        The Legal Base is a &apos;One Stop Shoop&apos; for personal injury law firms ,
        offering complete medical and legal help WE provide continual support by
        actively engaging in all phases of personal injury litigation, from
        client intake through settlement.g elit. Consequatur modi blanditiis
        dolores quasi eaque explicabo!
      </p>
      <form action="" className="mt-8 flex items-start space-x-2">
        <div>
          <input
            className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Enter your email"
            id="email"
          />
          <p className="mt-2 text-sm text-gray-500">
            We care about your privacy
          </p>
        </div>
        <div>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
    <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
      <img
        className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
        src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
    </div>
  </div>
</div>

    </React.Fragment>
  )
}

export default first