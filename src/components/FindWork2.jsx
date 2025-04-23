import React from "react";
import Footer from "./Footer";

const jobCategories = [
  "Any type of work",
  "Development & IT",
  "Design & Creative",
  "Finance & Accounting",
  "Admin & Customer Support",
  "Engineering & Architecture",
  "Legal",
  "Sales & Marketing",
  "Writing & Translation",
];

const jobs = {
  "0-9": [
    "3D Visualizations Freelancer",
    "2D Game Art Freelancer",
    "3D Modeler",
    "3D Printing Expert",
    "3D Rendering Artist",
    "3D CAD Design Freelancer",
    "3D Designers & Artist",
  ],
  A: [
    "Amazon FBA Specialist",
    "Amazon Seller Central Consultant",
    "Administrative Assistant",
    "Arts Freelancer",
    "Adobe After Effects Specialist",
    "Adobe InDesign Expert",
    "Anime Freelancer",
    "Adobe Premiere Pro Specialist",
    "Animator",
    "Album Cover Designer",
    "Actor",
    "Adobe Illustrator Expert",
    "Adobe Acrobat Expert",
    "Adobe Photoshop Expert",
    "Adobe Photoshop Lightroom Specialist",
    "Audio Production Specialist",
    "Acrylic Painter",
    "Audio Editor",
    "Ad Creative Freelancer",
    "Audio Mixer",
    
  ],
};

const JobBrowserPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-10 font-sans ">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Find the best freelance jobs</h1>
      <p className="text-gray-600 mb-4">
        Browse jobs posted on Upwork, or jump right in and create a free profile to find the work that you love to do.
      </p>
      <div className="flex gap-4 mb-6">
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">Find work</button>
        <button className="text-green-600 hover:underline font-medium">Watch a demo</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Type of work</h2>
          <div className="space-y-2">
            {jobCategories.map((cat, idx) => (
              <div key={idx} className="flex items-center">
                <input type="radio" name="jobType" defaultChecked={idx === 0} className="mr-2" />
                <label className="text-gray-700">{cat}</label>
              </div>
            ))}
          </div>
        </aside>

        {/* Job Listings */}
        <main className="w-full lg:w-3/4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Explore remote jobs</h2>
          <input
            type="text"
            placeholder='Try skills like "PHP" or "JavaScript"'
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6"
          />

          {Object.entries(jobs).map(([letter, jobList]) => (
            <div key={letter} className="mb-8">
              <h3 className="text-md font-bold text-gray-700 mb-3">{letter}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {jobList.map((job, i) => (
                  <div key={i} className="text-sm text-gray-800 hover:underline cursor-pointer">
                    {job}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default JobBrowserPage;
