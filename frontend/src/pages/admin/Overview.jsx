import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import SideBarAdmin from "../../components/admin/SidebarAdmin";
import TopbarAdmin from "../../components/admin/TopbarAdmin";

export default function Overview() {
    return(
        <section id="overview" className="font-Open Sans bg-secondBlue relative w-full flex">
            <SideBarAdmin />
            <div className="flex flex-col flex-1 min-h-screen">
                <TopbarAdmin />
                <div className="flex-1">
                    <div className="flex flex-col px-4 sm:px-6 lg:px-10 mb-5 gap-6">
                        <div className="flex flex-row gap-4 items-center">
                            <img 
                                src="/assets/icons/Waving Hand.png"
                                className="w-8 h-8" 
                                alt="Icon Waving Hand" 
                            />
                            <p className="text-yellow text-xl font-medium">Hey, welcome back Admin</p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">Overview</h1>
                            
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">All Course</h1>
                            <div className="flex flex-row gap-2 items-center">
                                <NavLink 
                                    to="/admin/courses"
                                    className="text-xl text-gray-500"
                                >
                                    View All 
                                </NavLink>
                                <IoIosArrowRoundForward 
                                    size="26"
                                    className="text-gray-500" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};