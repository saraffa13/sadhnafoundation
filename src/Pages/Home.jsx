import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContributors } from "../store/reducers/contributors";
import { Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const { contributors, loading, error } = useSelector((state) => state.contributors);

    // Fetch contributors on component mount
    useEffect(() => {
        dispatch(fetchContributors());
    }, [dispatch]);

    // Animation variants for sections
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="font-sans text-gray-700 bg-gray-50 min-h-screen">
            {/* Added pt-20 to create space for the fixed header */}
            <div className="pt-20">
                {/* Hero Section */}
                <motion.header
                    className="bg-white text-gray-800 py-16 px-4 shadow-sm border-b border-gray-100"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">साधना फाउंडेशन में आपका स्वागत है</h1>
                        <p className="text-lg mt-4 text-gray-600">
                            समुदायों को सशक्त बनाना, जीवन को बदलना।
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-300 shadow-sm hover:shadow"
                                to={`/donate`}
                            >
                                दान करें
                            </Link>
                            <button
                                className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 py-3 px-8 rounded-md text-lg font-medium transition duration-300 shadow-sm hover:shadow"
                                onClick={() => alert('फंडरेज़ पेज पर रीडायरेक्ट हो रहा है...')}
                            >
                                फंडरेज़ करें
                            </button>
                        </div>
                    </div>
                </motion.header>

                {/* Features Section - New Addition */}
                <motion.section
                    className="py-16 px-4 bg-gray-50"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">हमारे प्रयास</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">शिक्षा कार्यक्रम</h3>
                                <p className="text-gray-600 text-center">
                                    वंचित बच्चों के लिए गुणवत्तापूर्ण शिक्षा प्रदान करना और शिक्षकों को प्रशिक्षित करना।
                                </p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">स्वास्थ्य सेवा</h3>
                                <p className="text-gray-600 text-center">
                                    ग्रामीण क्षेत्रों में स्वास्थ्य शिविर और जागरूकता कार्यक्रम आयोजित करना।
                                </p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">सतत विकास</h3>
                                <p className="text-gray-600 text-center">
                                    पर्यावरण संरक्षण और सतत विकास के लिए समुदाय-आधारित पहल।
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Mission Section */}
                <motion.section
                    className="py-16 px-4 bg-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                                <h2 className="text-3xl font-bold mb-4 text-gray-800">हमारा मिशन</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    साधना फाउंडेशन में, हम शिक्षा, स्वास्थ्य सेवा, और सतत विकास पहलों के माध्यम से वंचित समुदायों को सशक्त बनाने के लिए समर्पित हैं। 
                                    हमारे मिशन में योगदान देकर सभी के लिए एक उज्जवल भविष्य बनाने में हमारा साथ दें।
                                </p>
                                <Link 
                                    to="/about" 
                                    className="inline-block mt-6 text-orange-500 hover:text-orange-600 font-medium"
                                >
                                    और जानें →
                                </Link>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Mission"
                                    className="rounded-lg shadow-md w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Vision Section */}
                <motion.section
                    className="py-16 px-4 bg-gray-50"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                                <h2 className="text-3xl font-bold mb-4 text-gray-800">हमारी दृष्टि</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    हमारी दृष्टि एक ऐसा समाज बनाना है जहां हर व्यक्ति को समान अवसर मिले। 
                                    हम एक समृद्ध और सशक्त समाज के निर्माण के लिए प्रतिबद्ध हैं। हमारा लक्ष्य है कि प्रत्येक व्यक्ति को शिक्षा, स्वास्थ्य सेवा और आर्थिक अवसरों तक पहुंच प्राप्त हो।
                                </p>
                                <Link 
                                    to="/about" 
                                    className="inline-block mt-6 text-orange-500 hover:text-orange-600 font-medium"
                                >
                                    और जानें →
                                </Link>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Vision"
                                    className="rounded-lg shadow-md w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Contributors Section */}
                <motion.section
                    className="py-16 px-4 bg-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">हमारे योगदानकर्ता</h2>
                        
                        {loading ? (
                            <div className="flex justify-center">
                                <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                            </div>
                        ) : error ? (
                            <p className="text-red-500 text-center">Error: {error}</p>
                        ) : (
                            <div className="px-4 md:px-12">
                                <Slider {...sliderSettings} className="contributor-slider">
                                    {contributors.map((contributor) => (
                                        <div key={contributor.id} className="p-4">
                                            <Link
                                                to={`/profile/${contributor.id}`}
                                                className="block bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                                            >
                                                <div className="text-center">
                                                    <img
                                                        src={contributor.image}
                                                        alt={contributor.name}
                                                        className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full shadow-sm object-cover border-2 border-orange-100"
                                                    />
                                                    <h3 className="text-xl font-semibold mt-4 text-gray-800">{contributor.name}</h3>
                                                    <p className="text-sm text-gray-600 mt-2">{contributor.role}</p>
                                                    <p className="text-sm text-gray-500 mt-2">{contributor.description}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        )}
                    </div>
                </motion.section>

                {/* Call to Action Section */}
                <motion.section
                    className="py-16 px-4 bg-orange-50 border-t border-orange-100"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">हमारे साथ जुड़ें</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            साधना फाउंडेशन समाज के सभी वर्गों के लोगों के सहयोग से आगे बढ़ रहा है। आप भी हमारे साथ जुड़कर इस परिवर्तन का हिस्सा बन सकते हैं।
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-medium transition duration-300 shadow-sm hover:shadow"
                                to="/donate"
                            >
                                दान करें
                            </Link>
                            <Link
                                className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 px-8 rounded-md font-medium transition duration-300 shadow-sm hover:shadow"
                                to="/contact"
                            >
                                संपर्क करें
                            </Link>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Add custom CSS for the slider */}
            <style jsx>{`
                .contributor-slider .slick-prev:before,
                .contributor-slider .slick-next:before {
                    color: #f97316;
                }
                
                .contributor-slider .slick-dots li button:before {
                    color: #f97316;
                }
                
                .contributor-slider .slick-dots li.slick-active button:before {
                    color: #ea580c;
                }
            `}</style>
        </div>
    );
};

export default Home;