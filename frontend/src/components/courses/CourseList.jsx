import CourseCard from "./CourseCard";
import { GetCourse } from "../../service/course";
import { useEffect, useState } from "react";
import useUserCourse from "../../hooks/useUserCourse";
import { progress } from "framer-motion";

// const dummyCourses = [
//     {
//         id: 1,
//         title: "Introduction to UI/UX Design",
//         category: "UI/UX",
//         description: "Learn the basics of user interface and user experience design, from wireframing to prototyping.",
//         image: "/assets/courses/intro-uiux.jpg"
//     },
//     {
//         id: 2,
//         title: "Front-End Development with React",
//         category: "Front-End",
//         description: "Master React to build modern, interactive websites with reusable components.",
//         image: "/assets/courses/react-fe.jpeg"            
//     },
//     {
//         id: 3,
//         title: "Mobile Development with Flutter",
//         category: "Mobile Development",
//         description: "Start building cross-platform mobile apps with Flutter and Dart.",
//         image: "/assets/courses/flutter-mobdev.jpeg"            
//     }
// ];


export default function CourseList({ selectedCategory }) {
    const [courses, setCourses] = useState([]);
    const { myCourses } = useUserCourse();

    useEffect(() => {
        GetCourse().then(setCourses);
    }, []);

    const courseWithProgress = courses.map((course) => {
        const userCourse = myCourses.find((mc) => mc.courseId === course.id);
        return {
            ...course,
            progress: userCourse?.progress || 0,
            hasStarted: !!userCourse,
        };
    });

    const filteredCourses = 
        selectedCategory === "All"
            ? courseWithProgress
            : courseWithProgress.filter((course) => course.category === selectedCategory);

    return (
        <div className="grid md:grid-cols-3 gap-8 mt-5">
            {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                    <CourseCard 
                        key={course.id}
                        course={course}
                    />
                ))
            ) : (
                <p className="text-center col-span-full text-xl text-gray-500">No courses found</p>
            )}
        </div>
    );

};