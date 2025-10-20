import { useContext } from "react";
import CourseList from "../../components/courses/CourseList";
import { CategoryContext } from "../../App";

export default function Home() {
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

    return(
        <section id="studentHome" className="font-Open Sans relative w-full min-h-screen">
            <div className="px-4 lg:block hidden sm:px-8 lg:px-12 justify-center items-center mb-20">
                <img 
                    src="/assets/images/bannerStudent.png" 
                    className="w-full"
                />
            </div>
            <div className="flex flex-col px-4 sm:px-8 lg:px-12 mb-20 gap-6">
                <h1 className="text-4xl text-heading font-semibold">Continue Learning</h1>
            </div>
            <div className="flex flex-col px-4 sm:px-8 lg:px-12 gap-6">
                <h1 className="text-4xl text-heading font-semibold">For You</h1>
                <CourseList selectedCategory={selectedCategory}/>
            </div>
        </section>
    )
}