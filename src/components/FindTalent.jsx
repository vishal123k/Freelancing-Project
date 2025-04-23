import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCatalogPage = () => {
  const navigate = useNavigate();

  const categories = [
    { title: 'Logo Design', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoXn_Km2EocV9G8KXQAf60H9BGuXyjq9o5g&s' },
    { title: 'Articles & Blog Posts', image: 'https://media.licdn.com/dms/image/v2/D4D12AQGZHh7IOsQHwQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679901454730?e=2147483647&v=beta&t=6opL2iG4cYVHFG-SSmAIsfIRR_T_vBCPemU48eyiB-E' },
    { title: 'WordPress', image: '/src/assets/WordPress.png' },
    { title: 'Social Media Management', image: '/src/assets/Social Media Management.jpeg' },
    { title: 'Video Editing', image: '/src/assets/Video Editing.jpeg' },
    { title: 'SEO', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBl0PVGB0twG6omkZYxEQB3ObtHdMQSlyV7g&s' },
  ];

  const handleClick = (title) => {
    if (title === 'Video Editing') {
      navigate('/videoediting');
    }
    if (title === 'Social Media Management') {
      navigate('/socalmedia');
    }
    if (title === 'WordPress') {
      navigate('/wordpress');
    }
    if (title === 'Articles & Blog Posts') {
      navigate('/Articals');
    }
    if (title === 'SEO') {
      navigate('/findtalent');
    }
    if (title === 'Logo Design') {
      navigate('/logo');
    }
    
  };

  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      <aside className="w-1/4 p-6 bg-white shadow-md border-r border-gray-200">
        <div className="mb-10 hover:bg-gray-100 p-4">
          <p className="text-lg font-semibold text-gray-800">Post a job and hire a pro</p>
          <a href="/postjob" className="text-green-600 hover:underline mt-1 inline-block">Talent Marketplace</a>
        </div>
        <div className="mb-10 hover:bg-gray-100 p-4 rounded-xl shadow-md">
          <p className="text-lg font-semibold text-gray-800">Browse and buy projects</p>
          <a href="" className="text-green-700 hover:underline mt-1 inline-block font-medium">Project Catalog</a>
        </div>
        <div className='hover:bg-gray-100 p-4'>
          <p className="text-lg font-semibold text-gray-800">Get advice from an industry expert</p>
          <a href="/getadvice" className="text-green-600 hover:underline mt-1 inline-block">Consultations</a>
        </div>
      </aside>

      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Project Catalog<span className="text-green-500 ml-1">™</span></h2>
        <p className="text-gray-600 text-base mb-4">Browse and buy projects that have a clear scope and price.</p>
        <a href="#" className="text-green-600 hover:underline font-medium text-sm mb-8 inline-block">Browse Project Catalog →</a>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="cursor-pointer bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1"
              onClick={() => handleClick(cat.title)}
            >
              <img src={cat.image} alt={cat.title} className="w-full h-40 object-cover" />
              <div className="p-4 text-center text-lg font-semibold text-gray-800">{cat.title}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
    
  );
};

export default ProjectCatalogPage;
