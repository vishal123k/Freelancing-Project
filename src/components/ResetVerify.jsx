import React from "react";
import { useNavigate } from "react-router-dom";


const CheckEmail = () => {
  const navigate = useNavigate();



  function clickButton(){
    navigate("/resetagain")
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-xl font-bold mb-2">Reset Now</h2>
        <p className="text-gray-400 text-sm mb-6">
          Verify suceesful pls reset password <br /> youremailaccount@gmail.com
        </p>
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded mb-4" onClick={clickButton}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default CheckEmail;
