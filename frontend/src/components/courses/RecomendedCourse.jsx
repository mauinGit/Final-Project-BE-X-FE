import { useEffect, useState } from "react";
import CourseList from "./CourseList";

export default function RecomendedCourse({ allCourses }) {
    const [recomended, setRecomended] = useState([]);

    useEffect(() => {
        const viewed = JSON.parse(localStorage.getItem("viewedCourses")) || [];
        if(viewed.length === 0) return;

        const freq = {};
        viewed.forEach(v => {
            freq[v.category] = (freq[v.category] || 0) + 1;
        });

        // Cari kategori yg paling sering dibuka
        const topCategory = Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];

        // Ambil course yg kategorinya sama dari semua list course
        const rec = allCourses.filter(c => c.category === topCategory);
        setRecomended(rec);
    }, [allCourses]);

    return(
        <CourseList courses={recomended} />
    );
};