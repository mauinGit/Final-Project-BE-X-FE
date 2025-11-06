const API_URL = import.meta.env.VITE_API_URL;

// Course
export const GetCourse = async () => {
    try {
        const res = await fetch(`${API_URL}/courses`);
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
            category: item.category || "Uncategorized",
            categoryId: item.category_id,
        }));
    } catch (error) {
        console.log("Error fetching courses:", error);
        return[];
    }
};

// Course Detail
export const GetCourseById = async (id) => {
    try {
        const res = await fetch(`${API_URL}/courses/${id}`);
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
            categoryId: item.category_id,
            overview: item.overview || "",
        };
    } catch (error) {
        console.log("Error fetching course:", error);
        return null;
    }
};

// Create Course
export const CreateCourse = async (form) => {
    try {
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("video_url", form.videoUrl);
        formData.append("category_id", form.category_id);
        formData.append("description", form.description);
        formData.append("overview", form.overview || form.description);
        if(form.cover) formData.append("cover", form.cover);

        const res = await fetch(`${API_URL}/courses`, {
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
        if (form.videoUrl instanceof File) {
            formData.append("video_url", form.videoUrl);
        }
        formData.append("category_id", form.category_id);
        formData.append("description", form.description);
        formData.append("overview", form.overview || form.description);
        if(form.cover instanceof File) formData.append("cover", form.cover);

        const res = await fetch(`${API_URL}/courses/${id}`, {
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

// Delete Course
export const DeleteCourse = async (id) => {
    try {
        const res = await fetch(`${API_URL}/courses/${id}`, {
            method: "DELETE",
        });

        if(!res.ok) throw new Error("Failed to delete course");

        return await res.json();
    } catch (error) {
        console.error("Error deleting course:", error);
        throw error
    }
};