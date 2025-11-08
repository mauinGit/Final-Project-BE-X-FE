const API_URL = import.meta.env.VITE_API_URL;

// Get Comment Course
export const GetCommentsByCourse = async (courseId) => {
    try {
        const res = await fetch(`${API_URL}/comments/courses/${courseId}`, {
            method: "GET",
            credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch comments");

        const data = await res.json();
        return data || [];
    } catch (error) {
        console.error("Error fetching comments:", error);
        return [];
    }
};

// Create Comment
export const CreateComment = async (courseId, commentText) => {
    try {
        const res = await fetch(`${API_URL}/comments/courses/${courseId}`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ comment: commentText }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to create comment");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error creating comment:", error);
        throw error;
    }
};

// Create Reply Comment
export const CreateReply = async (commentId, replyText) => {
    try {
        const res = await fetch(`${API_URL}/comments/${commentId}/reply`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ comment: replyText }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to create reply");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error creating reply:", error);
        throw error;
    }
};

// Edit Comment
export const EditComment = async (commentId, newText) => {
    try {
        const res = await fetch(`${API_URL}/comments/${commentId}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ comment: newText }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to edit comment");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error editing comment:", error);
        throw error;
    }
};

// Delete Comment
export const DeleteComment = async (commentId) => {
    try {
        const res = await fetch(`${API_URL}/comments/${commentId}`, {
            method: "DELETE",
            credentials: "include",
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to delete comment");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error deleting comment:", error);
        throw error;
    }
};

// Like Comment
export const ToggleLike = async (commentId) => {
    try {
        const res = await fetch(`${API_URL}/comments/${commentId}/like`, {
            method: "POST",
            credentials: "include",
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to toggle like");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error toggling like:", error);
        throw error;
    }
};