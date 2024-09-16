import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Register:", name, email, password);
  };

  return (
    <div className="register-container flex flex-col items-center justify-center h-screen">
      {/* Register card with modern styling */}
      <div className="register-card max-w-md w-full rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form
          className="flex flex-col space-y-4 w-full"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" // Added placeholder text
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full  
 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" // Added placeholder text
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 shadow-md" // Added shadow
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
