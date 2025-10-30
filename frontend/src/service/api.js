// Course
export const GetCourse = async () => {
    try {
        const res = await fetch("http://127.0.0.1:8080/api/courses");
        if(!res.ok) throw new Error("Failed to fetch course");

        const data = await res.json();

        return data.courses.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            cover: item.cover?.startsWith("http")
                ? item.cover
                : `http://127.0.0.1:8080/assets/${item.cover}`,
            videoUrl: item.video_url,
            category: item.category?.name || "Uncategorized",
        }));
    } catch (error) {
        console.log("error");
        return[];
    }
};

// Course Detail
export const GetCourseById = async (id) => {
    try {
        const res = await fetch(`http://127.0.0.1:8080/api/courses/${id}`);
        if(!res.ok) throw new Error("Failed to fetch course");

        const data = await res.json();
        const item = data.course;

        return{
            id: item.id,
            title: item.title,
            description: item.description,
            cover: item.cover?.startsWith("http")
                ? item.cover
                : `http://127.0.0.1:8080/assets/${item.cover}`,
            videoUrl: item.video_url,
            category: item.category?.name || "Uncategorized",
        };
    } catch (error) {
        console.log("error");
        return null;
    }
};

// User Student