import CourseCard from "./CourseCard";
import { GetCourse } from "../../service/course";
import { useEffect, useState } from "react";
import useUserCourse from "../../hooks/useUserCourse";
import useCourse from "../../hooks/useCourse";

export default function CourseList({ selectedCategory = "All", searchTerm = "" }) {
    const { data: courses, error: courseError } = useCourse();
    const { myCourses, error: userCourseError } = useUserCourse();

    if (courseError || userCourseError) {
        return <p className="text-center text-xl text-red-500">Failed to load courses</p>;
    }

    const courseWithProgress = courses.map((course) => {
        const userCourse = myCourses.find((mc) => mc.courseId === course.id);
        return {
            ...course,
            progress: userCourse?.progress || 0,
            hasStarted: !!userCourse,
        };
    });

    // Filter based by category & search
    const filteredCourses = courseWithProgress.filter((course) => {
        const matchesCategory = 
            selectedCategory === "All" || course.category === selectedCategory;

        const matchesSearch = course.title
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

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