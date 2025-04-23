import React from 'react';
import Footer2 from "./Footer2";
import Footer from "./Footer";

const logoStyles = [
  { name: 'Mascot', designers: '300+', image: '/src/assets/Mascot.jpeg' },
  { name: 'Freestyle', designers: '300+', image: '/src/assets/Freestyle.jpeg' },
  { name: '3D', designers: '300+', image: '/src/assets/3d.jpeg' },
  { name: 'Signature', designers: '300+', image: '/src/assets/Signature.jpeg' },
  { name: 'Hand-Drawn', designers: '300+', image: '/src/assets/Hand-Drawn.jpeg' },
  { name: 'Vintage', designers: '300+', image: '/src/assets/Vintage.jpeg' },
];

const projectCards = [
  {
    title: 'Modern Logo Design, Modern Logo with Multiple Concepts',
    price: 'From $25',
    delivery: '1 day delivery',
    rating: '5.0',
    reviews: '36681',
    designer: 'Pankaj S.',
    image: '/src/assets/Modern L.webp',
  },
  {
    title: 'Logo Logo Design, Logo Designer, Logo Design & Branding Expert',
    price: 'From $25',
    delivery: '3 day delivery',
    rating: '4.9',
    reviews: '4334',
    designer: 'Writi D.',
    image: '/src/assets/Logo.jpeg',
  },
  {
    title: 'Logo Design project, Minimalist Logo Design - TOP RATED LOGO...',
    price: 'From $25',
    delivery: '1 day delivery',
    rating: '4.9',
    reviews: '2737',
    designer: 'Nauman A.',
    image: '/src/assets/Logo Design.png',
  },
  {
    title: 'Custom Vector Logo Design and Unlimited Revisions',
    price: 'From $25',
    delivery: '1 day delivery',
    rating: '4.8',
    reviews: '1654',
    designer: 'Rupak B.',
    image: '/src/assets/Custo.jpeg',
  },
];

const industries = [
  'eCommerce', 'Small Business', 'Gaming',
  'Sports & Fitness', 'Food & Beverage', 'Real Estate',
];

const LogoPage = () => {
  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto font-sans space-y-12 text-gray-800">

      {/* Logo Styles */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-white">Other trending logo styles</h2>
        <p className="text-gray-600 mb-4 text-white">Choose a style that fits your brand</p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {logoStyles.map((style, index) => (
            <div
              key={index}
              className="min-w-[150px] bg-white shadow-sm border rounded-lg p-3 text-center flex-shrink-0"
            >
              <div className="h-24 w-full bg-gray-100 rounded mb-2 overflow-hidden">
                <img src={style.image} alt={style.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-medium">{style.name}</p>
              <p className="text-xs text-gray-500">{style.designers} designers</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects with Great Reviews */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-white">Projects with great reviews</h2>
          <a href="#" className="text-green-600 text-sm hover:underline text-white">All Great Reviews →</a>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectCards.map((project, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover rounded mb-3"
              />
              <h3 className="text-sm font-semibold mb-1 line-clamp-2">{project.title}</h3>
              <p className="text-xs text-gray-500">{project.delivery}</p>
              <p className="text-sm font-semibold text-gray-900 mt-1">{project.price}</p>
              <p className="text-sm text-gray-700 mt-2">
                {project.designer} • ⭐ {project.rating} ({project.reviews})
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Style Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-white">Best Style for Your Brand</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/src/assets/Mascot.jpeg"
            alt="Best Style - Mascot"
            className="w-full md:w-1/3 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Mascot Style</h3>
            <p className="text-gray-700 mb-3 text-white">
              Mascot logos are playful, engaging, and full of personality. They work well for brands that want to connect with audiences emotionally and stand out in a fun way.
            </p>
            <p className="text-sm text-gray-600">300+ designers specialize in this style</p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-white">In-demand industries</h2>
        <p className="text-gray-600 mb-4 text-white">Work with designers who know your industry</p>
        <div className="flex flex-wrap gap-3">
          {industries.map((industry, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition"
            >
              {industry}
            </button>
          ))}
        </div>
      </section>

      <Footer2 />
      <Footer />
    </div>
  );
};

export default LogoPage;
