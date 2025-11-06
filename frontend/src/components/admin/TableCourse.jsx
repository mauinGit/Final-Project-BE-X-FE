import { NavLink } from "react-router-dom";
import useCourse from "../../hooks/useCourse";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { PiTrashSimple } from "react-icons/pi";

export default function TableCourse() {
    const { data: courses, deleteCourse, error } = useCourse();

    if (error) return <p className="text-red-500">Failed to fetch courses.</p>;

    return(
        <div className="w-full rounded-xl overflow-hidden bg-white p-2 px-8 pl-8">
            <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="w-42 p-4 px-4 tracking-wide text-left text-xl font-semibold text-heading">Title</th>
                            <th className="w-32 p-4 tracking-wide text-left text-xl font-semibold text-heading">Video URL</th>
                            <th className="p-4 tracking-wide text-left text-xl font-semibold text-heading">Description</th>
                            <th className="w-26 p-4 tracking-wide text-left text-xl font-semibold text-heading">Cover</th>
                            <th className="w-32 p-4 tracking-wide text-left text-xl font-semibold text-heading">Category</th>
                            <th className="w-36 p-4 pl-4 tracking-wide text-left text-xl font-semibold text-heading">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.id} className="border-b border-gray-200 relative">
                                <td className="py-4 px-4 whitespace-nowrap text-xl text-gray-500">{course.title}</td>
                                <td className="py-4 p-4 whitespace-nowrap text-xl text-gray-500">
                                    {course.videoUrl ? (
                                        <a
                                            href={course.videoUrl.startsWith("http") 
                                                ? course.videoUrl 
                                                : `${import.meta.env.VITE_API_URL}/assets/${course.videoUrl}`
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue font-medium hover:underline"
                                        >
                                            View Video
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td className="py-4 px-4 whitespace-nowrap text-xl text-gray-500">{course.description?.slice(0, 40)}</td>
                                <td className="py-4 px-4 whitespace-nowrap text-xl text-gray-500">
                                    {course.cover ? (
                                        <img
                                            src={course.cover}
                                            alt={course.title}
                                            className="w-20 h-16 object-cover rounded-md"
                                        />
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td className="py-4 px-4 whitespace-nowrap text-xl text-gray-500">{course.category}</td>
                                <td className="py-4 px-4 whitespace-nowrap text-xl flex flex-row gap-3 text-gray-500">
                                    <button className="bg-secondaryBlue py-3 px-3 rounded-xl hover:bg-green hover:text-white">
                                        <NavLink
                                            to={`/admin/editCourse/${course.id}`}
                                        >
                                            <FiEdit size= "24" style={{ strokeWidth: 1.5 }} />
                                        </NavLink>
                                    </button>
                                    <button 
                                        onClick={() => {
                                            if (confirm("Are you sure you want to delete this course?")) {
                                                deleteCourse(course.id)
                                                .then(() => toast.success("Course deleted successfully!"))
                                                .catch(() => toast.error("Failed to delete course."));
                                            }
                                        }}
                                        className="bg-secondaryBlue py-3 px-3 rounded-xl cursor-pointer hover:bg-red hover:text-white"
                                    >
                                        <PiTrashSimple size= "24" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};