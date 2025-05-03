import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles
import Adarsh from "../assests/1.sadhna.jpg"
import Adarsh2 from "../assests/3.sadhna.jpg" 
import Deepak from "../assests/2.sadhna.jpg"

const Home = () => {
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

    const contributors = [
        {
            name: "Adarsh Sinha",
            description: "Philanthropist and community leader.",
            image: Adarsh2,
        },
        {
            name: "Deepak Shrivastava",
            description: "Healthcare advocate and volunteer.",
            image: Adarsh2
        },
        {
            name: "Sadhna Sinha",
            description: "Education specialist and mentor.",
            image: Adarsh2
        },
        {
            name: "Emily Davis",
            description: "Sustainability expert and activist.",
            image: Adarsh2
        },
    ];

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
                    <h1 className="text-5xl font-extrabold">Welcome to Sadhna Foundation</h1>
                    <p className="text-lg mt-4">
                        Empowering communities, transforming lives.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <button
                            className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-300"
                            onClick={() => alert('Redirecting to Donate page...')}
                        >
                            Donate
                        </button>
                        <button
                            className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300"
                            onClick={() => alert('Redirecting to Fundraise page...')}
                        >
                            Fundraise
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
                <h2 className="text-4xl font-semibold text-gray-800">Our Mission</h2>
                <p className="text-base text-gray-600 mt-6 max-w-2xl mx-auto">
                    At Sadhna Foundation, we are dedicated to uplifting underprivileged communities
                    through education, healthcare, and sustainable development initiatives. Join us in
                    making a difference by contributing to our mission of creating a brighter future
                    for everyone.
                </p>
                <div className="mt-8">
                    <img
                        src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Mission"
                        className="rounded-lg shadow-lg mx-auto"
                    />
                </div>
            </motion.section>

            {/* Our Contributors Section */}
            <motion.section
                className="my-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <h2 className="text-4xl font-semibold text-gray-800 mb-8">Our Contributors</h2>
                <Slider {...sliderSettings}>
                    {contributors.map((contributor, index) => (
                        <div key={index} className="p-4">
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
            </motion.section>

            {/* Call to Action */}
            <motion.section
                className="my-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <button
                    className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
                    onClick={() => alert('Thank you for your interest!')}
                >
                    Get Involved
                </button>
            </motion.section>
        </div>
    );
};

export default Home;