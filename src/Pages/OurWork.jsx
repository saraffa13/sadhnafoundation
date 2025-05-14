import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaHeartbeat, FaBriefcase, FaFemale, FaHandHoldingHeart, FaPeopleCarry, FaChild } from "react-icons/fa";
import ourWorkVideo from "../assests/ourWork.mp4"; // Import the video file

const OurWork = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "शिक्षा (Education)",
      icon: <FaGraduationCap className="text-orange-500" />,
      description: `हम वंचित बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करते हैं।
      शिक्षा से उनके जीवन में सकारात्मक बदलाव आता है।
      यह उन्हें आत्मनिर्भर बनने में मदद करता है।
      शिक्षा समाज में समानता लाने का माध्यम है।
      हमारा उद्देश्य हर बच्चे को शिक्षा का अधिकार देना है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "स्वास्थ्य (Health)",
      icon: <FaHeartbeat className="text-orange-500" />,
      description: `हम हाशिए पर रहने वाले समुदायों को स्वास्थ्य सेवाएं प्रदान करते हैं।
      स्वास्थ्य हर व्यक्ति का मौलिक अधिकार है।
      हमारा लक्ष्य सभी को बेहतर स्वास्थ्य सुविधाएं देना है।
      हम जागरूकता अभियान भी चलाते हैं।
      स्वस्थ समाज ही प्रगति का आधार है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "आजीविका (Livelihood)",
      icon: <FaBriefcase className="text-orange-500" />,
      description: `हम लोगों को स्थायी आजीविका के अवसर प्रदान करते हैं।
      यह उन्हें आत्मनिर्भर बनने में मदद करता है।
      आजीविका से परिवार की आर्थिक स्थिति सुधरती है।
      हम कौशल विकास कार्यक्रम भी चलाते हैं।
      हमारा उद्देश्य गरीबी उन्मूलन में योगदान देना है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "महिला सशक्तिकरण (Women Empowerment)",
      icon: <FaFemale className="text-orange-500" />,
      description: `हम महिलाओं को सशक्त बनाने के लिए काम करते हैं।
      महिलाओं को आत्मनिर्भर बनाना हमारा लक्ष्य है।
      हम उन्हें शिक्षा और रोजगार के अवसर प्रदान करते हैं।
      महिला सशक्तिकरण से समाज में समानता आती है।
      हमारा उद्देश्य महिलाओं को उनके अधिकार दिलाना है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "आपदा राहत (Disaster Response)",
      icon: <FaHandHoldingHeart className="text-orange-500" />,
      description: `हम प्राकृतिक आपदाओं के समय राहत और सहायता प्रदान करते हैं।
      प्रभावित लोगों को पुनर्वास में मदद करते हैं।
      हमारा उद्देश्य जीवन को फिर से सामान्य बनाना है।
      हम आपदा प्रबंधन में भी योगदान देते हैं।
      हर जरूरतमंद तक मदद पहुंचाना हमारी प्राथमिकता है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "जमीनी संगठन (Grassroots Organizations)",
      icon: <FaPeopleCarry className="text-orange-500" />,
      description: `हम जमीनी स्तर के संगठनों को सशक्त बनाते हैं।
      यह समुदाय के विकास में मदद करता है।
      हम उन्हें संसाधन और प्रशिक्षण प्रदान करते हैं।
      हमारा उद्देश्य सामुदायिक नेतृत्व को बढ़ावा देना है।
      जमीनी स्तर पर बदलाव लाना हमारी प्राथमिकता है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "बाल विकास (Child Development)",
      icon: <FaChild className="text-orange-500" />,
      description: `हम विशेषाधिकार प्राप्त बच्चों को समाज सेवा के लिए प्रेरित करते हैं।
      यह उन्हें जिम्मेदार नागरिक बनने में मदद करता है।
      समाज के प्रति उनकी संवेदनशीलता बढ़ती है।
      हम उन्हें विभिन्न सामाजिक गतिविधियों में शामिल करते हैं।
      हमारा उद्देश्य समाज में सकारात्मक बदलाव लाना है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Added pt-20 for fixed header spacing */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">हमारा कार्य</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              साधना फाउंडेशन समाज के विभिन्न क्षेत्रों में काम करके समुदायों का सशक्तिकरण और जीवन में परिवर्तन लाने के लिए प्रतिबद्ध है।
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <video
                className="w-full rounded-lg"
                controls
                autoPlay
                muted
                src={ourWorkVideo}
                alt="Our Work Video"
              />
            </div>
          </motion.div>

          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">हमारे कार्य क्षेत्र</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden ${
                    activeSection === index ? "border-orange-300" : ""
                  }`}
                  onClick={() => setActiveSection(activeSection === index ? null : index)}
                  layout
                  initial={{ borderRadius: 8 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="mr-3 text-2xl">
                        {section.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {section.title}
                      </h3>
                    </div>
                    
                    <AnimatePresence>
                      {activeSection === index && (
                        <motion.div
                          className="mt-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-auto rounded-lg mb-4"
                          />
                          <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                            {section.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {activeSection !== index && (
                      <p className="text-sm text-orange-500 mt-2">और अधिक जानकारी के लिए क्लिक करें →</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Numbers */}
          <motion.div 
            className="bg-orange-50 rounded-lg p-8 border border-orange-100 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">हमारा प्रभाव</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-500 mb-2">5,000+</div>
                <p className="text-gray-600">लाभार्थी बच्चे</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-500 mb-2">20+</div>
                <p className="text-gray-600">स्वास्थ्य शिविर</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <p className="text-gray-600">गांव</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-500 mb-2">1,000+</div>
                <p className="text-gray-600">स्वयंसेवक</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">हमारे साथ जुड़ें</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              साधना फाउंडेशन के साथ जुड़कर आप भी इस सामाजिक परिवर्तन का हिस्सा बन सकते हैं। आप स्वयंसेवक, दानदाता या भागीदार के रूप में हमारा समर्थन कर सकते हैं।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/donate" 
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-medium transition duration-300 shadow-sm"
              >
                दान करें
              </a>
              <a 
                href="/contact" 
                className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 px-8 rounded-md font-medium transition duration-300 shadow-sm"
              >
                संपर्क करें
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;