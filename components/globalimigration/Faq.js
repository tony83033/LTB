import React, { useState } from 'react';

const Faq = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const handleQuestionToggle = (index) => {
        setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <React.Fragment>
            <section className="bg-[#1E293B] text-gray-100 mt-4 mx-auto w-full">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                        How it works
                    </p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        {faqData.map((item, index) => (
                            <details
                                key={index}
                                open={index === openQuestionIndex}
                                onToggle={() => handleQuestionToggle(index)}
                            >
                                <summary className="py-2 outline-none cursor-pointer focus:underline">
                                    {item.question}
                                </summary>
                                <div className="px-4 pb-4">
                                    <p>{item.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

const faqData = [
    {
        question: "What is case intake and how does it work?",
        answer: "Case intake is the process of assessing and gathering information from potential clients seeking legal assistance. The intake worker conducts an initial assessment of the client's needs, determines their eligibility for services, and gathers necessary information about their case. If the client is eligible, they are assigned a case manager who will provide ongoing support and services."
    },
    {
        question: "What types of legal cases do you handle at your organisation?",
        answer: "Our organisation specialises in handling all kinds of Civil, criminal and bankruptcy cases."
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


export default Faq;