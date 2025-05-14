import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContributors } from "../store/reducers/contributors";

const About = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { contributors, loading, error } = useSelector((state) => state.contributors);

    // Fetch contributors on component mount
    useEffect(() => {
        dispatch(fetchContributors());
    }, [dispatch]);

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen mt-6">
            {/* Added pt-20 for fixed header spacing */}
            <div className="pt-20 pb-16">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            साधना फाउंडेशन के बारे में
                        </h1>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </motion.div>

                    {/* Organization Overview */}
                    <motion.div
                        className="max-w-4xl mx-auto mb-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg text-gray-600 leading-relaxed">
                            साधना फाउंडेशन एक गैर-लाभकारी संगठन है जो भारत के ग्रामीण और वंचित समुदायों के उत्थान के लिए समर्पित है। 
                            हमारी यात्रा 2018 में शुरू हुई, और तब से हम समाज के विभिन्न वर्गों के साथ मिलकर काम कर रहे हैं।
                        </p>
                    </motion.div>

                    {/* Mission & Vision Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Mission Section */}
                        <motion.div
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">हमारा मिशन</h2>
                            <p className="text-gray-600 leading-relaxed">
                                हमारा उद्देश्य समाज में सकारात्मक बदलाव लाना है। हम शिक्षा, स्वास्थ्य, और महिला सशक्तिकरण के माध्यम से समाज को सशक्त बनाते हैं। 
                                हमारा मिशन हर व्यक्ति को आत्मनिर्भर बनाना है और सामुदायिक विकास को बढ़ावा देना है।
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                हम व्यक्तियों और समुदायों के साथ मिलकर काम करते हैं ताकि वे अपने जीवन में सकारात्मक बदलाव ला सकें और अपने सपनों को पूरा कर सकें।
                            </p>
                        </motion.div>

                        {/* Vision Section */}
                        <motion.div
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">हमारी दृष्टि</h2>
                            <p className="text-gray-600 leading-relaxed">
                                हमारी दृष्टि एक ऐसा समाज बनाना है जहां हर व्यक्ति को समान अवसर मिले। 
                                हम एक समृद्ध और सशक्त समाज के निर्माण के लिए प्रतिबद्ध हैं जहां सभी को शिक्षा, स्वास्थ्य और रोजगार के समान अवसर मिलें।
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                हम ऐसे समाज की कल्पना करते हैं जहां हर व्यक्ति अपनी क्षमताओं का पूरा उपयोग कर सके और समाज के विकास में अपना योगदान दे सके।
                            </p>
                        </motion.div>
                    </div>

                    {/* Values Section */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">हमारे मूल्य</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">पारदर्शिता</h3>
                                <p className="text-gray-600">हम अपने सभी कार्यों में पारदर्शिता बनाए रखने के लिए प्रतिबद्ध हैं।</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">सहयोग</h3>
                                <p className="text-gray-600">हम विभिन्न हितधारकों के साथ मिलकर काम करते हैं।</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">नवाचार</h3>
                                <p className="text-gray-600">हम समस्याओं के समाधान के लिए नए तरीके खोजते हैं।</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">सम्मान</h3>
                                <p className="text-gray-600">हम हर व्यक्ति के अधिकारों और गरिमा का सम्मान करते हैं।</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Team Section */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-10 text-gray-800">हमारी टीम से मिलें</h2>
                        {loading ? (
                            <div className="flex justify-center">
                                <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                            </div>
                        ) : error ? (
                            <p className="text-red-500">Error: {error}</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {contributors.map((member) => (
                                    <div
                                        key={member.id}
                                        className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 cursor-pointer hover:shadow-md transition-all duration-300"
                                        onClick={() => navigate(`/profile/${member.id}`)}
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-orange-100 object-cover"
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                        <p className="text-orange-500 mb-2">{member.role}</p>
                                        <p className="text-sm text-gray-600">{member.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        className="bg-orange-50 rounded-lg p-8 mt-16 text-center border border-orange-100"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">हमसे जुड़ें</h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            यदि आप हमारे मिशन और दृष्टि से प्रेरित हैं, तो हमारे साथ जुड़ें। आप स्वयंसेवक, दानदाता, या भागीदार के रूप में योगदान दे सकते हैं।
                        </p>
                        <button 
                            onClick={() => navigate('/contact')}
                            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-300 shadow-sm hover:shadow"
                        >
                            संपर्क करें
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;