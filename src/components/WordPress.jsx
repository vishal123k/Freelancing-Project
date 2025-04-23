import React from "react";
import Footer2 from "./Footer2";
import Footer from "./Footer";

const categories = [
  "WordPress Installation & Theme Setup",
  "WordPress Bug Fixes",
  "WordPress Backup, Cloning & Migration",
  "Full WordPress Website Creation",
  "Other WordPress",
  "WordPress Customization"
];

const filters = ["Project Attributes", "Price", "Delivery Time", "Talent Details"];

const projects = [
  {
    title: "WordPress Website Design | WordPress Developer",
    delivery: "3 day delivery",
    price: "From $100",
    name: "Writi D.",
    rating: "4.9",
    reviews: "4334",
    badge: "Top Rated",
    image: "/src/assets/WordPress Website.jpeg"
  },
  {
    title: "Elementor | Elementor Pro | Elementor Expert",
    delivery: "3 day delivery",
    price: "From $95",
    name: "Mian M.",
    rating: "5.0",
    reviews: "578",
    badge: "Top Rated",
    image: "/src/assets/Elementor.jpeg"
  },
  {
    title: "WordPress Designer, Developer, WordPress Website",
    delivery: "2 day delivery",
    price: "From $85",
    name: "Jawed S.",
    rating: "4.9",
    reviews: "1079",
    badge: "Top Rated Plus",
    image: "/src/assets/WordPress Designer.jpeg"
  },
  {
    title: "Professional Responsive Portfolio Website in WordPress",
    delivery: "2 day delivery",
    price: "From $99",
    name: "Muhammad A.",
    rating: "4.9",
    reviews: "6529",
    badge: "Top Rated Plus",
    image: "/src/assets/Professional.jpeg"
  },
  {
    title: "WordPress Bug Fixes, Plugin Fixes, Theme Fixes",
    delivery: "2 day delivery",
    price: "From $59",
    name: "Kunal G.",
    rating: "4.8",
    reviews: "1384",
    badge: "",
    image: "/src/assets/WordPress Bug.png"
  },
  {
    title: "WordPress DIVI Design & Development",
    delivery: "2 day delivery",
    price: "From $99",
    name: "Hunair A.",
    rating: "4.9",
    reviews: "524",
    badge: "Top Rated Plus",
    image: "/src/assets/WordPress DIVI.jpeg"
  },
  {
    title: "WordPress Website Design | WordPress expert",
    delivery: "3 day delivery",
    price: "From $95",
    name: "Anurag P.",
    rating: "4.8",
    reviews: "686",
    badge: "Top Rated",
    image: "/src/assets/WordPress1.jpeg"
  },
  {
    title: "WordPress Website | Developer | WordPress Expert",
    delivery: "2 day delivery",
    price: "From $99",
    name: "Muhammad K.",
    rating: "4.9",
    reviews: "6827",
    badge: "Top Rated Plus",
    image: "/src/assets/WordPress Websites.jpeg"
  },
];

const WordPressPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto font-sans space-y-10">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-white">WordPress Services</h1>
        <p className="text-gray-600 text-white">
          These WordPress development pros can design and develop sites that boost your brand and business returns.{" "}
          <span className="text-green-600 underline cursor-pointer">How it works</span>
        </p>
      </section>

      {/* Categories */}
      <section className="flex overflow-x-auto gap-4 pb-2">
        {categories.map((cat, idx) => (
          <button key={idx} className="whitespace-nowrap px-4 py-2 bg-white border rounded-full shadow-sm text-sm hover:bg-gray-50">
            {cat} <span className="text-gray-400">›</span>
          </button>
        ))}
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-4 text-sm">
        {filters.map((filter, idx) => (
          <button key={idx} className="px-4 py-2 bg-white border rounded hover:bg-gray-50">
            {filter} <span className="text-gray-400">▾</span>
          </button>
        ))}
      </section>

      {/* Best Pick Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">🔥 Best Pick for You</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src="/src/assets/Professional.jpeg" alt="Best WordPress Project" className="w-full md:w-1/3 rounded-lg object-cover" />
          <div>
            <h3 className="text-lg font-bold mb-2">Professional Responsive Portfolio Website</h3>
            <p className="text-gray-700 mb-2">
              Get a sleek and responsive WordPress site built to impress. Ideal for personal brands, portfolios, or small businesses. Developed by a Top Rated Plus expert.
            </p>
            <p className="text-sm text-gray-600">Top Rated Plus • 2 day delivery • From $99</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <p className="text-gray-600 mb-2 text-white">60,809 WordPress projects available</p>
        <h2 className="text-md font-semibold mb-4 text-gray-800 text-white">Top projects you may like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="border rounded-lg p-4 shadow bg-white hover:shadow-md transition-shadow duration-200">
              <img src={project.image} alt={project.title} className="rounded w-full h-32 object-cover mb-3" />
              <h3 className="text-sm font-semibold mb-1">{project.title}</h3>
              <p className="text-xs text-gray-500 mb-1">{project.delivery}</p>
              <p className="text-sm text-gray-900 mb-2">{project.price}</p>
              <div className="text-sm text-gray-700">
                {project.name} • ⭐ {project.rating} ({project.reviews})
              </div>
              {project.badge && (
                <span className="inline-block mt-1 text-xs text-white bg-green-500 px-2 py-1 rounded">
                  {project.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer2 />
      <Footer />
    </div>
  );
};

export default WordPressPage;
