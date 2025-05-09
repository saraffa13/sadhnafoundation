import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Donate", link: "/donate" },
        { name: "Our Campaigns", link: "/campaigns" },
        { name: "For Nonprofits", link: "/for-nonprofits" },
        { name: "Our Work", link: "/our-work" },
    ];

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
                    <ul className="flex space-x-6">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.link}
                                    className="hover:text-yellow-300 font-medium"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
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
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.link}
                                    className="hover:text-yellow-300 font-medium"
                                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.nav>
            )}
        </header>
    );
};

export default Header;