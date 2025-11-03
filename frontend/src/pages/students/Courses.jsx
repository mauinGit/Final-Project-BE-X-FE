import { useContext, useState } from "react";
import { CategoryContext } from "../../App";
import SideBarStudent from "../../components/students/SideBarStudent";
import TopBar from "../../components/students/TopBar";
import CourseList from "../../components/courses/CourseList";
import DropdownCourse from "../../components/students/DropdownCourse";

export default function Courses() {
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <section id="coursesStudent" className="font-Open Sans bg-secondBlue relative w-full flex min-h-screen overflow-hidden">
            <div className="h-auto">
                <SideBarStudent />
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto max-h-screen">
                <TopBar onSearch={setSearchTerm} />
                <div className="flex-1">
                    <div className="flex flex-col px-4 sm:px-6 lg:px-10 mb-5 gap-6">
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">Courses</h1>
                            <DropdownCourse selected={selectedCategory} setSelected={setSelectedCategory}/>
                        </div>
                        <CourseList selectedCategory={selectedCategory} searchTerm={searchTerm} />
                    </div>
                </div>
            </div>
        </section>
    );
};