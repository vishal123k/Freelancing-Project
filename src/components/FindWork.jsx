import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";

const earnOptions = [
  {
    title: 'Ways to earn',
    description: 'Learn why Upwork has the right opportunities for you.',
    path: '/easytolearn'
  },
  {
    title: 'Find work for your skills',
    description: 'Explore the kind of work available in your field.',
    path: '/findworkforskill',
  },
  {
    title: 'Win work with ads',
    description: 'Get noticed by the right client.',
    path: '/winwork',
  },
  {
    title: 'Join Freelancer Plus',
    description:
      'Access more Connects, get strategic insights on competitors, and try out the latest tools.',
    path: '/jion',
  },
];

const WaysToEarn = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-white min-h-screen">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-12">Find Work</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {earnOptions.map((option, idx) => (
            <div
              key={idx}
              onClick={() => navigate(option.path)}
              className=" rounded-xl shadow hover:shadow-xl hover: bg-slate-50 hover:scale-105 transition-all duration-300 cursor-pointer p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WaysToEarn;
