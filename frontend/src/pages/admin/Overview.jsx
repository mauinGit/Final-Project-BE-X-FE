import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import SideBarAdmin from "../../components/admin/SidebarAdmin";
import TopbarAdmin from "../../components/admin/TopbarAdmin";
import TableCourse from "../../components/admin/TableCourse";
import useCourse from "../../hooks/useCourse";
import useContact from "../../hooks/useContact";
import useAuth from "../../hooks/useAuth";

export default function Overview() {
    const { user } = useAuth();
    const { data: courses } = useCourse();
    const { contacts } = useContact();

    const totalCourse = courses?.length || 0;
    const totalContact = contacts?.length || 0;

    return(
        <section id="overview" className="font-Open Sans bg-secondBlue relative w-full flex min-h-screen overflow-hidden">
            <div className="h-auto">
                <SideBarAdmin />
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto max-h-screen">
                <TopbarAdmin />
                <div className="flex-1">
                    <div className="flex flex-col px-4 sm:px-6 lg:px-10 mb-5 gap-6">
                        <div className="flex flex-row gap-4 items-center mb-5">
                            <img 
                                src="/assets/icons/Waving Hand.png"
                                className="w-8 h-8" 
                                alt="Icon Waving Hand" 
                            />
                            <p className="text-yellow text-xl font-medium">Hey, welcome back {user?.name || "Admin"}</p>
                        </div>
                        <div className="flex flex-col gap-8 mb-8">
                            <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">Overview</h1>
                            <div className="flex flex-row gap-8 flex-wrap">
                                <div className="flex flex-col bg-white rounded-2xl gap-5 px-8 py-8">
                                    <div className="flex flex-row justify-between items-center">
                                        <img 
                                            src="/assets/icons/rectangle green.png" 
                                            alt="" 
                                            className="w-5 h-5"
                                        />
                                        <span className="text-gray-600 px-3 py-1 rounded-full text-lg font-semibold">
                                            Total Course
                                        </span>
                                    </div>
                                    <p className="text-3xl font-semibold text-heading border-b-4 border-green w-fit pb-2">
                                        {totalCourse}
                                    </p>
                                </div>
                                <div className="flex flex-col bg-white rounded-2xl gap-5 px-8 py-8">
                                    <div className="flex flex-row justify-between items-center">
                                        <img 
                                            src="/assets/icons/rectangle red.png" 
                                            alt="" 
                                            className="w-5 h-5"
                                        />
                                        <span className="text-gray-600 px-3 py-1 rounded-full text-lg font-semibold">
                                            Total Contact
                                        </span>
                                    </div>
                                    <p className="text-3xl font-semibold text-heading border-b-4 border-red w-fit pb-2">
                                        {totalContact}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">All Course</h1>
                                <div className="flex flex-row gap-2 items-center group cursor-pointer">
                                    <NavLink 
                                        to="/admin/courses"
                                        className="text-xl text-gray-500 group-hover:text-blue transition-colors"
                                    >
                                        View All 
                                    </NavLink>
                                    <IoIosArrowRoundForward 
                                        size="26"
                                        className="text-gray-500 group-hover:text-blue transition-colors" 
                                    />
                                </div>
                            </div>
                            <TableCourse />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};