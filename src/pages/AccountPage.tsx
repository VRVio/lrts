import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";

const AccountPage: React.FC = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const darkMode = true; // Simulated toggle for dark mode

  const handleLogout = () => {
    auth.signOut();
    navigate("/signin");
  };

  if (!user) {
    navigate("/signin");
    return null;
  }

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="text-center">
        <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
          Welcome, {user.displayName || "User"}!
        </h1>
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
