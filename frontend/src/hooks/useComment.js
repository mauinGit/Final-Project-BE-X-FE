import { useEffect, useState } from "react";
import {
    GetCommentsByCourse,
    CreateComment,
    CreateReply,
    EditComment,
    DeleteComment,
    ToggleLike,
} from "../service/comment";

export default function useComment(courseId = null) {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    // Fetch Comment by Course ID
    const fetchComments = async () => {
        if (!courseId) return;

        setError(null);
        try {
            const data = await GetCommentsByCourse(courseId);
            setComments(data);
        } catch (err) {
            setError(err.message);
        } 
    };

    // Create new Comment
    const addComment = async (commentText) => {
        if (!courseId || !commentText.trim()) return;

        try {
            const newComment = await CreateComment(courseId, commentText);
            await fetchComments();
            return newComment;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };
    
    // Reply Comment
    const addReply = async (commentId, replyText) => {
        if (!commentId || !replyText.trim()) return;

        try {
            const newReply = await CreateReply(commentId, replyText);
            await fetchComments();
            return newReply;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };    

    // Edit Comment
    const editComment = async (commentId, newText) => {
        if (!commentId || !newText.trim()) return;

        try {
            const updatedComment = await EditComment(commentId, newText);
            setComments((prev) =>
                prev.map((comment) => {
                    if (comment.ID === commentId) {
                        return { ...comment, comment: newText };
                    }
                    if (comment.replies) {
                        return {
                            ...comment,
                            replies: comment.replies.map((reply) =>
                                reply.ID === commentId
                                    ? { ...reply, comment: newText }
                                    : reply
                            ),
                        };
                    }
                    return comment;
                })
            );
            return updatedComment;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };    

    // Delete Comment
    const deleteComment = async (commentId) => {
        if (!commentId) return;

        try {
            await DeleteComment(commentId);
            setComments((prev) =>
                prev
                    .filter((comment) => comment.ID !== commentId)
                    .map((comment) => ({
                        ...comment,
                        replies: comment.replies
                            ? comment.replies.filter((reply) => reply.ID !== commentId)
                            : [],
                    }))
            );
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };  
    
    // Like Comment
    const toggleLike = async (commentId) => {
        if (!commentId) return;

        try {
            const result = await ToggleLike(commentId);
            setComments((prev) =>
                prev.map((comment) => {
                    if (comment.ID === commentId) {
                        return {
                            ...comment,
                            likes_count:
                                result.message === "liked"
                                    ? comment.likes_count + 1
                                    : comment.likes_count - 1,
                        };
                    }
                    // Check reply comment
                    if (comment.replies) {
                        return {
                            ...comment,
                            replies: comment.replies.map((reply) =>
                                reply.ID === commentId
                                    ? {
                                          ...reply,
                                          likes_count:
                                              result.message === "liked"
                                                  ? reply.likes_count + 1
                                                  : reply.likes_count - 1,
                                      }
                                    : reply
                            ),
                        };
                    }
                    return comment;
                })
            );
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };    

    useEffect(() => {
        if(courseId) {
            fetchComments();
        }
    }, [courseId]);

    return {
        comments,
        error,
        addComment,
        addReply,
        editComment,
        deleteComment,
        toggleLike,
        refetchComments: fetchComments,
    };
};