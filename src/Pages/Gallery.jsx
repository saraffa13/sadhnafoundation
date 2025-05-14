import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTimesCircle, FaArrowLeft, FaArrowRight, FaDownload, FaShareAlt } from "react-icons/fa";

// Import gallery images (you'll need to adjust these paths based on your project structure)
import achievement1 from '../assests/achievement1.jpg';
import achievement2 from '../assests/achievement2.jpg';
import achievement3 from '../assests/achievement3.jpg';
import achievement4 from '../assests/achievement4.jpg';
import achievement5 from '../assests/achievement5.jpg';
import achievement6 from '../assests/achievement6.jpg';

// Import campaign images (assuming you'll want to include these too)
import campaign1 from '../assests/achievement1.jpg';
import campaign2 from '../assests/achievement2.jpg';
import campaign3 from '../assests/achievement3.jpg';
import campaign4 from '../assests/achievement4.jpg';
import campaign5 from '../assests/achievement5.jpg';
import campaign6 from '../assests/achievement6.jpg';

const Gallery = () => {
  // State for lightbox functionality
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState("all");

  // Gallery data structure with categories
  const galleryImages = [
    // Education Campaign Images
    { id: 1, src: campaign1, category: "education", title: "शिक्षा शिविर", description: "बच्चों के लिए आयोजित शिक्षा शिविर का एक दृश्य" },
    { id: 2, src: achievement1, category: "education", title: "पुस्तक वितरण", description: "ग्रामीण क्षेत्र में छात्रों को पुस्तकें वितरण करते हुए" },
    { id: 3, src: campaign2, category: "education", title: "शिक्षक प्रशिक्षण", description: "शिक्षकों का क्षमता विकास कार्यक्रम" },
    
    // Health Campaign Images
    { id: 4, src: campaign3, category: "health", title: "स्वास्थ्य जांच शिविर", description: "गांव के लोगों की नि:शुल्क स्वास्थ्य जांच" },
    { id: 5, src: achievement2, category: "health", title: "वैक्सीनेशन अभियान", description: "बच्चों के लिए टीकाकरण कार्यक्रम" },
    { id: 6, src: campaign4, category: "health", title: "योग शिविर", description: "स्वस्थ जीवन के लिए योगाभ्यास शिविर" },
    
    // Women Empowerment Images
    { id: 7, src: campaign5, category: "women", title: "महिला सशक्तिकरण", description: "महिला स्वयं सहायता समूह की बैठक" },
    { id: 8, src: achievement3, category: "women", title: "कौशल विकास", description: "महिलाओं को स्वरोजगार के लिए प्रशिक्षण" },
    { id: 9, src: campaign6, category: "women", title: "महिला अधिकार जागरूकता", description: "महिला अधिकारों पर जागरूकता कार्यक्रम" },
    
    // Event & Achievement Images
    { id: 10, src: achievement4, category: "events", title: "वार्षिक समारोह", description: "फाउंडेशन का वार्षिक समारोह" },
    { id: 11, src: achievement5, category: "events", title: "पुरस्कार समारोह", description: "संस्था को मिला राष्ट्रीय सम्मान" },
    { id: 12, src: achievement6, category: "events", title: "स्थापना दिवस", description: "फाउंडेशन के स्थापना दिवस का आयोजन" },
  ];

  // Filter images based on category
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Open lightbox with selected image
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Enable scrolling again
  };

  // Navigate to previous image in lightbox
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Navigate to next image in lightbox
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Category tabs data
  const categories = [
    { id: "all", name: "सभी छवियाँ" },
    { id: "education", name: "शिक्षा अभियान" },
    { id: "health", name: "स्वास्थ्य अभियान" },
    { id: "women", name: "महिला सशक्तिकरण" },
    { id: "events", name: "कार्यक्रम और उपलब्धियां" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen mt-6">
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">हमारी गैलरी</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              साधना फाउंडेशन द्वारा आयोजित विभिन्न कार्यक्रमों और अभियानों की तस्वीरें देखें, 
              जो हमारे समाज सेवा के लिए प्रतिबद्धता को दर्शाती हैं।
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-orange-50"
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-sm group cursor-pointer h-64 bg-white"
                onClick={() => openLightbox(image, index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === image.category)?.name || image.category}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-black bg-opacity-50 rounded-full">
                    <FaSearch className="text-white text-xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Images Found */}
          {filteredImages.length === 0 && (
            <motion.div 
              className="text-center py-16 text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl">इस श्रेणी में कोई छवि उपलब्ध नहीं है</p>
            </motion.div>
          )}

          {/* More Information Section */}
          <motion.div
            className="bg-orange-50 rounded-lg p-8 border border-orange-100 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">गैलरी जानकारी</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">छवियों का उपयोग</h3>
                <p className="text-gray-600">
                  ये सभी छवियां साधना फाउंडेशन की संपत्ति हैं। 
                  शैक्षिक या सामाजिक जागरूकता के उद्देश्यों के लिए इन्हें साझा करने के लिए कृपया संपर्क करें।
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">योगदान करें</h3>
                <p className="text-gray-600">
                  आप भी हमारे अभियानों से जुड़कर इन महत्वपूर्ण पहलों का हिस्सा बन सकते हैं।
                  स्वयंसेवा या दान के लिए हमसे संपर्क करें।
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">नवीनतम अपडेट</h3>
                <p className="text-gray-600">
                  हमारे सोशल मीडिया चैनलों को फॉलो करें या हमारे न्यूजलेटर के लिए साइन अप करें
                  ताकि आप हमारे नवीनतम कार्यक्रमों से अवगत रह सकें।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl max-h-full flex flex-col">
            {/* Lightbox header */}
            <div className="bg-gray-900 p-3 flex justify-between items-center rounded-t-lg">
              <h3 className="text-white text-lg">{selectedImage.title}</h3>
              <button 
                onClick={closeLightbox} 
                className="text-white hover:text-orange-500 transition-colors"
              >
                <FaTimesCircle className="text-2xl" />
              </button>
            </div>

            {/* Image container */}
            <div className="relative flex-grow bg-gray-800 flex items-center justify-center">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-h-full max-w-full object-contain"
              />
              
              {/* Navigation buttons */}
              <button 
                onClick={prevImage} 
                className="absolute left-2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
              >
                <FaArrowLeft className="text-xl" />
              </button>
              
              <button 
                onClick={nextImage} 
                className="absolute right-2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
              >
                <FaArrowRight className="text-xl" />
              </button>
            </div>

            {/* Lightbox footer */}
            <div className="bg-gray-900 p-4 rounded-b-lg">
              <p className="text-white mb-3">{selectedImage.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-orange-400 text-sm">
                  {categories.find(cat => cat.id === selectedImage.category)?.name || selectedImage.category}
                </span>
                <div className="flex gap-3">
                  <button className="text-white flex items-center gap-1 hover:text-orange-400 transition-colors">
                    <FaDownload /> <span className="text-sm">डाउनलोड</span>
                  </button>
                  <button className="text-white flex items-center gap-1 hover:text-orange-400 transition-colors">
                    <FaShareAlt /> <span className="text-sm">शेयर</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;