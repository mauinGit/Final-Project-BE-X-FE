import { useEffect, useRef, useState } from "react";
import { GetCourseById } from "../../service/course";
import { useParams } from "react-router-dom";
import CourseComment from "../../components/courses/CourseComment";
import useUserCourse from "../../hooks/useUserCourse";

export default function CourseDetail() {
    const { id } = useParams();
    const [detailCourse, setDetailCourse] = useState(null);
    const { startCourse, updateProgress } = useUserCourse();
    const videoRef = useRef(null);
    const updateIntervalRef = useRef(null);

    useEffect(() => {
        if(!id) return;

        GetCourseById(id).then((data) => {
            setDetailCourse(data);
        });

        // Mulai video course ketika komponent dirender
        startCourse(id).catch(console.error);
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

    return(
        <section id="detailCourse" className="font-Open Sans p-6 relative w-full min-h-screen">
            <div className="flex flex-col gap-8 max-w-5xl mx-auto">
                <h1 className="text-heading text-5xl font-semibold">{detailCourse.title}</h1>
                <p className="text-gray-500 text-xl font-medium">{detailCourse.category}</p>

                <video 
                    ref={videoRef}
                    className="w-full rounded-2xl border-2 border-black"
                    src={detailCourse.videoUrl}
                    controls
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onEnded={handleVideoPause}
                />
                <div className="flex flex-col gap-5">
                    <h1 className="text-heading text-5xl font-semibold">Overview</h1>
                    <p className="text-gray-500 text-xl text-balance">{detailCourse.description}</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-heading text-3xl font-semibold">20 Comments</h1>
                    {/* component comments */}
                    <CourseComment />
                </div>
            </div>
        </section>
    );
};