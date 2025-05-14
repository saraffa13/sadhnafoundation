import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHeartbeat, FaFemale, FaImages, FaArrowRight } from "react-icons/fa";

import achievement1 from '../assests/achievement1.jpg'
import achievement2 from '../assests/achievement2.jpg'
import achievement3 from '../assests/achievement3.jpg'
import achievement4 from '../assests/achievement4.jpg'
import achievement5 from '../assests/achievement5.jpg'
import achievement6 from '../assests/achievement6.jpg'

const Campaign = () => {
  const campaigns = [
    {
      id: 1,
      title: "शिक्षा अभियान",
      icon: <FaGraduationCap className="text-3xl text-orange-500" />,
      description: `हमारा उद्देश्य वंचित बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करना है।
      यह अभियान बच्चों के उज्ज्वल भविष्य के लिए समर्पित है।
      शिक्षा से समाज में समानता और प्रगति आती है।
      इस अभियान के तहत हम स्कूल निर्माण और शिक्षण सामग्री प्रदान करते हैं।
      आइए, इस पहल का हिस्सा बनें और बच्चों के जीवन में बदलाव लाएं।`,
      image:
        "https://media.istockphoto.com/id/1395154390/photo/close-up-shot-group-of-children-hands-busy-using-smartphone-at-school-corridor-concept-of.jpg?s=612x612&w=0&k=20&c=Wu1R82y2csZhAj5k6rLM9n8BLMmT1DTroCy5n9hJAZs=",
    },
    {
      id: 2,
      title: "स्वास्थ्य अभियान",
      icon: <FaHeartbeat className="text-3xl text-orange-500" />,
      description: `हमारा लक्ष्य सभी को बेहतर स्वास्थ्य सेवाएं प्रदान करना है।
      इस अभियान के तहत हम स्वास्थ्य शिविर और जागरूकता कार्यक्रम आयोजित करते हैं।
      स्वस्थ समाज ही प्रगति का आधार है।
      हम हाशिए पर रहने वाले समुदायों को स्वास्थ्य सेवाएं प्रदान करते हैं।
      इस अभियान में भाग लें और समाज को स्वस्थ बनाएं।`,
      image:
        "https://media.istockphoto.com/id/1298127415/photo/doctor-holding-red-heart-and-promoting-healthy-lifestyle-and-prevention-of-heart-diseases.jpg?s=612x612&w=0&k=20&c=GsJsD--lbKIIE9-BY7JSu98oa2CEKQEPoDdGRBJsRYM=",
    },
    {
      id: 3,
      title: "महिला सशक्तिकरण अभियान",
      icon: <FaFemale className="text-3xl text-orange-500" />,
      description: `हम महिलाओं को आत्मनिर्भर बनाने के लिए काम करते हैं।
      इस अभियान के तहत हम उन्हें शिक्षा और रोजगार के अवसर प्रदान करते हैं।
      महिला सशक्तिकरण से समाज में समानता आती है।
      हमारा उद्देश्य महिलाओं को उनके अधिकार दिलाना है।
      इस अभियान का हिस्सा बनें और बदलाव लाएं।`,
      image:
        "https://media.istockphoto.com/id/2142388495/photo/happy-indian-young-woman-holding-flag-and-showing-finger-after-voting-over-isolate-background.jpg?s=612x612&w=0&k=20&c=RfTj91H4asBZXSSvwJqkC5lgFHjI8V0JRcXI5D6bRJk=",
    },
  ];

  // Dummy achievement images
  const achievements = [achievement1,achievement2,achievement3,achievement4,achievement5,achievement6];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen mt-6">
      {/* Added pt-20 for fixed header spacing */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">हमारे अभियान</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              समाज के विकास के लिए साधना फाउंडेशन द्वारा चलाए जा रहे विभिन्न अभियानों के बारे में जानें और इनमें अपना योगदान दें।
            </p>
          </motion.div>

          {/* Campaigns Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-orange-500 text-white px-4 py-2 rounded-br-lg">
                    अभियान {campaign.id}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-3">
                      {campaign.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {campaign.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 whitespace-pre-line mb-6 leading-relaxed">
                    {campaign.description.split('\n')[0]}...
                  </p>
                  <Link
                    to={`/campaigns/${campaign.id}`}
                    className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-md transition duration-300 shadow-sm"
                  >
                    विस्तार से जानें <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">हमारी उपलब्धियां</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                साधना फाउंडेशन को मिले विभिन्न सम्मान और पुरस्कार जो हमारे कार्यों की गुणवत्ता और प्रभाव को दर्शाते हैं।
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {achievements.map((image, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <img
                    src={image}
                    alt={`Achievement ${index + 1}`}
                    className="w-full h-40 object-cover rounded"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Campaign Impact */}
          <motion.div
            className="bg-orange-50 rounded-lg p-8 border border-orange-100 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">हमारे अभियानों का प्रभाव</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <p className="text-gray-600">अभियान</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-500 mb-2">10,000+</div>
                <p className="text-gray-600">लाभार्थी</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
                <p className="text-gray-600">स्वयंसेवक</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-500 mb-2">30+</div>
                <p className="text-gray-600">पुरस्कार</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">अभियान में योगदान दें</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              आप भी हमारे अभियानों का हिस्सा बनकर समाज के विकास में योगदान दे सकते हैं। दान, स्वयंसेवा या जागरूकता फैलाकर आप बदलाव ला सकते हैं।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/donate" 
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-medium transition duration-300 shadow-sm"
              >
                दान करें
              </Link>
              <Link 
                to="/contact" 
                className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 px-8 rounded-md font-medium transition duration-300 shadow-sm"
              >
                संपर्क करें
              </Link>
            </div>
          </motion.div>

          {/* Gallery Preview - Optional */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">अभियान गैलरी</h2>
              <Link 
                to="/gallery" 
                className="flex items-center text-orange-500 hover:text-orange-600"
              >
                सभी देखें <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.slice(0, 4).map((image, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-lg shadow-sm"
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaImages className="text-white text-2xl" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;