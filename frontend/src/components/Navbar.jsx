import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <nav id="navbar" className="font-Open Sans sticky top-0 w-full z-50 bg-white/70 backdrop-blur-lg">
            <div className="flex flex-wrap items-center justify-between px-4 sm:px-8 lg:px-20 py-2 gap-y-4 gap-x-6">
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <img 
                        src="/assets/logo/logoGDC.svg" 
                        alt="logo GDCourse" 
                        className="w-15 h-12 sm:w-24 sm:h-22"
                    />
                    <h1 className="text-4xl font-bold text-heading">GDCourse</h1>
                </div>
                <ul className="hidden lg:flex font-normal gap-15 text-xl">
                    <li className="transition-all text-gray-500 cursor-pointer hover:text-blue hover:font-medium ">
                        <NavLink 
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="transition-all text-gray-500 cursor-pointer hover:text-blue hover:font-medium ">
                        <NavLink 
                            to="/courses"
                        >
                            Courses
                        </NavLink>
                    </li>
                        <li className="transition-all text-gray-500 cursor-pointer hover:text-blue hover:font-medium ">
                        <NavLink 
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="flex-row gap-10 items-center hidden lg:flex">
                    <NavLink
                        to="/login"
                        className="transition-all text-xl text-gray-500 hover:text-blue"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="px-4 py-2 text-white text-xl bg-blue rounded-full border-2 border-black hover:opacity-90 transition-transform duration-300 ease-in-out hover:shadow-lg"
                    >
                        Sign Up
                    </NavLink>
                </div>

                {/* Hamburger Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-heading hover:text-heading focus:outline-none cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                        <HiX className="size-8" />
                        ) : (
                        <HiMenu className="size-8" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white absolute py-5 top-full left-0 w-full h-screen shadow-xl">
                        <ul className="flex flex-col px-4 gap-5 text-xl">
                            <li className="transition-all text-gray-500 cursor-pointer hover:text-blue hover:font-medium ">
                                <NavLink 
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="transition-all text-gray-500 cursor-pointer hover:text-blue hover:font-medium ">
                                <NavLink 
                                    to="/courses"
                                >
                                    Courses
                                </NavLink>
                            </li>
                                <li className="transition-all text-gray-500 cursor-pointer hover:text-blue hover:font-medium ">
                                <NavLink 
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <div className="flex flex-col gap-5 lg:flex">
                                <NavLink
                                    to="/login"
                                    className="transition-all text-xl text-gray-500 hover:text-blue"
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/signup"
                                    className="w-fit px-4 py-2 text-white text-xl bg-blue rounded-full border-2 border-black hover:opacity-90 transition-transform duration-300 ease-in-out hover:shadow-lg"
                                >
                                    Sign Up
                                </NavLink>
                            </div>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
};