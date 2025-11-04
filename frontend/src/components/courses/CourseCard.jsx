import { useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function CourseCard({ course }) {
    const [isSaved, setIsSaved] = useState(false);

    return(
        <NavLink
            to={`/student/dashboard/courses/${course.id}`}
            className="flex flex-col gap-4 cursor-pointer group"
        >
            <div className="relative rounded-2xl overflow-hidden border-2 border-black">
                <img
                    src={course.cover}
                    alt={course.title}
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {course.hasStarted && course.progress > 0 && (
                    <div className="absolute top-3 left-3 bg-black bg-opacity-80 text-white px-3 py-1.5 rounded-full text-xl font-medium flex items-center gap-2">
                        <div className="w-12 bg-gray-400 rounded-full h-1.5">
                            <div 
                                className="h-full bg-blue rounded-full"
                                style={{ width: `${course.progress}%` }}
                            >
                            </div>
                        </div>
                        <span>{Math.round(course.progress)}%</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-5 cursor-pointer">
                {/* <img 
                    src={course.image} 
                    alt={course.title}
                    className="border-2 border-black rounded-t-4xl h-1/2 w-full object-cover"
                /> */}
                <div className="flex flex-row justify-between">
                    <h3 className="text-xl text-gray-500">{course.category}</h3>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setIsSaved(!isSaved);
                        }}
                        className="text-gray-500 hover:text-blue cursor-pointer"
                        aria-label="Bookmark"
                    >
                        {isSaved ? (
                            <IoBookmark className="size-7" />
                            ) : (
                            <IoBookmarkOutline className="size-7" />
                            )}
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl text-heading">{course.title}</h1>
                    <p className="text-xl text-gray-500">{course.description}</p>
                </div>
            </div>
        </NavLink>
    );
};