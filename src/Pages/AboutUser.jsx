import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContributors } from "../store/reducers/contributors";
import { FaInstagram, FaFacebook, FaTwitter, FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const AboutUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { contributors, loading, error } = useSelector((state) => state.contributors);
  const [user, setUser] = useState(null);

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

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen mt-6">
      {/* Added pt-20 for fixed header spacing */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 p-4 rounded-lg text-red-600 max-w-3xl mx-auto text-center">
              <p>{error}</p>
            </div>
          ) : !user ? (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-4">इस पृष्ठ पर कोई जानकारी नहीं मिली</h2>
              <p className="text-gray-600 mb-6">यह संभव है कि आप जिस प्रोफ़ाइल को देखना चाहते हैं वह अस्तित्व में नहीं है।</p>
              <button
                onClick={() => navigate(-1)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md transition duration-300 inline-flex items-center"
              >
                <FaArrowLeft className="mr-2" /> वापस जाएं
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 max-w-5xl mx-auto">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center text-gray-600 hover:text-orange-500 transition duration-300 font-medium"
                >
                  <FaArrowLeft className="mr-2" /> वापस जाएं
                </button>
              </div>

              <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="md:flex">
                  {/* Profile Sidebar - Left Column */}
                  <div className="md:w-1/3 bg-gray-50 p-8 border-r border-gray-100">
                    <div className="text-center">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-40 h-40 mx-auto rounded-full mb-6 border-4 border-white shadow-md object-cover"
                      />
                      <h1 className="text-2xl font-bold mb-1 text-gray-800">{user.name}</h1>
                      <p className="text-orange-500 font-medium mb-6">{user.role}</p>
                      
                      <div className="flex justify-center space-x-4 mb-6">
                        {user.socialLinks && user.socialLinks.instagram && (
                          <a
                            href={user.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-orange-500 transition duration-300 text-xl"
                            aria-label="Instagram"
                          >
                            <FaInstagram />
                          </a>
                        )}
                        {user.socialLinks && user.socialLinks.facebook && (
                          <a
                            href={user.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-orange-500 transition duration-300 text-xl"
                            aria-label="Facebook"
                          >
                            <FaFacebook />
                          </a>
                        )}
                        {user.socialLinks && user.socialLinks.twitter && (
                          <a
                            href={user.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-orange-500 transition duration-300 text-xl"
                            aria-label="Twitter"
                          >
                            <FaTwitter />
                          </a>
                        )}
                      </div>
                      
                      <div className="space-y-3 text-left border-t border-gray-200 pt-6">
                        {user.email && (
                          <div className="flex items-center">
                            <FaEnvelope className="text-orange-500 mr-3" />
                            <a href={`mailto:${user.email}`} className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                              {user.email}
                            </a>
                          </div>
                        )}
                        {user.phone && (
                          <div className="flex items-center">
                            <FaPhone className="text-orange-500 mr-3" />
                            <a href={`tel:${user.phone}`} className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                              {user.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Profile Content - Right Column */}
                  <div className="md:w-2/3 p-8">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">परिचय</h2>
                      <p className="text-gray-600 leading-relaxed">
                        {user.description}
                        {/* Extended bio content for more detail */}
                        {user.name.includes("आदर्श") && (
                          <>
                            <br /><br />
                            श्री आदर्श सिन्हा जी साधना फाउंडेशन के संस्थापक और सीईओ हैं। उन्होंने अपना जीवन समाज सेवा के लिए समर्पित किया है। उनका दृष्टिकोण है कि शिक्षा और स्वास्थ्य सेवा हर व्यक्ति का मौलिक अधिकार है।
                            <br /><br />
                            उन्होंने अपने नेतृत्व में कई सामुदायिक कार्यक्रम शुरू किए हैं जिनसे हजारों लोगों को लाभ मिला है।
                          </>
                        )}
                        {user.name.includes("दीपक") && (
                          <>
                            <br /><br />
                            श्री दीपक श्रीवास्तव जी साधना फाउंडेशन में स्वास्थ्य सेवा प्रमुख के रूप में कार्यरत हैं। उन्होंने ग्रामीण क्षेत्रों में स्वास्थ्य शिविरों के माध्यम से हजारों लोगों की सेवा की है।
                            <br /><br />
                            उनके नेतृत्व में, फाउंडेशन ने कई स्वास्थ्य जागरूकता अभियान चलाए हैं जो समुदाय के स्वास्थ्य को बेहतर बनाने में मदद कर रहे हैं।
                          </>
                        )}
                        {user.name.includes("साधना") && (
                          <>
                            <br /><br />
                            श्रीमती साधना सिन्हा जी एक अनुभवी शिक्षाविद् हैं और उन्होंने शिक्षा के क्षेत्र में महत्वपूर्ण योगदान दिया है। वे साधना फाउंडेशन की शिक्षा पहलों का नेतृत्व करती हैं।
                            <br /><br />
                            उनके प्रयासों से कई वंचित बच्चों को गुणवत्तापूर्ण शिक्षा प्राप्त करने का अवसर मिला है।
                          </>
                        )}
                        {user.name.includes("अनिकेत") && (
                          <>
                            <br /><br />
                            अनिकेत वर्मा जी साधना फाउंडेशन में एक महत्वपूर्ण सदस्य हैं और वे विभिन्न परियोजनाओं में योगदान देते हैं। उनका दृढ़ विश्वास है कि युवा पीढ़ी समाज परिवर्तन की कुंजी है।
                            <br /><br />
                            वे युवाओं को सामाजिक कार्यों में शामिल करने के लिए प्रेरित करते हैं और उन्हें सशक्त बनाने के लिए कार्यशालाएं आयोजित करते हैं।
                          </>
                        )}
                      </p>
                    </div>
                    
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">उपलब्धियां</h2>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>समाज सेवा के क्षेत्र में उत्कृष्ट योगदान के लिए सम्मानित</li>
                        <li>ग्रामीण विकास परियोजनाओं का सफल नेतृत्व</li>
                        <li>शिक्षा और स्वास्थ्य सेवा के क्षेत्र में नवाचारी पहल</li>
                        <li>सामुदायिक सशक्तिकरण कार्यक्रमों का संचालन</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                      <h2 className="text-xl font-bold mb-3 text-gray-800">संपर्क करें</h2>
                      <p className="text-gray-600 mb-4">
                        यदि आप {user.name} से संपर्क करना चाहते हैं या उनके कार्य के बारे में अधिक जानना चाहते हैं, तो कृपया ईमेल या फोन के माध्यम से संपर्क करें।
                      </p>
                      <button 
                        onClick={() => navigate('/contact')}
                        className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-md transition duration-300 inline-flex items-center text-sm font-medium"
                      >
                        संपर्क फॉर्म पर जाएं
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUser;