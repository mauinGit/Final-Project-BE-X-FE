import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useComment from "../../hooks/useComment";
import useAuth from "../../hooks/useAuth";

export default function CourseComment() {
    const { id: courseId } = useParams();
    const { user } = useAuth();
    const {
        comments,
        addComment,
        addReply,
        editComment,
        deleteComment,
        toggleLike,
    } = useComment(courseId);
    const [newComment, setNewComment] = useState("");
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        try {
            await addComment(newComment);
            setNewComment("");
            toast.success("Comment added!");
        } catch (error) {
            toast.error("Failed to add comment");
        }
    };

    const handleAddReply = async (commentId) => {
        if (!replyText.trim()) return;

        try {
            await addReply(commentId, replyText);
            setReplyingTo(null);
            setReplyText("");
            toast.success("Reply added!");
        } catch (error) {
            toast.error("Failed to add reply");
        }
    };
    
    const handleEdit = async (commentId) => {
        if (!editText.trim()) return;

        try {
            await editComment(commentId, editText);
            setEditingId(null);
            setEditText("");
            toast.success("Comment updated!");
        } catch (error) {
            toast.error("Failed to update comment");
        }
    };
    
    const handleDelete = async (commentId) => {
        if (!confirm("Are you sure you want to delete this comment?")) return;

        try {
            await deleteComment(commentId);
            toast.success("Comment deleted!");
        } catch (error) {
            toast.error("Failed to delete comment");
        }
    };    

    const handleLike = async (commentId) => {
        try {
            await toggleLike(commentId);
        } catch (error) {
            toast.error("Failed to like comment");
        }
    };

    return(
        <div className="flex flex-col max-w-2xl gap-8">
            {/* Input Comment */}
            <div className="flex items-center gap-3">
                <img
                    src={user?.avatar || "https://randomuser.me/api/portraits/women/3.jpg"}
                    alt="avatar"
                    className="w-14 h-14 rounded-full border-2 border-black"
                />
                <input
                    type="text"
                    placeholder="Write your comment here"
                    className="flex-1 px-4 py-2 text-xl text-gray-500 outline-none"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    onClick={handleAddComment}
                    className="text-white bg-blue border-2 border-black cursor-pointer hover:scale-[1.02] transition-transform rounded-full px-4 py-2"
                >
                    Comment
                </button>
            </div>

            {/* List Comment */}
            <div className="flex flex-col gap-6">
                {comments.length === 0 && (
                    <p className="text-gray-400 text-lg">No comments yet.</p>
                )}

                {comments.map((cmt) => (
                    <div key={cmt.ID} className="flex flex-row gap-3">
                        <img
                            src={cmt.user?.avatar || "https://randomuser.me/api/portraits/lego/1.jpg"}
                            alt="avatar"
                            className="w-14 h-14 rounded-full border-2 border-black"
                        />
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex justify-between items-start">
                                <p className="text-heading text-xl font-medium">
                                    {cmt.user?.name || "Anonymous"}
                                </p>
                                {user?.id === cmt.user_id && (
                                    <div className="flex gap-3 text-sm">
                                        <button
                                            onClick={() => {
                                                setEditingId(cmt.ID);
                                                setEditText(cmt.comment);
                                            }}
                                            className="text-blue hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(cmt.ID)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Edit Comment */}
                            {editingId === cmt.ID ? (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        className="flex-1 px-4 py-2 border rounded-full outline-none"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handleEdit(cmt.ID)}
                                        className="text-white bg-blue border-2 border-black rounded-full px-3 py-1"
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <p className="text-gray-500 text-xl">{cmt.comment}</p>
                            )}

                            {/* Like & Reply Comment */}
                            <div className="flex flex-row items-center gap-4 text-gray-500 text-xl mt-1">
                                <span
                                    className="flex items-center gap-1 cursor-pointer"
                                    onClick={() => handleLike(cmt.ID)}
                                >
                                    {cmt.is_liked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                                    {cmt.likes_count}
                                </span>
                                <span
                                    className="flex items-center gap-1 cursor-pointer"
                                    onClick={() => setReplyingTo(replyingTo === cmt.ID ? null : cmt.ID)}
                                >
                                    <BiCommentDetail /> {cmt.replies?.length || 0}
                                </span>
                            </div>

                            {/* List Replied */}
                            {cmt.replies?.length > 0 && (
                                <div className="mt-2 ml-6 flex flex-col gap-2">
                                    {cmt.replies.map((reply) => (
                                        <div key={reply.ID}>
                                            <p className="text-xl text-heading font-medium">
                                                {reply.user?.name || "Anonymous"}{" "}
                                                <span className="text-gray-500 text-xl">replied</span>
                                            </p>
                                            <p className="text-xl text-gray-500">{reply.comment}</p>
                                            <div
                                                className="text-xl text-gray-500 flex items-center gap-1 mt-1 cursor-pointer"
                                                onClick={() => handleLike(reply.ID)}
                                            >
                                                {reply.is_liked ? (
                                                    <AiFillHeart color="red" />
                                                ) : (
                                                    <AiOutlineHeart />
                                                )}{" "}
                                                {reply.likes_count}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Reply Input */}
                            {replyingTo === cmt.ID && (
                                <div className="mt-2 ml-6 flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="Write a reply..."
                                        className="flex-1 px-4 py-2 text-xl border rounded-full outline-none"
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handleAddReply(cmt.ID)}
                                        className="text-white bg-blue border-2 border-black rounded-full px-4 py-1"
                                    >
                                        Reply
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};