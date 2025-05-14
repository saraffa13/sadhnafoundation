import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assests/SadhnaFoundation.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for sticky header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        { name: "Contact", link: "/contact" },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                ? "bg-white shadow-md text-gray-800" 
                : "bg-white bg-opacity-95 text-gray-800"
            }`}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Sadhna Foundation Logo"
                            className="h-14 w-auto"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-1">
                    <ul className="flex items-center">
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.link;
                            return (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className={`px-4 py-2 mx-1 rounded-md transition-all duration-200 font-medium relative ${
                                            isActive 
                                            ? "text-orange-600" 
                                            : "text-gray-700 hover:text-orange-600"
                                        }`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="ml-4">
                            <Link 
                                to="/donate" 
                                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md transition-all duration-200 shadow-sm hover:shadow"
                            >
                                Donate Now
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 hover:text-orange-600 focus:outline-none transition-colors duration-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <FaTimes className="text-2xl" />
                    ) : (
                        <FaBars className="text-2xl" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation with Framer Motion */}
            {isMenuOpen && (
                <motion.nav
                    className="md:hidden bg-white border-t border-gray-100 shadow-lg"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                >
                    <ul className="flex flex-col space-y-2 px-4 py-3">
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.link;
                            return (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className={`block py-2 px-3 rounded ${
                                            isActive 
                                            ? "text-orange-600 bg-orange-50" 
                                            : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="pt-2">
                            <Link 
                                to="/donate" 
                                className="block bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-md transition-all duration-200 shadow-sm"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Donate Now
                            </Link>
                        </li>
                    </ul>
                </motion.nav>
            )}
        </header>
    );
};

export default Header;