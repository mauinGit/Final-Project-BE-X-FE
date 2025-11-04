const API_URL = import.meta.env.VITE_API_URL;

// Start Course
export const StartCourse = async (courseId) => {
    try {
        const res = await fetch(`${API_URL}/userscourses/${courseId}/start`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();
        if(!res.ok) throw new Error(data.error || "Failed to start course");

        return data;
    } catch (error) {
        console.error("Start course error:", error.message);
        throw error;
    };
};

// Update Progres Course
export const UpdateProgress = async (courseId, currentTime, duration) => {
    try {
        const formData = new FormData();
        formData.append("current_time", currentTime.toString());
        formData.append("duration", duration.toString());

        const res = await fetch(`${API_URL}/userscourses/${courseId}/progress`, {
            method: "PATCH",
            credentials: "include",
            body: formData,
        });

        const data = await res.json();
        if(!res.ok) throw new Error(data.error || "Failed to update progress");

        return data;
    } catch (error) {
        console.error("Update progress error:", error.message);
        throw error;        
    };
};

// Get User Course
export const GetMyCourse = async () => {
    try {
        const res = await fetch(`${API_URL}/userscourses`, {
            method: "GET",
            credentials: "include",
        });

        if(res.status === 401) {
            console.warn("User not authenticated");
            return [];
        }

        const data = await res.json();
        if(!res.ok) throw new Error(data.error || "Failed to fetch my courses");

        return data.map((item) => ({
            courseId: item.course_id,
            title: item.title,
            cover: item.cover?.startsWith("http")
                ? item.cover
                : `${API_URL}/assets/${item.cover}`,
            category: item.category,
            progress: item.progress || 0,
            postedAt: item.posted_at,
        }));
    } catch (error) {
        console.error("Get my courses error:", error.message);
        return [];
    };
};