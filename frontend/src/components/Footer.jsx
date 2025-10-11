import { NavLink } from "react-router-dom";

export default function Footer() {
    return(
        <footer className="bg-secondBlue pt-18">
            <div className="flex flex-col lg:flex-row lg:justify-between px-4 sm:px-22 gap-10 lg:gap-0">
                <div className="flex flex-col pr-8 gap-5">
                    <div className="flex flex-row items-center gap-5">
                        <img 
                            src="/assets/logo/logoGDC.svg" 
                            alt="Logo UNSRI" 
                            className="w-26 h-full"
                        />
                        <h3 className="text-4xl font-bold text-heading">GDCourse</h3>
                    </div>
                    <p className="text-gray-500 text-xl break-words max-w-xs">Learn anytime with GDGoC experts. Explore new skills, share knowledge, and grow together for free.</p>
                </div>
                <div className="flex flex-col pr-16 md:px-1 xl:px-10 lg:px-22 gap-5">
                    <h3 className="text-2xl font-medium text-heading">Courses</h3>
                    <ul className="flex flex-col gap-1">
                        <li className="text-gray-500 text-xl">Video Courses</li>
                        <li className="text-gray-500 text-xl">E-Learning Courses</li>
                    </ul>
                </div>
                <div className="flex flex-col pr-16 md:px-1 xl:px-10 lg:px-22 gap-5">
                    <h3 className="text-2xl font-medium text-heading">Contact Us</h3>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-500 text-xl">
                            Line: 
                            <span className="px-2">
                                <a 
                                    href="https://www.instagram.com/GDCourse/"
                                    className="text-xl hover:font-medium hover:text-blue"
                                    >    
                                    @GDCourse
                                </a>
                            </span>
                        </p>
                        <p className="text-gray-500 text-xl">
                            Email: 
                            <span className="px-2">
                                <a 
                                    href="mailto:gdcourse@gmail.com"
                                    className="text-xl hover:font-medium hover:text-blue"
                                    >    
                                    gdcourse@gmail.com
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col xl:pl-10 lg:pl-45 gap-5">
                    <h3 className="text-2xl font-medium text-heading">Navigation</h3>
                    <ul className="flex flex-col gap-4">
                        <li className="text-gray-500 text-xl hover:font-medium hover:text-blue">
                            <NavLink 
                            to="/"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="text-gray-500 text-xl hover:font-medium hover:text-blue">
                            <NavLink 
                            to="/courses"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li className="text-gray-500 text-xl hover:font-medium hover:text-blue">
                            <NavLink 
                            to="/contact"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col py-14 px-7 md:px-16 lg:px-22 gap-8 text-center justify-center items-center">
                <span className="w-full h-0.5 bg-heading"></span>
                <p className="text-heading font-medium text-xl"> © GDCourse 2025 | Blue Team</p>
            </div>
        </footer>
    );
};