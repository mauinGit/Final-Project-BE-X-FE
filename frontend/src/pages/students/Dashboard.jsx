import { useContext } from "react";
import { CategoryContext } from "../../App";
import RecomendedCourse from "../../components/courses/RecomendedCourse";
import SideBarStudent from "../../components/students/SideBarStudent";


export default function Dashboard() {
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

    return(
        <section id="dashboard" className="font-Open Sans bg-secondBlue relative w-full min-h-screen flex">
            <SideBarStudent />
            <div className="flex-1">
                <div className="px-4 lg:block hidden sm:px-6 lg:px-10 justify-center items-center mb-20">
                    <img 
                        src="/assets/images/bannerStudent.png" 
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col px-4 sm:px-6 lg:px-10 mb-20 gap-6">
                    <h1 className="text-4xl text-heading font-semibold">Continue Learning</h1>
                </div>
                <div className="flex flex-col px-4 sm:px-6 lg:px-10 gap-6">
                    <h1 className="text-4xl text-heading font-semibold">For You</h1>
                    <RecomendedCourse selectedCategory={selectedCategory}/>
                </div>
            </div>
        </section>
    );
};