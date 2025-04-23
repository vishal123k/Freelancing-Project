import React from 'react';
import Footer from './Footer';

const experts = [
  {
    name: "Rupak B.",
    title: "Logo & Branding Expert | Custom Logo Designer | Graphic Designer",
    location: "India",
    rate: "$25 per 30 min",
    rating: 4.8,
    reviews: 1654,
    tags: ["Brand Style Guides", "Illustration", "Logo Design", "Stationery Design", "Web Design"],
  },
  {
    name: "Mian Muhammad Usman P.",
    title: "Top CMS Developer | Logo & Branding Expert | WordPress | Shopify | Wix",
    location: "Pakistan",
    rate: "$50 per 30 min",
    rating: 5.0,
    reviews: 976,
    tags: ["Cartoons & Comics", "Mobile App Design", "Photoshop Editing", "Podcast Cover Art", "Social Media Design"],
  },
  {
    name: "Jawad S.",
    title: "WordPress & IT Expert | Video Editing | 3D | Logos | Resume Writing",
    location: "Pakistan",
    rate: "$99 per 30 min",
    rating: 4.9,
    reviews: 1079,
    tags: ["Cover Letter Writing", "Creative Writing", "LinkedIn Profile Writing", "Proofreading & Editing", "Technical Writing"],
  },
  {
    name: "Tanveer A.",
    title: "Logo | Brand Guideline | Identity Kit | PPT Templates | Website",
    location: "Pakistan",
    rate: "$25 per 30 min",
    rating: 4.9,
    reviews: 977,
    tags: ["Brand Style Guides", "Brand Voice & Tone", "Brochure Design", "Logo Design", "Presentation Design"],
  },
];

const categories = [
  "Development & IT",
  "Marketing",
  "Video & Audio",
  "Design",
  "Accounting, Business & Legal",
  "Writing & Translation",
  "Lifestyle",
];

const ConsultationPage = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-white text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Book a consultation with an expert</h1>
        <p className="text-lg text-gray-600 mb-6">
          Talk through a problem, get your questions answered, and move your project forward with 1-on-1 advice from a pro.
        </p>
        <input
          type="text"
          placeholder='Try "AI consultation" or "Social media marketing"'
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 mb-4"
        />
        <div className="flex flex-wrap gap-2 mb-6">
          {["Web Programming", "Machine Learning", "WordPress", "Marketing"].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-green-100 cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Consultation categories</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="text-green-600 font-semibold">All categories</li>
            {categories.map((cat) => (
              <li key={cat} className="hover:text-green-600 cursor-pointer transition">{cat}</li>
            ))}
          </ul>
        </aside>

        {/* Expert List */}
        <main className="flex-1 space-y-6">
          {experts.map((expert, i) => (
            <div key={i} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900">{expert.name}</h4>
                  <p className="text-gray-700 mb-1">{expert.title}</p>
                  <p className="text-sm text-gray-500">{expert.location} • {expert.rate}</p>
                  <p className="text-sm text-yellow-500 mt-1">⭐ {expert.rating} ({expert.reviews} reviews)</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {expert.tags.map((tag) => (
                      <span key={tag} className="text-sm bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition">
                  Choose a time
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* How it works Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">How it works</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {[
              {
                title: "Find a pro",
                desc: "Check out what topics they can discuss, read reviews from other clients, and see when they’re available.",
              },
              {
                title: "Choose when to meet",
                desc: "Request to meet now if the consultant is available. Or, schedule a consultation for a later time.",
              },
              {
                title: "Get 1-on-1 advice",
                desc: "Join the consultant on Zoom to get help with any issues you’re facing, clarify things you’re unsure about, and lay out a plan for success.",
              },
              {
                title: "Plan your next steps",
                desc: "Start a new contract to keep working together. Or, search for another expert who can help you with your project.",
              },
            ].map((step, i) => (
              <div key={i}>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white border shadow p-6 rounded-lg mb-6 w-full max-w-sm text-center">
              <h4 className="font-semibold text-lg mb-2">Consultation with Zoe S.</h4>
              <a href="#" className="text-blue-600 text-sm underline mb-3 block">Next consultation time: Now</a>
              <div className="flex flex-wrap gap-2 justify-center">
                {["AI & Machine learning", "E-commerce", "Digital Marketing", "Dev & IT"].map((t, idx) => (
                  <span key={idx} className="bg-gray-100 text-sm px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <img
              src="/src/assets/login.png"
              alt="Consultation"
              className="rounded-lg w-full max-w-sm object-cover shadow"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition">
            View more consultants
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 mt-20 p-10 rounded-xl text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Want to offer consultations?</h3>
        <p className="text-gray-600 mb-4">Share your expertise and build a network of clients with consultations.</p>
        <button className="border border-green-600 text-green-600 px-6 py-2 rounded-md font-medium hover:bg-green-50 transition">
          How to set up a consultation →
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultationPage;
