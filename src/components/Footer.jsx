import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assests/SadhnaFoundation.png"; // Make sure path is correct

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 border-t border-gray-200 pt-10 pb-6">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Column 1: About */}
                    <div>
                        <div className="mb-4">
                            <img src={logo} alt="Sadhna Foundation Logo" className="h-16 w-auto" />
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Sadhna Foundation is dedicated to empowering communities and transforming lives through sustainable development initiatives, education, and healthcare programs.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={20} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">About Us</Link>
                            </li>
                            <li>
                                <Link to="/campaigns" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Our Campaigns</Link>
                            </li>
                            <li>
                                <Link to="/our-work" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Our Work</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/donate" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Donate</Link>
                            </li>
                            <li>
                                <Link to="/volunteer" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Volunteer</Link>
                            </li>
                            <li>
                                <Link to="/fundraise" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Fundraise</Link>
                            </li>
                            <li>
                                <Link to="/partnerships" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Partnerships</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">FAQs</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-orange-500" />
                                <span>123 Foundation Street, Bihar, India 800001</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="mr-3 text-orange-500" />
                                <a href="tel:+918051736663" className="hover:text-orange-500 transition-colors duration-200">+91 8051 736 663</a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-orange-500" />
                                <a href="mailto:info@sadhnafoundation.org" className="hover:text-orange-500 transition-colors duration-200">info@sadhnafoundation.org</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-center md:text-left text-gray-600">
                        &copy; {new Date().getFullYear()} Sadhna Foundation. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                            Terms of Service
                        </Link>
                        <Link to="/sitemap" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;