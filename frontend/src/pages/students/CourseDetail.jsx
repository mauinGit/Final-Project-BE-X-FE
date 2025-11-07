import { useEffect, useRef, useState } from "react";
import { GetCourseById } from "../../service/course";
import { useParams } from "react-router-dom";
import CourseComment from "../../components/courses/CourseComment";
import useUserCourse from "../../hooks/useUserCourse";
import SideBarStudent from "../../components/students/SideBarStudent";
import TopBar from "../../components/students/TopBar";

export default function CourseDetail() {
    const { id } = useParams();
    const [detailCourse, setDetailCourse] = useState(null);
    const { startCourse, updateProgress } = useUserCourse();
    const [searchTerm, setSearchTerm] = useState("");
    const videoRef = useRef(null);
    const updateIntervalRef = useRef(null);

    useEffect(() => {
        if(!id) return;

        const loadCourse = async () => {
            try {
                const data = await GetCourseById(id);
                if(data) {
                    setDetailCourse(data);
                    await startCourse(id);
                }
            } catch (error) {
                console.error("Error fetching or starting course:", error);
            }
        };

        loadCourse();
    }, [id]);

    // Handle video progress tracking
    const handleVideoPlay = () => {
        // update progress setiap 5 detik
        updateIntervalRef.current = setInterval(() => {
            if(videoRef.current) {
                const currentTime = videoRef.current.currentTime;
                const duration = videoRef.current.duration;

                updateProgress(id, currentTime, duration)
                    .catch(console.error);
            }
        }, 5000); // update setiap 5 detik
    };

    const handleVideoPause = () => {
        if(updateIntervalRef.current) {
            clearInterval(updateIntervalRef.current);
        }

        // Update progres ketika dijeda/paused
        if(videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            updateProgress(id, currentTime, duration).catch(console.error);
        }
    };

    useEffect(() => {
        return() => {
            if(updateIntervalRef.current) {
                clearInterval(updateIntervalRef.current);
            }
        };
    }, []);

    return (
        <section id="detailCourse" className="font-Open Sans bg-secondBlue relative w-full flex min-h-screen overflow-hidden">
            {!detailCourse ? (
            <p className="text-center text-xl text-gray-500">Loading course detail...</p>
            ) : (
                <>
                    <div className="h-auto">
                        <SideBarStudent />
                    </div>
                    <div className="flex flex-col flex-1 overflow-y-auto max-h-screen">
                        <TopBar onSearch={setSearchTerm} />
                        <div className="flex-1">
                            <div className="flex flex-col px-4 sm:px-6 lg:px-10 mb-5 gap-6">
                                <div className="flex flex-col justify-between gap-5">
                                    <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">{detailCourse.title}</h1>
                                    <p className="text-gray-500 text-xl font-medium mb-5">{detailCourse.category}</p>

                                    <video 
                                        ref={videoRef}
                                        className="w-full rounded-2xl border-3 border-black mb-8"
                                        src={detailCourse.videoUrl}
                                        controls
                                        onPlay={handleVideoPlay}
                                        onPause={handleVideoPause}
                                        onEnded={handleVideoPause}
                                    />
                                    <div className="flex flex-col gap-5">
                                        <h1 className="text-heading text-2xl sm:text-3xl lg:text-3xl font-semibold">Overview</h1>
                                        <p className="text-gray-500 text-xl text-balance mb-8">{detailCourse.description}</p>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <h1 className="text-heading text-xl sm:text-2xl lg:text-2xl font-semibold">20 Comments</h1>
                                        <CourseComment />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};