import React from "react";
import { Link} from "react-router-dom";

const ResetPassword = () => {
    
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-2">Reset your password</h2>
        <p className="text-gray-400 text-sm mb-6">
          Have no fear. We'll email you instructions to reset your password. If you don't have access to your email, we can try account recovery.
        </p>
        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="myemailaddress@gmail.com"
        />
        <Link to="/verifiy">
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded mb-2">
          Reset Password
        </button>
        </Link>

        
        <div className="mt-4 text-center">
          <a href="/login" className="text-gray-400 text-sm hover:underline">
            ← Back to login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;