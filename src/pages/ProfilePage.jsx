import { useEffect, useState } from "react"
import Banner from "../components/Banner"
const roles = [
  "Video Editor", "Web Developer", "Graphic Designer",
  "UI/UX Designer", "Content Writer", "SEO Specialist",
  "Mobile App Developer", "Backend Developer", "Frontend Developer",
  "Data Analyst", "Digital Marketer", "Other"
]

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    customRole: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    bio: "",
    experience: "",
    image: null,
  })

  useEffect(() => {
    const savedData = localStorage.getItem("profileData")
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }))
    }
    if (file) reader.readAsDataURL(file)
  }

  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(formData))
    alert("Profile saved successfully!")
  }

  return (
    <>
    {/* <Banner/> */}
    <div className="container mx-auto mt-48 py-6 px-4 bg-white">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left - Profile Picture */}
        <div className="w-full lg:w-1/4 space-y-4">
          <h2 className="text-base font-medium text-gray-700">Profile Photo</h2>
          <div className="bg-gray-50 rounded border border-gray-200 p-3 relative">
            {formData.image ? (
              <div className="relative">
                <img
                  src={formData.image}
                  alt="Profile"
                  className="w-full aspect-square object-cover rounded"
                />
                <button
                  className="absolute top-2 right-2 bg-white border border-gray-300 text-gray-600 text-xs w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onClick={() => setFormData((prev) => ({ ...prev, image: null }))}
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="w-full aspect-square bg-gray-100 rounded flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>

          <button
            onClick={() => document.getElementById("profile-image").click()}
            className="w-full py-2 border border-gray-200 rounded text-sm text-gray-700 hover:bg-gray-50 transition"
          >
            Upload Photo
            <input id="profile-image" type="file" onChange={handleImageChange} className="hidden" accept="image/*" />
          </button>
        </div>

        {/* Right - Form Fields */}
        <div className="w-full space-y-6">
          <h2 className="text-base font-medium text-gray-700 mb-3">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full py-2 px-2 text-sm border border-gray-200 rounded text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full py-2 px-2 text-sm border border-gray-200 rounded text-gray-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full py-2 px-2 text-sm border border-gray-200 rounded text-gray-800 focus:outline-none bg-white"
              >
                <option value="">Select a role</option>
                {roles.map((r, i) => (
                  <option key={i} value={r}>{r}</option>
                ))}
              </select>
              {formData.role === "Other" && (
                <input
                  name="customRole"
                  value={formData.customRole}
                  onChange={handleChange}
                  placeholder="Enter your role"
                  className="mt-2 w-full py-2 px-2 text-sm border border-gray-200 rounded text-gray-800 focus:outline-none"
                />
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                className="w-full py-2 px-2 text-sm border border-gray-200 rounded text-gray-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 1234567890"
                className="w-full py-2 px-2 text-sm border border-gray-200 rounded text-gray-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">WhatsApp Number</label>
              <input
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full py-2 px-2 text-sm border border-gray-200 rounded text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us a bit about yourself..."
              className="w-full py-2 px-2 text-sm border border-gray-200 rounded text-gray-800 focus:outline-none"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Work Experience</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="List your work experience here"
              className="w-full py-2 px-2 text-sm border border-gray-200 rounded text-gray-800 focus:outline-none"
              rows={4}
            />
          </div>

          <div className="pt-2">
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfilePage
