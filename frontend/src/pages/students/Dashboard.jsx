import { useContext } from "react";
import { CategoryContext } from "../../App";
import RecomendedCourse from "../../components/courses/RecomendedCourse";
import SideBarStudent from "../../components/students/SideBarStudent";
import TopBar from "../../components/students/TopBar";


export default function Dashboard() {
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

    return(
        <section id="dashboard" className="font-Open Sans bg-secondBlue relative w-full flex">
            <SideBarStudent />
            <div className="flex flex-col flex-1 min-h-screen">
                <TopBar />
                <div className="flex-1">
                    <div className="px-4 lg:block hidden sm:px-6 lg:px-10 justify-center items-center mb-20">
                        <img 
                            src="/assets/images/bannerStudent.png" 
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-col px-4 sm:px-6 lg:px-10 mb-20 gap-6">
                        <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">Continue Learning</h1>
                    </div>
                    <div className="flex flex-col px-4 sm:px-6 lg:px-10 gap-6 mb-5">
                        <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">For You</h1>
                        <RecomendedCourse selectedCategory={selectedCategory}/>
                    </div>
                </div>
            </div>
        </section>
    );
};