import React, { useState, useRef, useEffect } from "react";
import { Pencil } from "lucide-react";

const ProfileImage = () => {
  const [profileImage, setProfileImage] = useState("/placeholder-profile.png"); // Default image
  const profileInputRef = useRef(null);

  // Convert Image to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle Profile Image Upload
  const handleProfileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64Image = await convertToBase64(file);
      setProfileImage(base64Image);
      localStorage.setItem("ProfileImage", base64Image); // Save to local storage
    }
  };

  // Load Profile Image from LocalStorage
  useEffect(() => {
    const savedImage = localStorage.getItem("ProfileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  return (
    <div className="absolute w-52 h-52 left-5 rounded-full mx-auto z-20 -mt-40">
      <img
        src={profileImage}
        alt="Profile"
        className="w-full h-full rounded-full object-cover border-4 border-gray-300 shadow-lg"
      />

      <button
        className="absolute bottom-2 right-2 bg-white/80 p-2 rounded-full hover:bg-white transition"
        onClick={() => profileInputRef.current?.click()}
      >
        <Pencil className="h-5 w-5 text-gray-700" />
      </button>

      <input
        type="file"
        ref={profileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleProfileUpload}
      />
    </div>
  );
};

export default ProfileImage;
