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

    const navItems = [
        { name: "Dashboard", path: "/student/dashboard", icon: <RxDashboard size={24} /> },
        { name: "Courses", path: "/student/courseStudent", icon: <GoBook size={24} /> },
        { name: "My Courses", path: "/student/myCourses", icon: <BsCollection size={24} /> },
    ];

    return(
        <nav className={`${open ? "w-72 p-5" : "w-28 p-10"} w-2xs flex flex-col bg-white h-auto min-h-screen overflow-y-auto justify-between relative ease-in-out px-8 pt-10 transition-all duration-300`}>
            <div className="flex flex-col gap-10">
                <div className="flex gap-4 items-center cursor-pointer" onClick={() => setOpen(!open)}>
                    <img 
                        src="/assets/logo/logoGDC.svg" 
                        alt="Logo GDCourse" 
                        className="w-15 h-12 sm:w-16 sm:h-14 transition-transform duration-300 hover:scale-110"
                    />
                    <h1 className={`text-heading text-3xl font-bold transition-all duration-300 ${!open && "hidden"}`}>GDCourse</h1>
                </div>
                <ul className={`flex flex-col transition-all duration-300 ${open ? "items-start" : "items-center"}`}>
                    {navItems.map((item, index) => (
                        <li key={index} className="list-none block h-12 mb-2 relative">
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                            `flex items-center w-full gap-4 text-xl transition-all duration-200
                            ${isActive
                                ? "text-blue"
                                : "text-gray-500 hover:text-blue hover:font-medium"
                            } 
                            ${open ? "px-1 py-2" : "p-2 justify-center"}`
                            }
                        >
                            {item.icon}
                            {open && <span>{item.name}</span>}
                        </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <button 
                onClick={handleLogout}
                className={`flex items-center cursor-pointer gap-4 mb-4 text-gray-500 hover:text-blue text-xl hover:font-medium transition-all duration-300 ${open ? "items-start" : "items-center justify-center"}`}
            >
                <IoLogOutOutline size="26"/>
                <span className={`${!open && "hidden"} transition-colors`}>Logout</span>
            </button>
        </nav>
    );
};