import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is a WordPress developer?',
    answer: 'A WordPress developer is a website programmer who is an expert regarding the WordPress development platform...',
  },
  {
    question: 'How do you choose the right WordPress development service?',
    answer: 'Selecting the right WordPress development resource involves reviewing your specific website criteria...',
  },
  {
    question: 'Why is WordPress so popular?',
    answer: 'WordPress is a wildly popular web development platform, accounting for 60% of content management system (CMS) websites...',
  },
  {
    question: 'How much does it cost to develop a WordPress website?',
    answer: 'The cost to develop a WordPress site can vary significantly. The simplest WordPress sites can cost as little as $500...',
  },
];

const WordPressFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-white">WordPress FAQs</h2>
      <div className="bg-gray-100 rounded-lg p-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <h3
              className="text-lg font-semibold cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </h3>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
            <p
              className="text-green-600 cursor-pointer text-sm mt-1"
              onClick={() => toggleFAQ(index)}
            >
              {expandedIndex === index ? 'Read less ▲' : 'Read more ▼'}
            </p>
          </div>
        ))}
        <div className="text-center mt-6">
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-50">
            Load More
          </button>
        </div>
      </div>
      <h3 className="text-xl mt-8 font-semibold text-white">Browse popular searches</h3>
    </div>
  );
};

export default WordPressFAQ;