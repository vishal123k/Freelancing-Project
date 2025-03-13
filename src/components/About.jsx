import React, { useState } from "react";
import { Pencil } from "lucide-react";

const About = () => {
  const [profile, setProfile] = useState({
    name: "Your Name",
    bio: "Web Developer | React Enthusiast",
    address: "123 Street, City, Country",
    contact: "+91 9876543210",
    skills: "React, JavaScript, CSS",
    experience: "2+ years in frontend development",
  });

  const [editField, setEditField] = useState(null);

  const handleChange = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="absolute w-full bg-black text-white py-6 left-10 flex flex-col">
      <div className="mt-12 w-3/4 px-12 space-y-6">
        {/* Name Section */}
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            {editField === "name" ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => setEditField(null)}
                autoFocus
                className="bg-transparent border-b-2 border-gray-500 focus:outline-none text-white text-3xl"
              />
            ) : (
              <span className="cursor-pointer flex items-center gap-2">
                {profile.name}
                <Pencil
                  className="w-5 h-5 cursor-pointer text-gray-400"
                  onClick={() => setEditField("name")}
                />
              </span>
            )}
          </h2>
        </div>

        {/* Bio Section */}
        <div>
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="mt-1 flex items-center gap-2">
            {editField === "bio" ? (
              <input
                type="text"
                value={profile.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
                onBlur={() => setEditField(null)}
                autoFocus
                className="bg-transparent border-b-2 border-gray-500 focus:outline-none text-white"
              />
            ) : (
              <span className="cursor-pointer flex items-center gap-2">
                {profile.bio}
                <Pencil
                  className="w-4 h-4 cursor-pointer text-gray-400"
                  onClick={() => setEditField("bio")}
                />
              </span>
            )}
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <p className="mt-1 flex items-center gap-2">
            {editField === "contact" ? (
              <input
                type="text"
                value={profile.contact}
                onChange={(e) => handleChange("contact", e.target.value)}
                onBlur={() => setEditField(null)}
                autoFocus
                className="bg-transparent border-b-2 border-gray-500 focus:outline-none text-white"
              />
            ) : (
              <span className="cursor-pointer flex items-center gap-2">
                {profile.contact}
                <Pencil
                  className="w-4 h-4 cursor-pointer text-gray-400"
                  onClick={() => setEditField("contact")}
                />
              </span>
            )}
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="mt-1 flex items-center gap-2">
            {editField === "address" ? (
              <input
                type="text"
                value={profile.address}
                onChange={(e) => handleChange("address", e.target.value)}
                onBlur={() => setEditField(null)}
                autoFocus
                className="bg-transparent border-b-2 border-gray-500 focus:outline-none text-white"
              />
            ) : (
              <span className="cursor-pointer flex items-center gap-2">
                {profile.address}
                <Pencil
                  className="w-4 h-4 cursor-pointer text-gray-400"
                  onClick={() => setEditField("address")}
                />
              </span>
            )}
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-lg font-semibold">Skills</h3>
          <p className="mt-1 flex items-center gap-2">
            {editField === "skills" ? (
              <input
                type="text"
                value={profile.skills}
                onChange={(e) => handleChange("skills", e.target.value)}
                onBlur={() => setEditField(null)}
                autoFocus
                className="bg-transparent border-b-2 border-gray-500 focus:outline-none text-white"
              />
            ) : (
              <span className="cursor-pointer flex items-center gap-2">
                {profile.skills}
                <Pencil
                  className="w-4 h-4 cursor-pointer text-gray-400"
                  onClick={() => setEditField("skills")}
                />
              </span>
            )}
          </p>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-lg font-semibold">Experience</h3>
          <p className="mt-1 flex items-center gap-2">
            {editField === "experience" ? (
              <input
                type="text"
                value={profile.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
                onBlur={() => setEditField(null)}
                autoFocus
                className="bg-transparent border-b-2 border-gray-500 focus:outline-none text-white"
              />
            ) : (
              <span className="cursor-pointer flex items-center gap-2">
                {profile.experience}
                <Pencil
                  className="w-4 h-4 cursor-pointer text-gray-400"
                  onClick={() => setEditField("experience")}
                />
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
