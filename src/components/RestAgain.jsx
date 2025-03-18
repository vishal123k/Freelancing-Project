import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const requirements = {
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
    length: password.length >= 8,
  };

  function clickButton(){
    navigate("/resetComplete");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-2">Choose <span className="font-semibold">new password</span></h2>
        <p className="text-gray-400 mb-4">Almost done. Enter your new password and you're all set.</p>

        <label className="block text-gray-300 mb-2">New password *</label>
        <input
          type="password"
          className="w-full p-2 mb-4 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="block text-gray-300 mb-2">Confirm new password *</label>
        <input
          type="password"
          className="w-full p-2 mb-4 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="mb-4">
          {Object.entries(requirements).map(([key, valid]) => (
            <p key={key} className={`flex items-center text-sm ${valid ? "text-green-400" : "text-gray-500"}`}>
              <FaCheckCircle className={`mr-2 ${valid ? "text-green-400" : "text-gray-500"}`} />
              {key === "lowercase" && "one lowercase character"}
              {key === "uppercase" && "one uppercase character"}
              {key === "number" && "one number"}
              {key === "special" && "one special character"}
              {key === "length" && "8 character minimum"}
            </p>
          ))}
        </div>

        <button className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-600" onClick={clickButton}>Reset Password</button>
        <div className="mt-4 text-center">
          <a href="/login" className="text-gray-400 hover:text-white">← Back to login</a>
        </div>
      </div>
    </div>
  );
}
