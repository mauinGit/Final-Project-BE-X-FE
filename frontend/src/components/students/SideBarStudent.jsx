import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { GoBook } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";

export default function SideBarStudent() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return(
        <nav className={`${open ? "w-72 p-5" : "w-36 p-10"} w-2xs bg-white h-screen justify-between relative ease-in-out p-10 pt-10 transition-all duration-300`}>
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-3 items-center">
                    <img 
                        src="/assets/logo/logoGDC.svg" 
                        alt="Logo GDCourse" 
                        className="w-15 h-12 sm:w-20 sm:h-18"
                    />
                    <h1 className="text-heading text-3xl font-bold">GDCourse</h1>
                </div>
                <ul className="p-0">
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
            </div>
            <button 
                onClick={handleLogout}
                className="flex items-center gap-4 text-heading hover:text-blue text-xl hover:font-medium transition-all duration-200 mb-6"
            >
                <IoLogOutOutline size="24"/>
                <span className={`${!open && "hidden"} transition-colors`}>Logout</span>
            </button>
        </nav>
    );
};