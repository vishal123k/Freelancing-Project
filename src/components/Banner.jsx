import React, { useState, useRef, useEffect } from "react";
import { Pencil } from "lucide-react";

const Banner = () => {
  const [bannerImage, setBannerImage] = useState("/placeholder.svg?height=200&width=800");
  const bannerInputRef = useRef(null);

  // Function to Convert Image to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Banner Upload Handler
  const handleBannerUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64Image = await convertToBase64(file);
      setBannerImage(base64Image);
      localStorage.setItem("Banner", base64Image);
    }
  };

  // Load Image from LocalStorage on Mount
  useEffect(() => {
    const imageFromLocalStorage = localStorage.getItem("Banner");
    if (imageFromLocalStorage) {
      setBannerImage(imageFromLocalStorage);
    }
  }, []);

  return (
    <div className="absolute rounded-lg top-20 left-0 w-full h-48 md:h-64">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />

      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-700/40"></div>

      <button
        className="absolute top-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-2 rounded-full transition duration-200"
        onClick={() => bannerInputRef.current?.click()}
      >
        <Pencil className="h-5 w-5" />
      </button>

      <input
        type="file"
        ref={bannerInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleBannerUpload}
      />
    </div>
  );
};

export default Banner;
