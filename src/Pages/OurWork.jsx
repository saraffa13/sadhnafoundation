import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ourWorkVideo from "../assests/ourWork.mp4"; // Import the video file

const OurWork = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Education",
      description: `हम वंचित बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करते हैं।
      शिक्षा से उनके जीवन में सकारात्मक बदलाव आता है।
      यह उन्हें आत्मनिर्भर बनने में मदद करता है।
      शिक्षा समाज में समानता लाने का माध्यम है।
      हमारा उद्देश्य हर बच्चे को शिक्षा का अधिकार देना है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "Health",
      description: `हम हाशिए पर रहने वाले समुदायों को स्वास्थ्य सेवाएं प्रदान करते हैं।
      स्वास्थ्य हर व्यक्ति का मौलिक अधिकार है।
      हमारा लक्ष्य सभी को बेहतर स्वास्थ्य सुविधाएं देना है।
      हम जागरूकता अभियान भी चलाते हैं।
      स्वस्थ समाज ही प्रगति का आधार है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "Livelihood",
      description: `हम लोगों को स्थायी आजीविका के अवसर प्रदान करते हैं।
      यह उन्हें आत्मनिर्भर बनने में मदद करता है।
      आजीविका से परिवार की आर्थिक स्थिति सुधरती है।
      हम कौशल विकास कार्यक्रम भी चलाते हैं।
      हमारा उद्देश्य गरीबी उन्मूलन में योगदान देना है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "Women Empowerment",
      description: `हम महिलाओं को सशक्त बनाने के लिए काम करते हैं।
      महिलाओं को आत्मनिर्भर बनाना हमारा लक्ष्य है।
      हम उन्हें शिक्षा और रोजगार के अवसर प्रदान करते हैं।
      महिला सशक्तिकरण से समाज में समानता आती है।
      हमारा उद्देश्य महिलाओं को उनके अधिकार दिलाना है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "Disaster Response",
      description: `हम प्राकृतिक आपदाओं के समय राहत और सहायता प्रदान करते हैं।
      प्रभावित लोगों को पुनर्वास में मदद करते हैं।
      हमारा उद्देश्य जीवन को फिर से सामान्य बनाना है।
      हम आपदा प्रबंधन में भी योगदान देते हैं।
      हर जरूरतमंद तक मदद पहुंचाना हमारी प्राथमिकता है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "Empowering Grassroots",
      description: `हम जमीनी स्तर के संगठनों को सशक्त बनाते हैं।
      यह समुदाय के विकास में मदद करता है।
      हम उन्हें संसाधन और प्रशिक्षण प्रदान करते हैं।
      हमारा उद्देश्य सामुदायिक नेतृत्व को बढ़ावा देना है।
      जमीनी स्तर पर बदलाव लाना हमारी प्राथमिकता है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
    {
      title: "Privileged Children",
      description: `हम विशेषाधिकार प्राप्त बच्चों को समाज सेवा के लिए प्रेरित करते हैं।
      यह उन्हें जिम्मेदार नागरिक बनने में मदद करता है।
      समाज के प्रति उनकी संवेदनशीलता बढ़ती है।
      हम उन्हें विभिन्न सामाजिक गतिविधियों में शामिल करते हैं।
      हमारा उद्देश्य समाज में सकारात्मक बदलाव लाना है।`,
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg.webp",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
          Our Work
        </h1>

        {/* Video Section */}
        <div className="mb-10">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            autoPlay
            muted
            src={ourWorkVideo}
            alt="Our Work Video"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
                activeSection === index ? "p-6" : ""
              }`}
              onClick={() => setActiveSection(activeSection === index ? null : index)}
              layout
              initial={{ borderRadius: 16 }}
            >
              <h2 className="text-xl font-bold text-indigo-600 mb-2">
                {section.title}
              </h2>
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
                    <p className="text-gray-700 text-sm whitespace-pre-line">
                      {section.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;