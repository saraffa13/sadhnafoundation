import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import { motion } from "framer-motion"; // Import motion from framer-motion
import logo from "../assests/SadhnaFoundation.png"; // Adjust the path to your logo image

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Animation variants for the mobile menu
    const menuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    return (
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Sadhna Foundation Logo"
                        className="h-12 w-auto"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="/" className="hover:text-yellow-300 font-medium">
                        Home
                    </a>
                    <a href="/donate" className="hover:text-yellow-300 font-medium">
                        Donate
                    </a>
                    <a href="/for-donors" className="hover:text-yellow-300 font-medium">
                        For Donors
                    </a>
                    <a href="/for-nonprofits" className="hover:text-yellow-300 font-medium">
                        For Nonprofits
                    </a>
                    <a href="/more" className="hover:text-yellow-300 font-medium">
                        More
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-yellow-300 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <FaTimes className="text-2xl" /> // Close icon
                    ) : (
                        <FaBars className="text-2xl" /> // Hamburger icon
                    )}
                </button>
            </div>

            {/* Mobile Navigation with Framer Motion */}
            {isMenuOpen && (
                <motion.nav
                    className="md:hidden bg-blue-500 shadow-md"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                >
                    <ul className="flex flex-col space-y-4 px-4 py-4">
                        <li>
                            <a href="/" className="hover:text-yellow-300 font-medium">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/donate" className="hover:text-yellow-300 font-medium">
                                Donate
                            </a>
                        </li>
                        <li>
                            <a href="/for-donors" className="hover:text-yellow-300 font-medium">
                                For Donors
                            </a>
                        </li>
                        <li>
                            <a href="/for-nonprofits" className="hover:text-yellow-300 font-medium">
                                For Nonprofits
                            </a>
                        </li>
                        <li>
                            <a href="/more" className="hover:text-yellow-300 font-medium">
                                More
                            </a>
                        </li>
                    </ul>
                </motion.nav>
            )}
        </header>
    );
};

export default Header;