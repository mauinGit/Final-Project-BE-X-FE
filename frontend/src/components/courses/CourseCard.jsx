import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CourseCard({ course }) {
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        if (course.videoUrl) {
            const video = document.createElement("video");
            video.preload = "metadata";
            video.src = course.videoUrl;

            const handleLoaded = () => {
                const minutes = Math.floor(video.duration / 60);
                const seconds = Math.floor(video.duration % 60);
                setDuration(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
            };

            video.addEventListener("loadedmetadata", handleLoaded);

            if (video.readyState >= 1) {
                handleLoaded();
            }

            return () => video.removeEventListener("loadedmetadata", handleLoaded);
        }
    }, [course.videoUrl]);

    return(
        <NavLink
            to={`/student/dashboard/courses/${course.id}`}
            className="flex flex-col gap-4 cursor-pointer group"
        >
            <div className="relative rounded-t-4xl overflow-hidden border-2 border-black">
                <img
                    src={course.cover}
                    alt={course.title}
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {(course.duration || duration)&& (
                    <span className="absolute bottom-5 right-3 z-30 backdrop-blur-xl bg-black/30 text-white text-base font-semibold px-2 py-0.5 rounded-lg tracking-wide">
                        {course.duration || duration}
                    </span>
                )}
                {(course.hasStarted || course.progress > 0) && (
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-200 z-10">
                        <div
                            className="h-full bg-blue transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                        ></div>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-5 cursor-pointer flex-grow">
                <div className="flex flex-row justify-between">
                    <h3 className="text-xl leading-tight line-clamp-2 text-gray-500">{course.category}</h3>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl text-heading">{course.title}</h1>
                    <p className="text-xl text-gray-500 leading-relaxed line-clamp-3">{course.description}</p>
                </div>
            </div>
        </NavLink>
    );
};