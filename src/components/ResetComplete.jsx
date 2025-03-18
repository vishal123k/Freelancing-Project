import React from "react";
import { useNavigate } from "react-router-dom";

const ResetComplete = () => {
  const navigate = useNavigate();

  function clickButton(){
    navigate("/login")
  }
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center p-6 bg-gray-900 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Reset complete!</h2>
        <p className="text-gray-400 mb-4">
          All done! We have sent an email to <br />
          <span className="text-gray-300">m**********@gmail.com</span> to confirm
        </p>
        <button className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md w-full hover:bg-yellow-600" onClick={clickButton}>
          Return to login
        </button>
        <p className="mt-4 text-gray-400 cursor-pointer hover:underline">← Back to login</p>
      </div>
    </div>
  );
};

export default ResetComplete;
