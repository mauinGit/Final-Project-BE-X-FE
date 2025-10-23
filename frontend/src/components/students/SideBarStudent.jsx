import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { GoBook } from "react-icons/go";
import { BsCollection } from "react-icons/bs";

export default function SideBarStudent() {
    const [open, setOpen] = useState(true);

    return(
        <nav className={`${open ? "w-72 p-5" : "w-36 p-10"} w-2xs bg-white h-screen relative ease-in-out p-10 pt-10 transition-all duration-300`}>
            <div className="flex flex-row gap-4 items-center">
                <img 
                    src="/assets/logo/logoGDC.svg" 
                    alt="Logo GDCourse" 
                    className="w-15 h-12 sm:w-24 sm:h-22"
                />
                <h1 className="text-heading text-4xl font-bold">GDCourse</h1>
            </div>
            <ul className="p-0 mt-10">
                <li className="list-none block h-10 mb-2 relative">
                    <NavLink
                        to={"student/dashboard"}
                        className={({ isActive }) => `group flex items-center h-full transition-all text-xl duration-200 ${isActive ? "text-heading " : "text-heading hover:text-blue hover:font-medium"}`}>
                            {({ isActive }) => (
                                <div className="flex relative items-center w-full gap-4">
                                    <RxDashboard  
                                        size="24" 
                                        className={`text-xl transition-colors ${isActive ? "text-blue" : "text-heading group-hover:text-blue"}`}
                                    />
                                    <span className={`${!open && "hidden"} transition-colors`}>Dashboard</span>
                                    {isActive && open && (
                                        <div className={`absolute top-0 bottom-0 right-57 w-1 transition-all duration-200 ${!open && "left-0"} `}></div>
                                    )}
                                </div>
                            )}
                    </NavLink>
                </li>
                <li className="list-none block h-10 mb-2 relative">
                    <NavLink
                        to={"/student/courseStudent"}
                        className={({ isActive }) => `group flex items-center h-full transition-all text-xl duration-200 ${isActive ? "text-heading " : "text-heading hover:text-blue hover:font-medium"}`}>
                            {({ isActive }) => (
                                <div className="flex relative items-center w-full gap-4">
                                    <GoBook  
                                        size="24" 
                                        className={`text-xl transition-colors ${isActive ? "text-blue" : "text-heading group-hover:text-blue"}`}
                                    />
                                    <span className={`${!open && "hidden"} transition-colors`}>Courses</span>
                                    {isActive && open && (
                                        <div className={`absolute top-0 bottom-0 right-57 w-1 transition-all duration-200 ${!open && "left-0"} `}></div>
                                    )}
                                </div>
                            )}
                    </NavLink>
                </li>
                <li className="list-none block h-10 mb-2 relative">
                    <NavLink
                        to={"/student/myCourses"}
                        className={({ isActive }) => `group flex items-center h-full transition-all text-xl duration-200 ${isActive ? "text-heading " : "text-heading hover:text-blue hover:font-medium"}`}>
                            {({ isActive }) => (
                                <div className="flex relative items-center w-full gap-4">
                                    <BsCollection   
                                        size="24" 
                                        className={`text-xl transition-colors ${isActive ? "text-blue" : "text-heading group-hover:text-blue"}`}
                                    />
                                    <span className={`${!open && "hidden"} transition-colors`}>My Courses</span>
                                    {isActive && open && (
                                        <div className={`absolute top-0 bottom-0 right-57 w-1 transition-all duration-200 ${!open && "left-0"} `}></div>
                                    )}
                                </div>
                            )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};