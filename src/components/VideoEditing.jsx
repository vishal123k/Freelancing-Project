import React from 'react';
import { FaStar } from 'react-icons/fa';
import Footer from "./Footer"

const popularVideoTypes = [
  { title: 'Travel Video', image: '/src/assets/Travel Video.jpeg' },
  { title: 'Gaming Video', image: '/src/assets/Gaming Video.jpeg' },
  { title: 'Explainer Video', image: '/src/assets/Explainer Video.jpeg' },
  { title: 'Corporate Video', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSQrqOWUm4c99VnIipyksDFGqe1qRcQMncg&s', editors: '300+ video editors' },
  { title: 'Music Video', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNvK-WH-VObZfL6EM42rqWFiGmRy-ccosog&s', editors: '300+ video editors' },
  { title: 'Wedding & Event Video', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAIIIshRt_--cMWKba6cXjVNtMWdv3LgTH-w&s', editors: '300+ video editors' },
];

const videoProjects = [
  {
    title: 'Creative professional youtube video editing',
    image: '/src/assets/Creative professional youtube video editing.jpeg',
    name: 'Delwar H.',
    rating: '4.8 (2653)',
    delivery: '2 day delivery',
    price: 'From $25',
    badge: 'Upwork Picks'
  },
  {
    title: 'Top Video Editor, YouTube Editor, Tiktok Social Media Reels',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEx29GMXEEzd7Eu93kgupq7Mow7PST4oo2QA&s',
    name: 'Jawad S.',
    rating: '4.9 (1079)',
    delivery: '1 day delivery',
    price: 'From $30',
    badge: 'Upwork Picks'
  },
  {
    title: 'A Professional Video Editor for Your YouTube Channel',
    image: '/src/assets/A Professional Video Editor for Your YouTube Channel.jpeg',
    name: 'Md G.',
    rating: '4.8 (637)',
    delivery: '1 day delivery',
    price: 'From $25',
    badge: 'Upwork Picks'
  },
  {
    title: 'Professional Cashcow Youtube Channel Videos',
    image: '/src/assets/Professional Cashcow Youtube Channel Videos.jpeg',
    name: 'Hamza S.',
    rating: '4.9 (647)',
    delivery: '2 day delivery',
    price: 'From $25',
    badge: 'Upwork Picks'
  },
];

const socialMediaProjects = [
  {
    title: 'Top Video Editor, YouTube Editor, Tiktok, Social Media Reels, Video...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAirenA78EiVWVc__omzChmEQvvfLIfJbCAQ&s',
    name: 'Jawad S.',
    rating: '4.9 (1079)',
    delivery: '1 day delivery',
    price: 'From $30',
    badge: 'Top Rated Plus'
  },
  {
    title: 'Professional Video Editor, YouTube Editor, TikTok, Viral Social Media...',
    image: '/src/assets/Professional Video Editor, YouTube Editor, TikTok, Viral Social Media.jpeg',
    name: 'Ather J.',
    rating: '4.9 (458)',
    delivery: '1 day delivery',
    price: 'From $25',
    badge: 'Top Rated Plus'
  },
  {
    title: 'Social Media Reels, instagram reels, video editing, youtube shorts...',
    image: '/src/assets/Social Media Reels, instagram reels, video editing, youtube shorts.jpeg',
    name: 'Raju A.',
    rating: '4.9 (335)',
    delivery: '5 day delivery',
    price: 'From $25',
    badge: ''
  },
  {
    title: 'A Video Edited for Your Social Media Channels',
    image: '/src/assets/A Video Edited for Your Social Media Channels.jpeg',
    name: 'Waheed A.',
    rating: '4.9 (127)',
    delivery: '2 day delivery',
    price: 'From $25',
    badge: 'Top Rated'
  },
];

const VideoCard = ({ project }) => (
  <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
    <div className="relative">
      <img src={project.image} alt={project.title} className="w-full h-44 object-cover" />
      {project.badge && (
        <span className="absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
          {project.badge}
        </span>
      )}
    </div>
    <div className="p-4 space-y-2">
      <h3 className="text-base font-semibold text-gray-900 line-clamp-2">{project.title}</h3>
      <p className="text-sm text-gray-600">
        {project.delivery} • <span className="font-medium text-gray-800">{project.price}</span>
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-800">{project.name}</span>
        <span className="flex items-center text-yellow-500 text-sm">
          <FaStar className="mr-1" /> {project.rating}
        </span>
      </div>
    </div>
  </div>
);

const VideoEditingPage = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-gray-50 to-white font-sans">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Video Editing</h1>
      <p className="text-gray-600 mb-8 text-lg">
        Professional video editing services, from raw footage to post-production work.{' '}
        <a href="#" className="text-green-600 hover:underline">How it works <span role="img" aria-label="info">🛈</span></a>
      </p>

      {/* Popular Video Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Popular video types</h2>
        <p className="text-sm text-gray-600 mb-5">Find a video editor who's ready to make your project perfect</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {popularVideoTypes.map((type, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg transition">
              <img src={type.image} alt={type.title} className="w-full h-24 object-cover rounded mb-2" />
              <h3 className="text-md font-semibold text-gray-800">{type.title}</h3>
              <p className="text-sm text-gray-500">{type.editors}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Projects */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Top projects you may like</h2>
          <a href="#" className="text-green-600 hover:underline text-sm">View All Projects →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoProjects.map((proj, idx) => (
            <VideoCard key={idx} project={proj} />
          ))}
        </div>
      </section>

      {/* Social Media Editing */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-white">Editing for ads and social media</h2>
          <a href="#" className="text-green-600 hover:underline text-sm">View All Projects →</a>
        </div>
        <p className="text-sm text-gray-600 mb-5 text-white">Work with a pro to tailor your videos for your target audience</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialMediaProjects.map((proj, idx) => (
            <VideoCard key={idx} project={proj} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VideoEditingPage;