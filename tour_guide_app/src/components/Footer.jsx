import React from "react";

const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <footer className="text-gray-600 body-font bg-gradient-to-b from-blue-50 to-blue-100">
                <div className="container mx-auto py-16 px-5 flex flex-wrap md:flex-nowrap">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-blue-800">
                            {/* SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-2xl font-bold">ExploreWorld</span>
                        </a>
                        <p className="mt-4 text-sm text-gray-600">
                            Your journey begins here. Explore breathtaking destinations with curated packages.
                        </p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-blue-900 tracking-widest text-sm mb-3">DESTINATIONS</h2>
                            <nav className="list-none mb-10">
                                <li><a className="text-gray-600 hover:text-blue-800">Gilgit Baltistan</a></li>
                                <li><a className="text-gray-600 hover:text-blue-800">Hunza</a></li>
                                <li><a className="text-gray-600 hover:text-blue-800">Chitral</a></li>
                                <li><a className="text-gray-600 hover:text-blue-800">Kashmir</a></li>
                                <li><a className="text-gray-600 hover:text-blue-800">Naran Kaghan</a></li>
                                <li><a className="text-gray-600 hover:text-blue-800">Skardu</a></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-blue-900 tracking-widest text-sm mb-3">EXPLORE</h2>
                            <nav className="list-none mb-10">
                                <li><a className="text-gray-600 hover:text-blue-800">Popular Tours</a></li>
                                <li><a className="text-gray-600 hover:text-blue-800">Adventure Packages</a></li>
                                <li><a className="text-gray-600 hover:text-blue-800">Family...</a></li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 text-white py-4 text-center">
                    <p>&copy; {new Date().getFullYear()} AR Atish. All Rights Reserved.</p>
                    <p>
                        This site and its contents are protected under copyright law. Unauthorized reproduction or distribution is prohibited.
                    </p>
                    <p>
                        Contact me at:{" "}
                        <a
                            href="mailto:alirazaatish@gmail.com"
                            className="text-orange-500 hover:underline"
                        >
                            alirazaatish@gmail.com
                        </a>
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer;