import React from "react";
import Footer from "./Footer";

const filters = ["Project Attributes", "Price", "Delivery Time", "Talent Details"];

const articles = [
  {
    title: "A Unique & IMPRESSIVE Quality Article/Blog/Content",
    delivery: "1 day delivery",
    price: "From $25",
    name: "Nauman A.",
    rating: "4.9",
    reviews: "2735",
    badge: "Top Rated",
    image: "/src/assets/A.jpeg"
  },
  {
    title: "A high quality article 100% Unique | Engaging content",
    delivery: "1 day delivery",
    price: "From $25",
    name: "Abhishek K.",
    rating: "4.9",
    reviews: "1247",
    badge: "Top Rated",
    image: "/src/assets/A high.jpeg"
  },
  {
    title: "Content writer to write a blog | SEO Article Writer",
    delivery: "1 day delivery",
    price: "From $20",
    name: "Kamal S.",
    rating: "4.8",
    reviews: "1203",
    badge: "",
    image: "/src/assets/Content.jpeg"
  },
  {
    title: "An insightful, industry-specific LinkedIn article",
    delivery: "1 day delivery",
    price: "From $20",
    name: "Iftikhar A.",
    rating: "4.9",
    reviews: "1139",
    badge: "Top Rated Plus",
    image: "/src/assets/An.jpeg"
  },
  {
    title: "Well-researched blogs and articles that drive traffic",
    delivery: "1 day delivery",
    price: "From $25",
    name: "Sana N.",
    rating: "4.6",
    reviews: "910",
    badge: "",
    image: "/src/assets/Well.jpeg"
  },
  {
    title: "An engaging 500, 1000 words 100% unique article",
    delivery: "1 day delivery",
    price: "From $20",
    name: "Jawed I.",
    rating: "4.9",
    reviews: "765",
    badge: "Top Rated",
    image: "/src/assets/An engaging.png"
  },
  {
    title: "SEO Article/Blog/Content Writing/Writer",
    delivery: "1 day delivery",
    price: "From $20",
    name: "Rabia B.",
    rating: "4.8",
    reviews: "672",
    badge: "",
    image: "/src/assets/SEO.jpeg"
  },
  {
    title: "SEO-friendly content writing that boosts conversions",
    delivery: "1 day delivery",
    price: "From $20",
    name: "Marissa B.",
    rating: "4.8",
    reviews: "564",
    badge: "",
    image: "/src/assets/SEO-friendly.png"
  },
];

const ArticlesPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto font-sans space-y-10">
      {/* Page Header */}
      <section>
        <h1 className="text-2xl font-bold mb-1 text-white">Articles & Blog Posts</h1>
        <p className="text-gray-600 text-white">
          Get engaging articles and blogs that give your customers valuable insights and advice.{" "}
          <span className="text-green-600 underline cursor-pointer text-white">How it works</span>
        </p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-4 text-sm">
        {filters.map((filter, idx) => (
          <button key={idx} className="px-4 py-2 bg-gray-50 border rounded hover:bg-gray-100">
            {filter} <span className="text-gray-400">▾</span>
          </button>
        ))}
      </section>

      {/* Best Style Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Best Style for Your Content</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/src/assets/A.jpeg"
            alt="Best Article"
            className="w-full md:w-1/3 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">Unique & High-Quality Article</h3>
            <p className="text-gray-700 mb-3">
              Perfect for blogs, websites, and SEO, this writing style ensures engaging, 100% original content tailored to your niche. Backed by excellent reviews and fast delivery.
            </p>
            <p className="text-sm text-gray-600">Top Rated • 1 day delivery • From $25</p>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section>
        <p className="text-gray-600 mb-4 text-white">30,322 articles & blog posts projects available</p>
        <h2 className="text-md font-semibold mb-4 text-white">Top projects you may like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, idx) => (
            <div key={idx} className="border rounded-lg p-4 shadow bg-white">
              <img src={article.image} alt={article.title} className="rounded w-full h-32 object-cover mb-3" />
              <h3 className="text-sm font-semibold mb-1">{article.title}</h3>
              <p className="text-xs text-gray-500 mb-1">{article.delivery}</p>
              <p className="text-sm text-gray-900 mb-2">{article.price}</p>
              <div className="text-sm text-gray-700">
                {article.name} • ⭐ {article.rating} ({article.reviews})
              </div>
              {article.badge && (
                <span className="inline-block mt-1 text-xs text-white bg-green-500 px-2 py-1 rounded">
                  {article.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticlesPage;
