import { useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";

export default function CourseCard({ course }) {
    const [isSaved, setIsSaved] = useState(false);

    return(
        <div className="flex flex-col gap-5 cursor-pointer">
            <img 
                src={course.image} 
                alt={course.title}
                className="border-2 border-black rounded-t-4xl h-1/2 w-full object-cover"
            />
            <div className="flex flex-row justify-between">
                <h3 className="text-xl text-gray-500">{course.category}</h3>
                <button
                    onClick={() => setIsSaved(!isSaved)}
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
    );
};