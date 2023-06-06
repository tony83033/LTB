import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      question: "What is case intake and how does it work?",
      answer: "Case intake is the process of assessing and gathering information from potential clients seeking legal assistance. The intake worker conducts an initial assessment of the client's needs, determines their eligibility for services, and gathers necessary information about their case. If the client is eligible, they are assigned a case manager who will provide ongoing support and services."
    },
    {
      question: "What types of legal cases do you handle at your organisation?",
      answer: "Our organisation specialises in handling all kinds of Civil, criminal and bankruptcy cases"
    },
    {
      question: "What is the process for seeking assistance through your organisation?",
      answer: "The process for seeking assistance begins with an initial contact with our organisation. From there, we will conduct an assessment of your needs and determine your eligibility for our services. If you are eligible, we will gather the necessary information about your case and assign a case manager to work with you."
    },
    {
      question: "How do I know if I am eligible for your services?",
      answer: "Eligibility is determined by our intake worker during the initial assessment. We will consider factors such as your income, location, and the specific nature of your case when determining your eligibility."
    },
    {
      question: "How long does the case intake process take?",
      answer: "The case intake process typically can take somewhere around a week to a month depending on your organisation’s unique needs."
    },
    {
      question: "Can I speak with a case manager before starting the intake process?",
      answer: "Yes, you can contact our organisation and request to speak with a case manager before starting the intake process."
    }
  ];
  

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container max-w-8xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h1>
        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => handleToggle(index)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">{faq.question}</h1>
                <span className={`text-white bg-blue-500 rounded-full ${openIndex === index ? 'transform rotate-180' : ''}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">{faq.answer}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
