import React, { useState } from 'react';
import Footer from './Footer';

const categories = [
  "Social Media Audience Research",
  "Other Social Media Management",
  "Social Content Management",
  "Posting & Engagement",
  "Social Media Management Analytics & Tracking",
  "Profile Setup & Integration",
];

const filters = ["Project Attributes", "Price", "Delivery Time", "Talent Details"];

const projects = [
  {
    title: "Twitter Marketing And Twitter Followers",
    seller: "Shouayb I.",
    rating: 5.0,
    reviews: 2593,
    price: "From $40",
    image: "/src/assets/Twitter.png",
    delivery: "1 day delivery",
  },
  {
    title: "Me as your social media manager and personal assistant",
    seller: "Delwar H.",
    rating: 4.8,
    reviews: 2564,
    price: "From $30",
    image: "/src/assets/Me.jpeg",
    delivery: "5 day delivery",
  },
  {
    title: "Increase Twitter Followers: Proven Methods to Grow Your Audience",
    seller: "Md A.",
    rating: 5.0,
    reviews: 1185,
    price: "From $40",
    image: "/src/assets/Increase Twitter.jpeg",
    delivery: "7 day delivery",
  },
  {
    title: "Organic Tiktok Followers, Likes, Views | TikTok Marketing",
    seller: "Nazim U.",
    rating: 4.8,
    reviews: 1371,
    price: "From $40",
    image: "/src/assets/Organic.jpeg",
    delivery: "5 day delivery",
  },
  {
    title: "TikTok Marketing Expert to Grow Your TikTok Organically",
    seller: "Kamal S.",
    rating: 4.8,
    reviews: 1203,
    price: "From $35",
    image: "/src/assets/TikTok.jpeg",
    delivery: "3 day delivery",
  },
  {
    title: "Increase Twitter Followers: Proven Methods to Grow Your Audience",
    seller: "Md A.",
    rating: 5.0,
    reviews: 1185,
    price: "From $40",
    image: "/src/assets/Increase Twitter.jpeg",
    delivery: "7 day delivery",
  },
  {
    title: "Twitter Marketing And Twitter Followers",
    seller: "Shouayb I.",
    rating: 5.0,
    reviews: 2593,
    price: "From $40",
    image: "/src/assets/Twitter.png",
    delivery: "1 day delivery",
  },
];

const faqs = [
  {
    question: "What services do social media managers offer?",
    answer:
      "Social media managers offer a wide range of digital marketing services, including social media content creation, hashtag strategy, LinkedIn, Facebook, and Instagram strategies; SEO; and influencer marketing strategy.",
  },
  {
    question: "How much does social media management cost?",
    answer:
      "Social media marketing pricing can vary heavily depending on the type of service. For example, all-in social media management includes social listening for brand awareness, an in-depth content calendar, paid LinkedIn and Facebook campaigns, and more.",
  },
  {
    question: "What is the role of a social media manager?",
    answer:
      "A social media manager is in charge of monitoring all aspects of a business’s social media presence. This includes writing social media posts for all social media accounts, researching and engaging with the target audience, and managing ad campaigns.",
  },
  {
    question: "How do I become a social media manager?",
    answer:
      "Social media managers have an in-depth understanding of content marketing, search engine optimization, various social media channels, and social media marketing strategy. Many social media managers take courses online to upskill.",
  },
  {
    question: "What skills does a social media manager need?",
    answer:
      "A social media manager needs a robust understanding of the algorithms of various social networks, strong instincts for engaging images and copy, great time management and organizational skills, and a familiarity with popular trends and analytics tools.",
  },
];

const platforms = [
  "Instagram", "Facebook", "YouTube", "LinkedIn", "Twitter", "Pinterest",
  "TikTok", "Reddit", "Discord", "Snapchat", "Product Hunt", "Tumblr",
  "Twitch", "WeChat", "WhatsApp", "Clubhouse", "Other"
];

const SocialMediaManagement = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  return (
    <div className="px-6 md:px-20 py-10 bg-white font-sans text-gray-800">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Social Media Management</h1>
        <p className="text-gray-600">
          Too busy? Let a social media management expert handle your accounts for you.{' '}
          <a href="#" className="text-green-600 underline">How it works</a>
        </p>
      </header>

      <section className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <button key={i} className="border rounded-lg p-3 text-sm hover:bg-green-50">
            {cat}
            <span className="block text-green-600 text-xs mt-1">Show all</span>
          </button>
        ))}
      </section>

      <div className="flex flex-wrap gap-4 mb-6">
        {filters.map((filter) => (
          <button key={filter} className="border text-sm px-3 py-1 rounded hover:bg-gray-100">
            {filter}
          </button>
        ))}
      </div>

      <p className="text-gray-500 text-sm mb-6">31,218 social media management projects available</p>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {projects.map((proj, i) => (
          <div key={i} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 bg-white">
            <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-sm leading-snug hover:text-green-600 transition-colors">{proj.title}</h3>
              <p className="text-xs text-gray-600">{proj.delivery}</p>
              <p className="text-sm text-yellow-500">⭐ {proj.rating} ({proj.reviews})</p>
              <p className="text-sm font-medium">{proj.price}</p>
            </div>
          </div>
        ))}
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">Social Media Management FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <h3 className="font-medium text-sm mb-1 cursor-pointer" onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}>
              {faq.question}
            </h3>
            <p className="text-sm text-gray-600">
              {expandedFAQ === index ? faq.answer : faq.answer.substring(0, 120) + '...'}
            </p>
            <button
              onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              className="text-green-600 text-sm mt-1"
            >
              {expandedFAQ === index ? "Read less ▲" : "Read more ▼"}
            </button>
          </div>
        ))}
      </section>

      {/* Browse Section */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-2">Browse popular searches</h2>
        <h3 className="text-md font-medium mt-4 mb-2">Browse Social Media Management Services</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-sm text-gray-700">
          {platforms.map((platform, i) => (
            <span key={i} className="hover:underline cursor-pointer">{platform}</span>
          ))}
        </div>
      </section>
    <Footer />
    </div>
  );
};

export default SocialMediaManagement;