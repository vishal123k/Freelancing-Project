import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    path: '/ads',
  },
  {
    title: 'Join Freelancer Plus',
    description:
      'Access more Connects, get strategic insights on competitors, and try out the latest tools.',
    path: '/freelancer-plus',
  },
];

const WaysToEarn = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-10 bg-white h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {earnOptions.map((option, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-md cursor-pointer transition hover:shadow-lg ${option.highlight ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => navigate(option.path)}  // This triggers the page navigation
          >
            <h3 className="text-md font-semibold text-gray-900 mb-1">
              {option.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaysToEarn;
