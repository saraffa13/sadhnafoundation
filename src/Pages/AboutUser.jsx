import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContributors } from "../store/reducers/contributors";
import { FaInstagram, FaFacebook, FaTwitter, FaArrowLeft } from "react-icons/fa"; // Import React Icons

const AboutUser = () => {
  const { id } = useParams(); // Extract the user ID from the URL
  const navigate = useNavigate(); // Hook to navigate back
  const dispatch = useDispatch();
  const { contributors, loading, error } = useSelector((state) => state.contributors);
  const [user, setUser] = useState(null); // State to store the selected user

  // Fetch contributors on component mount
  useEffect(() => {
    dispatch(fetchContributors());
  }, [dispatch]);

  // Find the user by ID when contributors are loaded
  useEffect(() => {
    if (contributors.length > 0) {
      const selectedUser = contributors.find((contributor) => contributor.id === parseInt(id));
      setUser(selectedUser);
    }
  }, [contributors, id]);

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-8 text-red-500">{error}</p>;
  }

  if (!user) {
    return <p className="text-center mt-8 text-gray-500">User not found.</p>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)} // Navigate to the previous page
          className="flex items-center text-white underline mb-4 hover:text-yellow-300 transition duration-300"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <img
              src={user.image}
              alt={user.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-indigo-600 shadow-md"
            />
            <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
            <p className="text-lg text-indigo-600 font-medium mb-4">{user.role}</p>
            <p className="text-base text-gray-600 mb-4">{user.description}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-base text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-base text-gray-700">
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Connect with {user.name}</h2>
            <div className="flex space-x-4 justify-center">
              {user.socialLinks.instagram && (
                <a
                  href={user.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition duration-300 text-2xl"
                >
                  <FaInstagram />
                </a>
              )}
              {user.socialLinks.facebook && (
                <a
                  href={user.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300 text-2xl"
                >
                  <FaFacebook />
                </a>
              )}
              {user.socialLinks.twitter && (
                <a
                  href={user.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition duration-300 text-2xl"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;