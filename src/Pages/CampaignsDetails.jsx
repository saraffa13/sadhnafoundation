import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCampaignDetails } from "../store/reducers/campaigns";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaHandHoldingHeart } from "react-icons/fa";

const CampaignsDetails = () => {
  const { campaignId } = useParams();
  const dispatch = useDispatch();
  const [activeImage, setActiveImage] = useState(0);

  const { campaignDetails, loading, error } = useSelector(
    (state) => state.campaigns
  );

  useEffect(() => {
    if (campaignId) {
      dispatch(fetchCampaignDetails(Number(campaignId)));
    }
  }, [dispatch, campaignId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-orange-500 text-xl font-medium">
          <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-orange-500 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          अभियान विवरण लोड हो रहा है...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-red-100 max-w-md">
          <h3 className="text-xl font-bold text-red-600 mb-2">त्रुटि</h3>
          <p className="text-gray-700">{error}</p>
          <button 
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
          >
            वापस जाएं
          </button>
        </div>
      </div>
    );
  }

  if (!campaignDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-md">
          <h3 className="text-xl font-bold text-gray-800 mb-2">अभियान नहीं मिला</h3>
          <p className="text-gray-600">आपके द्वारा खोजा जा रहा अभियान मौजूद नहीं है या हटा दिया गया है।</p>
          <button 
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
          >
            वापस जाएं
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen pt-20 pb-16 mt-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Campaign Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{campaignDetails.title}</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
          </div>
          
          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            {/* Featured Image */}
            <div className="relative">
              <img
                src={campaignDetails.images[activeImage]}
                alt={`${campaignDetails.title} - Featured Image`}
                className="w-full h-80 object-cover"
              />
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {campaignDetails.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeImage === index ? "bg-orange-500" : "bg-white bg-opacity-70"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Campaign Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <FaCalendarAlt className="text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">तिथि</p>
                  <p className="font-medium">{campaignDetails.date || "जल्द ही"}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <FaMapMarkerAlt className="text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">स्थान</p>
                  <p className="font-medium">{campaignDetails.location || "विविध स्थान"}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <FaUsers className="text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">प्रतिभागी</p>
                  <p className="font-medium">{campaignDetails.participants || "असीमित"}</p>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 p-4 border-b border-gray-200">
              {campaignDetails.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${campaignDetails.title} - Image ${index + 1}`}
                  className={`w-full h-16 object-cover rounded cursor-pointer ${
                    activeImage === index ? "ring-2 ring-orange-500" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
            
            {/* Description */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">अभियान के बारे में</h2>
              <div className="text-gray-600 space-y-4 whitespace-pre-line">
                {campaignDetails.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <motion.div 
            className="bg-orange-50 rounded-lg shadow-sm border border-orange-100 p-6 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">इस अभियान का समर्थन करें</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              आपका योगदान हमारे इस महत्वपूर्ण अभियान को सफल बनाने में मदद करेगा। आप दान करके या स्वयंसेवक बनकर सहयोग कर सकते हैं।
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/donate"
                className="bg-orange-500 text-white font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHandHoldingHeart className="mr-2" />
                अभी दान करें
              </motion.a>
              <motion.a
                href="/contact"
                className="border border-orange-500 text-orange-500 font-medium py-3 px-8 rounded-md hover:bg-orange-50 transition duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                स्वयंसेवक बनें
              </motion.a>
            </div>
          </motion.div>
          
          {/* Image Gallery */}
          {campaignDetails.images.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">अभियान गैलरी</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {campaignDetails.images.map((image, index) => (
                  <motion.div 
                    key={index}
                    className="rounded-lg overflow-hidden shadow-sm border border-gray-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={image}
                      alt={`${campaignDetails.title} - Gallery Image ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Back Button */}
          <div className="text-center">
            <motion.button
              onClick={() => window.history.back()}
              className="text-orange-500 font-medium hover:text-orange-600 transition duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ← सभी अभियान देखें
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CampaignsDetails;