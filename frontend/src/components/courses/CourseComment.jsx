import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

export default function CourseComment() {
    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Kevin",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            text: "Hey, guys I’m having trouble understanding how to add assets in Figma. Any tips?",
            likes: 10,
            replies: [
                {
                id: 11,
                name: "Emily",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                likes: 2,
                },
                {
                id: 12,
                name: "Richard",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                likes: 0,
                },
            ],
        },
        {
            id: 2,
            name: "Rosie",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            likes: 5,
            replies: [],
        },
    ]);

    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if(!newComment.trim()) return;
        const newCmt = {
            id: Date.now(),
            name: "You",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
            text: newComment,
            likes: 0,
            replies: [],
        };
        setComments([newCmt, ...comments]);
        setNewComment("");
    };

    return(
        <div className="flex flex-col max-w-2xl gap-8">
            <div className="flex items-center gap-3">
                <img 
                    src="https://randomuser.me/api/portraits/women/3.jpg" 
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
                    className="text-white bg-blue border-2 border-black rounded-full px-4 py-2"
                >
                    Comment
                </button>
            </div>

            {/* List Comment */}
            <div className="flex flex-col gap-6">
                {comments.map((cmt) => (
                    <div key={cmt.id} className="flex flow-row gap-3">
                        <img 
                            src={cmt.avatar} 
                            alt="avatar"
                            className="w-14 h-14 rounded-full border-2 border-black"
                        />
                        <div className="flex flex-col gap-4">
                            <p className="text-heading text-xl font-medium">{cmt.name}</p>
                            <p className="text-gray-500 text-xl">{cmt.text}</p>
                            <div className="flex flex-row items-center gap-4 text-gray-500 text-xl mt-1">
                                <span className="flex items-center gap-1 cursor-pointer">
                                    <AiOutlineHeart /> {cmt.likes}
                                </span>
                                <span className="flex items-center gap-1 cursor-pointer">
                                    <BiCommentDetail /> {cmt.replies.length}
                                </span>
                            </div>

                            {/* Reply List */}
                            {cmt.replies.length > 0 && (
                                <div className="mt-2 ml-6 flex flex-col gap-2">
                                    {cmt.replies.map((reply) =>(
                                        <div key={reply.id}>
                                            <p className="text-xl text-heading font-medium">{reply.name} <span className="text-gray-500 text-xl">replied</span></p>
                                            <p className="text-xl text-gray-500">{reply.text}</p>
                                            <div className="text-xl text-gray-500 flex items-center gap-1 mt-1">
                                                <AiOutlineHeart /> {reply.likes}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};