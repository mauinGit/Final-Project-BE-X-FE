import CourseCard from "../../components/courses/CourseCard";
import SideBarStudent from "../../components/students/SideBarStudent";
import TopBar from "../../components/students/TopBar";
import useUserCourse from "../../hooks/useUserCourse";

export default function MyCourses() {
    const { myCourses } = useUserCourse();

    const inProgressCourses = myCourses.filter(
        (course) => course.progress > 0 && course.progress < 100
    );
    
    const completedCourses = myCourses.filter(
        (course) => course.progress === 100
    );

    return(
        <section id="myCourses" className="font-Open Sans bg-secondBlue relative w-full flex min-h-screen overflow-hidden">
            <div className="h-auto">
                <SideBarStudent />
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto max-h-screen">
                <TopBar />
                <div className="flex-1">
                    {/* Continue Learning Section */}
                    {inProgressCourses.length > 0 && (
                        <div className="flex flex-col px-4 sm:px-6 lg:px-10 mb-5 gap-6">
                            <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">
                                Continue Learning
                            </h1>
                            <div className="grid md:grid-cols-3 gap-6">
                                {inProgressCourses.map((course) => (
                                    <CourseCard key={course.courseId} course={course} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* All Courses Section */}
                    <div className="flex flex-col px-4 sm:px-6 lg:px-10 mb-5 gap-6">
                        <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">
                            All Courses
                        </h1>
                        {myCourses.length === 0 ? (
                            <p className="text-xl text-gray-500">
                                You haven't enrolled in any courses yet.
                            </p>
                        ) : (
                            <div className="grid md:grid-cols-3 gap-6">
                                {myCourses.map((course) => (
                                    <CourseCard key={course.courseId} course={course} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};