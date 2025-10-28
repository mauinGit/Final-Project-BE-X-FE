import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { GoBook } from "react-icons/go";
import { PiUser } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

export default function SideBarAdmin() {
    const [open, setOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const navItems = [
        { name: "Overview", path: "/admin/overview", icon: <RxDashboard size={24} /> },
        { name: "Courses", path: "/admin/courses", icon: <GoBook size={24} /> },
        { name: "Users", path: "/admin/users", icon: <PiUser size={24} /> },
    ];

    return(
        <>
            {/* Menu Buttoon for Mobile */}
            <div className="lg:hidden fixed top-0 left-0 w-full bg-white flex items-center justify-between px-4 py-3 z-50">
                <div className="flex gap-4 items-center">
                    <img 
                        src="/assets/logo/logoGDC.svg" 
                        alt="Logo GDCourse" 
                        className="w-15 h-12 sm:w-16 sm:h-14 transition-transform duration-300 hover:scale-110"
                    />
                    <h1 className="text-heading text-2xl font-bold">GDCourse</h1>
                </div>
                <button
                    className="text-heading px-4"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <HiMenuAlt3 size={24} />
                </button>
            </div>

            {/* Sidebar */}
            <nav className={`
                    ${open ? "lg:w-72 lg:p-5 lg:pt-6" : "lg:w-24 lg:p-4 lg:pt-6"} 
                    ${mobileOpen ? "pt-16" : "pt-14 lg:pt-0"}
                    ${mobileOpen ? "translate-x-0 w-full" : "-translate-x-full lg:translate-x-0"}
                    fixed top-0 left-0 lg:static pt-14 lg:pt-0 flex flex-col bg-white h-screen z-40 min-h-screen justify-between ease-in-out transition-all duration-300`}>
                <div className="flex flex-col px-2 pt-4 gap-10 overflow-y-auto">
                    <div className="hidden lg:flex gap-4 items-center cursor-pointer" onClick={() => setOpen(!open)}>
                        <img 
                            src="/assets/logo/logoGDC.svg" 
                            alt="Logo GDCourse" 
                            className="w-15 h-12 sm:w-16 sm:h-14 transition-transform duration-300 hover:scale-110"
                        />
                        <h1 className={`text-heading text-3xl font-bold transition-all duration-300 ${!open && "hidden"}`}>GDCourse</h1>
                    </div>
                    <ul className={`flex flex-col transition-all duration-300 
                            ${open ? "items-start" : "items-center"}
                            ${mobileOpen ? "px-2" : "px:0"}`}>
                        {navItems.map((item, index) => (
                            <li key={index} className="list-none block h-12 mb-2 relative">
                            <NavLink
                                to={item.path}
                                onClick={() => setMobileOpen(false)}
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
                    className={`flex items-center cursor-pointer gap-4 mb-4 text-gray-500 hover:text-blue text-xl hover:font-medium transition-all duration-300 ${open ? "items-start px-6" : "items-center justify-center"}`}
                >
                    <IoLogOutOutline size="26"/>
                    <span className={`${!open && "hidden"} transition-colors`}>Logout</span>
                </button>
            </nav>  
        </>
    );
};