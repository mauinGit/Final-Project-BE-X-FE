import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CategoryContext } from "../../App";
import RecomendedCourse from "../../components/courses/RecomendedCourse";
import SideBarStudent from "../../components/students/SideBarStudent";
import TopBar from "../../components/students/TopBar";
import useUserCourse from "../../hooks/useUserCourse";
import CourseCard from "../../components/courses/CourseCard";

export default function Dashboard() {
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
    const { myCourses } = useUserCourse();

    const inProgressCourses = myCourses.filter(
        (course) => course.progress > 0 && course.progress < 100
    );

    return(
        <section id="dashboard" className="font-Open Sans bg-secondBlue relative w-full flex min-h-screen overflow-hidden">
            <div className="h-auto">
                <SideBarStudent />
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto max-h-screen">
                <TopBar />
                <div className="flex-1">
                    <div className="px-4 lg:block hidden sm:px-6 lg:px-10 justify-center items-center mb-20">
                        <img 
                            src="/assets/images/bannerStudent.png" 
                            className="w-full"
                        />
                    </div>
                    {inProgressCourses.length > 0 && (
                        <div className="flex flex-col px-4 sm:px-6 lg:px-10 mb-10 gap-6">
                            <div className="flex justify-between items-center">
                                <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">
                                    Continue Learning
                                </h1>
                                <div className="flex flex-row gap-2 items-center">
                                    <NavLink 
                                        to="/student/myCourses"
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
                            <div className="grid md:grid-cols-3 gap-6">
                                {inProgressCourses.slice(0, 3).map((course) => (
                                    <CourseCard key={course.courseId} course={course} />
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col px-4 sm:px-6 lg:px-10 gap-6 mb-5">
                        <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">For You</h1>
                        <RecomendedCourse selectedCategory={selectedCategory}/>
                    </div>
                </div>
            </div>
        </section>
    );
};