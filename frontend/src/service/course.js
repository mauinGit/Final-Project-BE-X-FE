const API_URL = import.meta.env.VITE_API_URL;

// Course
export const GetCourse = async () => {
    try {
        const res = await fetch(`${API_URL}/api/courses`);
        if(!res.ok) throw new Error("Failed to fetch course");

        const data = await res.json();

        return data.courses.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            cover: item.cover?.startsWith("http")
                ? item.cover
                : `${API_URL}/assets/${item.cover}`,
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
        const res = await fetch(`${API_URL}/api/courses/${id}`);
        if(!res.ok) throw new Error("Failed to fetch course");

        const data = await res.json();
        const item = data.course;

        return{
            id: item.id,
            title: item.title,
            description: item.description,
            cover: item.cover?.startsWith("http")
                ? item.cover
                : `${API_URL}/assets/${item.cover}`,
            videoUrl: item.video_url,
            category: item.category?.name || "Uncategorized",
        };
    } catch (error) {
        console.log("error");
        return null;
    }
};

// Create Course
export const CreateCourse = async (form) => {
    try {
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("videoUrl", form.videoUrl);
        formData.append("category", form.category);
        formData.append("description", form.description);
        if(form.cover) formData.append("cover", form.cover);

        const res = await fetch(`${API_URL}/api/courses`, {
            method: "POST",
            body: formData,
        });

        if(!res.ok) throw new Error("Failed to create course");

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error creating course:", error);
        throw error;        
    }
};

// Update Course
export const UpdateCourse = async (id, form) => {
    try {
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("videoUrl", form.videoUrl);
        formData.append("category", form.category);
        formData.append("description", form.description);
        if(form.cover) formData.append("cover", form.cover);

        const res = await fetch(`${API_URL}/api/courses/${id}`, {
            method: "PUT",
            body: formData,
        });

        if(!res.ok) throw new Error("Failed to update course");

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error updating course:", error);
        throw error;
    }
};