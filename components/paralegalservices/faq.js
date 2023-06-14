import React, { useState } from 'react';

const Faq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleQuestionToggle = (index) => {
    setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <React.Fragment>
      <section className="bg-gray-800 text-gray-100">
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
    question: 'Optio maiores eligendi molestiae totam dolores similique?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.',
  },
  {
    question: 'Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?',
  },
  {
    question: 'Magni reprehenderit possimus debitis?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto. Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.',
  },
];

export default Faq;
