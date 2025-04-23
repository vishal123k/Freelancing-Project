import React from 'react';
import Footer from './Footer';

const HomePage = () => {
  const categories = [
    { title: 'Development and IT', jobs: '20K+', icon: '💻' },
    { title: 'Sales & Marketing', jobs: '10K+', icon: '📊' },
    { title: 'Design & Creative', jobs: '15K+', icon: '🎨' },
    { title: 'Writing & Translation', jobs: '20K+', icon: '✍️' },
    { title: 'Admin & Customer Support', jobs: '10K+', icon: '📞' },
    { title: 'Finance & Accounting', jobs: '15K+', icon: '📈' },
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-green-50 to-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Post a job today, hire tomorrow
            </h1>
            <p className="text-lg text-gray-600">
              Connect with talent that gets you, and hire them to take your business to the next level.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
              Get started
            </button>
            <div className="flex items-center gap-4 pt-6 flex-wrap">
              {[
                "microsoft.com",
                "airbnb.com",
                "automattic.com",
                "bissell.com",
                "cloudflare.com",
              ].map((domain, index) => (
                <img
                  key={index}
                  src={`https://logo.clearbit.com/${domain}`}
                  alt={domain}
                  className="h-6 grayscale hover:grayscale-0 transition"
                />
              ))}
            </div>
          </div>
          <img
            src="/src/assets/tablet.jpeg"
            alt="Tablet preview"
            className="rounded-2xl shadow-lg w-full max-w-sm"
          />
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The best colleagues you’ve never met
          </h2>
          <p className="text-gray-600">
            Logo designers. App developers. Customer support gurus. Marketing agencies.
          </p>
        </div>

        <div className="flex justify-center gap-10 text-center mb-14 flex-wrap">
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-yellow-500">4.9 ⭐</p>
            <p className="text-sm text-gray-600">Average rating from 2M+ reviews</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-green-600">8K+</p>
            <p className="text-sm text-gray-600">Skills represented on Upwork</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gray-100 p-6 rounded-xl border shadow-sm transition text-center space-y-2"
            >
              <div className="text-4xl">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{cat.title}</h3>
              <p className="text-sm text-gray-500">{cat.jobs} jobs posted weekly</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
