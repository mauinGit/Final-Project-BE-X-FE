import { NavLink, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CategoryContext } from "../../App";
import toast from "react-hot-toast";
import SideBarAdmin from "../../components/admin/SidebarAdmin";
import TopbarAdmin from "../../components/admin/TopbarAdmin";
import DropDownLong from "../../components/admin/DropDownLong";
import useCourse from "../../hooks/useCourse";

export default function EditCourse() {
    const { id } = useParams();
    const { data: course, updateCourse } = useCourse(id);
    const [fileName, setFileName] = useState("No file chosen");
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
    const [form, setForm] = useState({
        title: "",
        videoUrl: "",
        category: "",
        cover: null,
        description: "",
    });

    useEffect(() => {
        if(course) {
            setForm({
                title: course.title || "",
                videoUrl: course.videoUrl || "",
                category: course.category || "",
                cover: course.cover || null,
                description: course.description || "",
            });
        }
    }, [course]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateCourse(form);
            toast.success("Course update successfully!")
        } catch (error) {
            console.error("Failed to update:", error);
            toast.error("Failed to update course")
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            setFileName(file.name);
            setForm({
                ...form,
                cover: file,
            });
        } else {
            setFileName("No file chosen");
            setForm({
                ...form,
                cover: null,
            });
        }
    };

    return(
        <section id="addCourse" className="font-Open Sans bg-secondBlue relative w-full flex">
            <SideBarAdmin />
            <div className="flex flex-col flex-1 min-h-screen">
                <TopbarAdmin />
                <div className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col w-full relative max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 border-2 border-black bg-white items-center gap-10 z-10 px-4 sm:px-6 lg:px-10 mb-5">
                        <img 
                            src="/assets/logo/logoGDC.svg" 
                            alt="Logo GDGOC UNSRI"
                            className="absolute top-[-20px] right-[-16px] sm:top-[-32px] sm:right-[-20px] w-14 h-14 sm:w-20 sm:h-20 rotate-12"
                        />
                        <div className="flex flex-col gap-5 items-center">
                            <h1 className="text-3xl sm:text-4xl text-heading font-bold">Edit Course</h1>
                            <p className="text-xl text-gray-500 text-center">Update course information, category, and cover to keep it up to date</p>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 items-center w-full">
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="title" className="text-xl font-medium text-heading">Title</label>
                                    <input 
                                        type="text" 
                                        id="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        placeholder="Enter your title course"
                                        className="w-full rounded-full px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="videoUrl" className="text-xl font-medium text-heading">Video URL</label>
                                    <input 
                                        type="url" 
                                        id="videoUrl"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Enter your video url"
                                        className="w-full rounded-full px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="category" className="text-xl font-medium text-heading">Category</label>
                                <DropDownLong selected={selectedCategory} setSelected={setSelectedCategory} />
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="cover" className="text-xl font-medium text-heading">Cover</label>
                                <div className="flex w-full rounded-full bg-secondaryBlue text-xl text-gray-500 overflow-hidden">
                                    <label
                                        htmlFor="cover"
                                        className="bg-gray-200 text-heading px-5 py-3 cursor-pointer hover:bg-gray-300 transition whitespace-nowrap"
                                    >
                                        Choose File
                                    </label>
                                    <span className="flex-1 px-4 py-3 truncate">{fileName}</span>
                                </div>
                                <input
                                    type="file"
                                    id="cover"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="description" className="text-xl font-medium text-heading">Description</label>
                                    <textarea 
                                        rows="5"
                                        id="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Enter course description"
                                        className="w-full rounded-3xl px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                            </div>
                            <div className="flex flex-row w-full gap-5 items-center">
                                <NavLink
                                    to="/admin/courses"
                                    className="bg-white text-center text-xl w-full text-heading border-2 border-black px-5 py-3 rounded-full hover:scale-[1.02] transition-transform cursor-pointer"
                                >
                                    Cancel
                                </NavLink>
                                <button
                                    type="submit"
                                    className="bg-blue text-white text-xl border-2 border-black rounded-full px-5 py-3 w-full hover:scale-[1.02] transition-transform cursor-pointer"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};