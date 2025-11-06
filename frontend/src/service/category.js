const API_URL = import.meta.env.VITE_API_URL;

// Categories Course
export const GetCategories = async () => {
    try {
        const res = await fetch(`${API_URL}/categories`, {
            method: "GET",
            credentials: "include",
        });
        if(!res.ok) throw new Error("Failed to fetch categories");

        const data = await res.json();
        console.log("Category response:", data);
        return data.Category || data.category || [];
    } catch (error) {
        console.error("Error fetching categories:", error);
        return[];
    }
};

// Categoris Course By Id
export const GetCategoryById = async (id) => {
    try {
        const res = await fetch(`${API_URL}/categories/${id}`, {
            credentials: "include",
        });

        if(!res.ok) throw new Error("Failed to fetch category");

        const data = await res.json();

        return{
            id: id,
            name: data.name,
            course: data.course || [],
        };
    } catch (error) {
        console.error("Get category error:", error);
        return null;
    }
};

// Create Category Course
export const CreateCategory = async (name) => {
    try {
        const res = await fetch(`${API_URL}/categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ name }),
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.error || "Failed to create category");

        return data;
    } catch (error) {
        console.error("Create category error:", error);
        throw error;
    }
};

// Update Category Course
export const UpdateCategory = async (id, name) => {
    try {
        const res = await fetch(`${API_URL}/categories/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ name }),
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.error || "Failed to update category");

        return data;
    } catch (error) {
        console.error("Update category error:", error);
        throw error;
    }
};

// Delete Category Course
export const DeleteCategory = async (id) => {
    try {
        const res = await fetch(`${API_URL}/categories/${id}`, {
            method: "DELETE",
            credentials: "include",
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.error || "Failed to delete category");

        return data;
    } catch (error) {
        console.error("Delete category error:", error);
        throw error;
    }
};