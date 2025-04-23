import React from "react";
import { Button } from "./Button";
import Footer from "./Footer";

const WorkMarketplace = () => {
  const steps = [
    {
      title: "Create a profile",
      desc: "Highlight your skills and experience, show your portfolio, and set your ideal pay rate.",
      img: "/src/assets/Create a profile.jpeg",
    },
    {
      title: "Search for jobs",
      desc: "Search on Talent Marketplace™ for the hourly or fixed-price work you’re looking for.",
      img: "/src/assets/Search for jobs.jpeg",
    },
    {
      title: "Submit a proposal",
      desc: "Set your rate and tell clients why you’re the right person for the job!",
      img: "/src/assets/Submit a proposal.jpeg",
    },
    {
      title: "Get contract",
      desc: "If the client likes your proposal they’ll send you a contract to begin working.",
      img: "/src/assets/Get contract.jpeg",
    },
    {
      title: "Complete the work",
      desc: "Check steps off as you finish and work with your client if you have questions.",
      img: "/src/assets/Complete the work.jpeg",
    },
    {
      title: "Get paid securely",
      desc: "Once the client approves your work, you’ll get paid and they can leave feedback.",
      img: "/src/assets/Get paid securely.jpeg",
    },
  ];

  return (
    <div className="p-6 md:p-10 space-y-16 bg-gray-900 text-white font-sans">
      
      {/* Header Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Do the work you love, your way</h1>
        <p className="text-lg text-gray-300">
          Build rewarding relationships in the world’s Work Marketplace. Your home for the work you want.
        </p>
        <Button variant="primary" size="lg" className="shadow-md">Sign up</Button>

        <div className="flex justify-center items-center gap-6 mt-6 flex-wrap">
          {["download", "download1", "download2", "download3"].map((img, i) => (
            <img key={i} src={`/src/assets/${img}.png`} alt="Brand logo" className="h-6" />
          ))}
        </div>

        <div className="mt-10">
          <img src="/src/assets/woman.jpeg" alt="Woman using laptop" className="mx-auto rounded-2xl shadow-lg max-w-md" />
        </div>
      </section>

      {/* Explore Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Explore the different ways to earn</h2>
        <div className="flex justify-center mt-4 space-x-2">
          <Button variant="secondary" size="md" className="rounded-l-lg">Talent Marketplace</Button>
          <Button variant="outline" size="md" className="rounded-r-lg">Project Catalog</Button>
        </div>
      </section>

      {/* Steps Section */}
      <section>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4 bg-gray-800 p-6 rounded-xl hover:shadow-xl transition">
              <img src={step.img} alt={step.title} className="rounded-lg w-full h-44 object-cover" />
              <h3 className="text-xl font-semibold">{index + 1}. {step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkMarketplace;
