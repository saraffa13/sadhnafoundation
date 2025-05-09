import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles
import { useDispatch, useSelector } from "react-redux";
import { fetchContributors } from "../store/reducers/contributors"; // Import the thunk
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
        <div className="font-sans text-center p-6 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <motion.header
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-extrabold">साधना फाउंडेशन में आपका स्वागत है</h1>
                    <p className="text-lg mt-4">
                        समुदायों को सशक्त बनाना, जीवन को बदलना।
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-300"
                            to={`/donate`}
                        >
                            दान करें
                        </Link>
                        <button
                            className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300"
                            onClick={() => alert('फंडरेज़ पेज पर रीडायरेक्ट हो रहा है...')}
                        >
                            फंडरेज़ करें
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mission Section */}
            <motion.section
                className="my-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <h2 className="text-4xl font-semibold text-gray-800">हमारा मिशन</h2>
                <p className="text-base text-gray-600 mt-6 max-w-2xl mx-auto">
                    साधना फाउंडेशन में, हम शिक्षा, स्वास्थ्य सेवा, और सतत विकास पहलों के माध्यम से वंचित समुदायों को सशक्त बनाने के लिए समर्पित हैं। 
                    हमारे मिशन में योगदान देकर सभी के लिए एक उज्जवल भविष्य बनाने में हमारा साथ दें।
                </p>
                <div className="mt-8">
                    <img
                        src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Mission"
                        className="rounded-lg shadow-lg mx-auto"
                    />
                </div>
            </motion.section>


            {/* Contributors Section */}
            <motion.section
                className="my-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <h2 className="text-4xl font-semibold text-gray-800 mb-8">हमारे योगदानकर्ता</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500">Error: {error}</p>
                ) : (
                    <Slider {...sliderSettings}>
                        {contributors.map((contributor) => (
                            <div key={contributor.id} className="p-4">
                                <img
                                    src={contributor.image}
                                    alt={contributor.name}
                                    className="w-32 h-32 mx-auto rounded-full shadow-lg"
                                />
                                <h3 className="text-lg font-semibold mt-4">{contributor.name}</h3>
                                <p className="text-sm text-gray-600">{contributor.description}</p>
                            </div>
                        ))}
                    </Slider>
                )}
            </motion.section>
        </div>
    );
};

export default Home;