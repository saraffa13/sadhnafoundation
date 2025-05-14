import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaHandHoldingHeart, FaHandsHelping, FaGraduationCap, FaQrcode, FaUniversity } from "react-icons/fa";
// Removed QRCodeSVG import since we're using an image file instead

// Import the QR code image
import qrCodeImage from "../assests/qr.png";

const Donate = () => {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("कृपया दान करने के लिए एक वैध राशि दर्ज करें।");
      return;
    }
    
    if (!donorName.trim()) {
      alert("कृपया अपना नाम दर्ज करें।");
      return;
    }
    
    // Simple email validation
    if (!donorEmail.trim() || !donorEmail.includes('@')) {
      alert("कृपया एक वैध ईमेल पता दर्ज करें।");
      return;
    }

    alert(`${donorName} जी, ₹${amount} के दान के लिए आपका हार्दिक धन्यवाद!`);
    setCustomAmount("");
    setSelectedAmount(null);
    setDonorName("");
    setDonorEmail("");
    setDonorPhone("");
  };

  const popularAmounts = [500, 1000, 2000, 5000];
  
  // Bank account details
  const bankDetails = {
    crn: "621923450",
    accountNumber: "2146849659",
    ifscCode: "KKBK0005617",
    upiHandle: "8051736663@kotak"
  };

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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">दान करें</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              आपका योगदान किसी के जीवन में बदलाव ला सकता है। आइए मिलकर एक बेहतर समाज का निर्माण करें।
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Donation Form */}
              <motion.div
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">अपना योगदान दें</h2>

                {/* Donation Amount Selection */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    चुनें या दान राशि दर्ज करें
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {popularAmounts.map((amount) => (
                      <motion.button
                        key={amount}
                        className={`py-3 px-4 rounded-md font-medium text-center ${
                          selectedAmount === amount
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        } transition duration-200`}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        ₹{amount.toLocaleString()}
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-500">₹</span>
                    </div>
                    <input
                      type="number"
                      placeholder="अन्य राशि दर्ज करें"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-8 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    आपका नाम
                  </label>
                  <input
                    type="text"
                    placeholder="अपना नाम दर्ज करें"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    ईमेल
                  </label>
                  <input
                    type="email"
                    placeholder="अपना ईमेल दर्ज करें"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-2">
                    फोन नंबर (वैकल्पिक)
                  </label>
                  <input
                    type="tel"
                    placeholder="अपना फोन नंबर दर्ज करें"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>

                <motion.button
                  className="w-full bg-orange-500 text-white font-medium py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center shadow-sm"
                  onClick={handleDonate}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaHeart className="mr-2" />
                  अभी दान करें
                </motion.button>
              </motion.div>

              {/* Right Column - Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* How Your Donation Helps */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">आपका दान कैसे मदद करता है</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-orange-100 p-2 rounded-full mr-3">
                        <FaGraduationCap className="text-orange-500" />
                      </div>
                      <div>
                        <p className="font-medium">₹500</p>
                        <p className="text-sm text-gray-600">एक बच्चे की एक महीने की शिक्षा सामग्री</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-orange-100 p-2 rounded-full mr-3">
                        <FaHandsHelping className="text-orange-500" />
                      </div>
                      <div>
                        <p className="font-medium">₹2,000</p>
                        <p className="text-sm text-gray-600">एक परिवार को आजीविका सहायता</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-orange-100 p-2 rounded-full mr-3">
                        <FaHandHoldingHeart className="text-orange-500" />
                      </div>
                      <div>
                        <p className="font-medium">₹5,000</p>
                        <p className="text-sm text-gray-600">एक स्वास्थ्य शिविर में 10 लोगों की मदद</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Transfer - Bank Details */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <FaUniversity className="text-orange-500 mr-2" size={20} />
                    <h3 className="text-xl font-bold text-gray-800">बैंक विवरण</h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">CRN</span>
                      <span className="font-medium">{bankDetails.crn}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">खाता संख्या</span>
                      <span className="font-medium">{bankDetails.accountNumber}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">IFSC कोड</span>
                      <span className="font-medium">{bankDetails.ifscCode}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">UPI</span>
                      <span className="font-medium">{bankDetails.upiHandle}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="text-orange-500 border border-orange-500 font-medium py-2 px-4 rounded-md hover:bg-orange-50 transition duration-200 text-sm w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      navigator.clipboard.writeText(`Account: ${bankDetails.accountNumber}, IFSC: ${bankDetails.ifscCode}, UPI: ${bankDetails.upiHandle}`);
                      alert("बैंक विवरण कॉपी किया गया!");
                    }}
                  >
                    विवरण कॉपी करें
                  </motion.button>
                </div>

                {/* QR Code - Using the imported image */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <FaQrcode className="text-orange-500 mr-2" size={20} />
                    <h3 className="text-xl font-bold text-gray-800">QR कोड स्कैन करें</h3>
                  </div>
                  
                  <div className="bg-white p-3 inline-block rounded-lg border border-gray-200 shadow-sm mb-3">
                    <img 
                      src={qrCodeImage} 
                      alt="UPI QR Code for Donation" 
                      className="w-44 h-44 object-contain"
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600">QR कोड स्कैन करके UPI के माध्यम से आसानी से दान करें</p>
                </div>

                {/* Tax Benefits */}
                <div className="bg-orange-50 rounded-lg shadow-sm border border-orange-100 p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">कर लाभ</h3>
                  <p className="text-gray-600 mb-4">
                    साधना फाउंडेशन के लिए दिया गया दान आयकर अधिनियम की धारा 80G के तहत कर छूट के लिए पात्र है।
                  </p>
                  <p className="text-gray-600">
                    आप दान करने के बाद अपने पंजीकृत ईमेल पर एक प्रमाण पत्र प्राप्त करेंगे।
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Other Ways to Support */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">अन्य सहायता तरीके</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">स्वयंसेवा</h3>
                  <p className="text-gray-600 mb-4">अपना समय और कौशल दान करके हमारी मदद करें।</p>
                  <a href="/contact" className="text-orange-500 hover:text-orange-600 font-medium">और जानें →</a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">वस्तु दान</h3>
                  <p className="text-gray-600 mb-4">किताबें, कपड़े, या अन्य आवश्यक सामग्री दान करें।</p>
                  <a href="/contact" className="text-orange-500 hover:text-orange-600 font-medium">और जानें →</a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">कॉर्पोरेट पार्टनरशिप</h3>
                  <p className="text-gray-600 mb-4">अपनी कंपनी के साथ हमारे लक्ष्यों का समर्थन करें।</p>
                  <a href="/contact" className="text-orange-500 hover:text-orange-600 font-medium">और जानें →</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;