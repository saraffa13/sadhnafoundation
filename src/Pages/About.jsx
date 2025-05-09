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
        <div className="bg-white text-gray-800 min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-center mb-8 text-indigo-600"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    साधना फाउंडेशन के बारे में
                </motion.h1>

                {/* Mission Section */}
                <motion.div
                    className="bg-blue-100 text-gray-800 rounded-lg shadow-lg p-8 mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h2 className="text-2xl font-bold mb-4">हमारा मिशन</h2>
                    <p className="text-base leading-relaxed">
                        हमारा उद्देश्य समाज में सकारात्मक बदलाव लाना है। हम शिक्षा, स्वास्थ्य, और महिला सशक्तिकरण के माध्यम से समाज को सशक्त बनाते हैं। 
                        हमारा मिशन हर व्यक्ति को आत्मनिर्भर बनाना है।
                    </p>
                </motion.div>

                {/* Vision Section */}
                <motion.div
                    className="bg-blue-100 text-gray-800 rounded-lg shadow-lg p-8 mb-12"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <h2 className="text-2xl font-bold mb-4">हमारी दृष्टि</h2>
                    <p className="text-base leading-relaxed">
                        हमारी दृष्टि एक ऐसा समाज बनाना है जहां हर व्यक्ति को समान अवसर मिले। 
                        हम एक समृद्ध और सशक्त समाज के निर्माण के लिए प्रतिबद्ध हैं।
                    </p>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <h2 className="text-2xl font-bold mb-8">हमारी टीम से मिलें</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-red-500">Error: {error}</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {contributors.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg p-6 cursor-pointer"
                                    onClick={() => navigate(`/profile/${member.id}`)}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 mx-auto rounded-full mb-4"
                                    />
                                    <h3 className="text-lg font-bold">{member.name}</h3>
                                    <p className="text-sm">{member.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default About;