import { useEffect, useState } from "react";
import { GetCourseById } from "../../service/api";
import { useParams } from "react-router-dom";
import CourseComment from "../../components/courses/CourseComment";

export default function CourseDetail() {
    const { id } = useParams();
    const [detailCourse, setDetailCourse] = useState(null);

    useEffect(() => {
        if(!id) return;

        GetCourseById(id).then((data) => {
            setDetailCourse(data);

            const viewed = JSON.parse(localStorage.getItem("viewedCourses")) || [];
            const alreadyViewed = viewed.find(v => v.id === Number(id));

            if(!alreadyViewed) {
                viewed.push({
                    id: data.id,
                    title: data.title,
                    category: data.category
                });
                localStorage.setItem("viewedCourses", JSON.stringify(viewed));
            }
        })
    }, [id]);

    return(
        <section id="detailCourse" className="font-Open Sans p-6 relative w-full min-h-screen">
            <div className="flex flex-col gap-8 max-w-5xl mx-auto">
                <h1 className="text-heading text-5xl font-semibold">{detailCourse.title}</h1>
                <p className="text-gray-500 text-xl font-medium">{detailCourse.category}</p>

                <video 
                    className="w-full rounded-2xl border-2 border-black"
                    src={detailCourse.video}
                    controls
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