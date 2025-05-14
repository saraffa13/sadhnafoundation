import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field as user is correcting it
    if (errors[name]) {
      setErrors({...errors, [name]: null});
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "आपका नाम आवश्यक है";
    }
    if (!formData.email.trim()) {
      newErrors.email = "आपका ईमेल आवश्यक है";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "कृपया एक वैध ईमेल पता दर्ज करें";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "आपका फोन नंबर आवश्यक है";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "फोन नंबर में 10 अंक होने चाहिए";
    }
    if (!formData.message.trim()) {
      newErrors.message = "आपका संदेश आवश्यक है";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      
      const emailData = {
        name: formData.name,
        message: formData.message,
        phone: formData.phone,
        email: formData.email,
      };

      emailjs
        .send(
          "service_ykwciwe", // Your EmailJS service ID
          "template_23wuu0d", // Your EmailJS template ID
          emailData,
          "IrVEjGn9YJUaPTjOh" // Your EmailJS user ID
        )
        .then(
          (response) => {
            setSuccessMessage("आपका संदेश सफलतापूर्वक भेज दिया गया है!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
            setIsSubmitting(false);
          },
          (error) => {
            setErrors({ submit: "संदेश भेजने में विफल। कृपया बाद में पुनः प्रयास करें।" });
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen mt-6">
      {/* Added pt-20 for fixed header spacing */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">संपर्क करें</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-xl mx-auto">
              किसी भी प्रश्न, सुझाव या जानकारी के लिए हमसे संपर्क करने में संकोच न करें। हम आपकी मदद के लिए तत्पर हैं।
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Contact Info Section */}
              <motion.div 
                className="lg:w-2/5 bg-orange-50 p-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">संपर्क जानकारी</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                      <FaMapMarkerAlt className="text-orange-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">पता</h3>
                      <p className="text-gray-600">
                        123 फाउंडेशन स्ट्रीट, पटना<br />
                        बिहार, भारत 800001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                      <FaPhone className="text-orange-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">फोन</h3>
                      <p className="text-gray-600">
                        <a href="tel:+918051736663" className="hover:text-orange-500 transition-colors">+91 8051 736 663</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                      <FaEnvelope className="text-orange-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">ईमेल</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@sadhnafoundation.org" className="hover:text-orange-500 transition-colors">info@sadhnafoundation.org</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold text-gray-800 mb-4">कार्य समय</h3>
                  <p className="text-gray-600 mb-2">
                    सोमवार - शुक्रवार: सुबह 9:00 - शाम 5:00
                  </p>
                  <p className="text-gray-600">
                    शनिवार: सुबह 9:00 - दोपहर 1:00
                  </p>
                </div>
              </motion.div>
              
              {/* Contact Form Section */}
              <motion.div 
                className="lg:w-3/5 p-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">हमें संदेश भेजें</h2>
                
                {successMessage && (
                  <motion.div
                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>{successMessage}</p>
                  </motion.div>
                )}
                
                {errors.submit && (
                  <motion.div
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>{errors.submit}</p>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        नाम
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        whileFocus={{ scale: 1.01 }}
                        placeholder="आपका नाम"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        ईमेल
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        whileFocus={{ scale: 1.01 }}
                        placeholder="आपका ईमेल"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      फोन नंबर
                    </label>
                    <motion.input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      whileFocus={{ scale: 1.01 }}
                      placeholder="आपका फोन नंबर"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      संदेश
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      rows="5"
                      whileFocus={{ scale: 1.01 }}
                      placeholder="आपका संदेश यहां लिखें..."
                    ></motion.textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-medium transition duration-300 flex items-center justify-center shadow-sm disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    ) : (
                      <FaArrowRight className="mr-2" />
                    )}
                    {isSubmitting ? "भेजा जा रहा है..." : "संदेश भेजें"}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Map Section */}
          <motion.div
            className="max-w-6xl mx-auto mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-sm overflow-hidden p-2">
              {/* Google Map Embed - Replace with the actual location */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230620.15822534!2d85.01421957620823!3d25.59821550498057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1701761267925!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
                title="Sadhna Foundation Location"
              ></iframe>
            </div>
          </motion.div>

          {/* FAQ Section - Optional */}
          <motion.div
            className="max-w-4xl mx-auto mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-10 text-gray-800">अक्सर पूछे जाने वाले प्रश्न</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">क्या मैं व्यक्तिगत रूप से आपसे मिल सकता हूँ?</h3>
                <p className="text-gray-600">हां, आप हमारे कार्यालय में पहले से नियुक्ति लेकर आ सकते हैं। कृपया फोन या ईमेल के माध्यम से समय सुनिश्चित करें।</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">मैं स्वयंसेवक कैसे बन सकता हूँ?</h3>
                <p className="text-gray-600">आप हमारी वेबसाइट पर स्वयंसेवक फॉर्म भर सकते हैं या सीधे हमें संपर्क कर सकते हैं। हम आपके कौशल और समय के अनुसार अवसर प्रदान करेंगे।</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;