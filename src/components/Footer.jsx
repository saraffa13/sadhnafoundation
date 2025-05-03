import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-6">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-lg font-bold">Sadhna Foundation</h2>
                        <p className="text-sm">Empowering Communities, Transforming Lives</p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-300"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-300"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-300"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-300"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white opacity-20 my-4"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-center md:text-left">
                        &copy; {new Date().getFullYear()} Sadhna Foundation. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a href="/privacy-policy" className="hover:text-yellow-300">
                            Privacy Policy
                        </a>
                        <a href="/terms-of-service" className="hover:text-yellow-300">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;