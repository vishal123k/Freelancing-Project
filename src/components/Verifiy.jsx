import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendVisible, setResendVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setResendVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };


  function clickButton() {
    navigate("/resetverify");
  }
  function clickButton2() {
    navigate("/resentemail");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-2">Verify email</h2>
        <p className="text-gray-400 text-sm mb-6">
          A verification code has been sent to you. Enter the code below.
        </p>

        <div className="flex justify-between mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center text-xl rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>

        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded mb-2" onClick={clickButton}>
          Verify email
        </button>

        {resendVisible ? (
          <div className="text-center text-blue-400 cursor-pointer hover:underline" onClick={clickButton2}>
            Resend it
          </div>
        ) : (
          <p className="text-center text-gray-500 text-sm">Resend available in 5 seconds...</p>
        )}

        <div className="mt-4 text-center">
          <Link to="/login" className="text-gray-400 text-sm hover:underline">
            ← Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;