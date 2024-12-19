import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const darkMode = true; // Simulated toggle for dark mode

  const handleRegister = async () => {
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      alert("Registration successful!");
      navigate("/signin");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Register</h2>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
          className="space-y-4 mt-4"
        >
          <div>
            <label className={`block text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 w-full px-3 py-2 border rounded-md ${
                darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
          <div>
            <label className={`block text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 w-full px-3 py-2 border rounded-md ${
                darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
          <div>
            <label className={`block text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 w-full px-3 py-2 border rounded-md ${
                darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
