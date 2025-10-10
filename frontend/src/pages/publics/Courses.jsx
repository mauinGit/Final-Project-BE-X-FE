import { useContext } from "react";
import CourseFilter from "../../components/courses/CourseFilter";
import CourseList from "../../components/courses/CourseList";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import { CategoryContext } from "../../App";

export default function Courses() {
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

    return(
        <section id="courses" className="font-Open Sans w-full min-h-screen overflow-x-hidden">
            <Navbar />

            {/* Section Hero */}
            <div className="relative mb-20 px-4 pt-10 lg:pt-20 sm:px-8 lg:px-20">
                <div className="flex flex-col items-center justify-center gap-10">
                    <img 
                        src="/assets/images/hero-courses.svg" 
                        alt="Hero Illustration"
                        className="lg:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
                    />
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-heading font-bold text-center">Explore <span className="text-blue">Courses</span>, <span className="text-red">Learn</span> with <span className="text-green">Ease</span></h1>
                    <p className="text-xl text-gray-500 text-center">When you’re exploring courses, there are a few ways to make the most of your learning.</p>
                    <SearchBar />
                </div>
                <div className="circlePosition w-[260px] h-[200px] bg-blue rounded-full absolute z-1 top-[60%] left-[20%] -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
                <div className="circlePosition w-[200px] h-[140px] bg-red rounded-full absolute z-1 top-[40%] right-[5%] -translate-x-1/2 -translate-y-1/2 blur-[150px]"></div>
            </div>

            {/* Section Courses */}
            <div className="flex flex-col px-4 sm:px-8 lg:px-20 gap-5 py:10 lg:py-30 mb-10">
                <h1 className="text-4xl font-bold text-heading text-center">All Courses</h1>
                <CourseFilter selected={selectedCategory} setSelected={setSelectedCategory}/>
                <CourseList selectedCategory={selectedCategory}/>
            </div>

            {/* Section Ad Poster */}
            <div className="lg:block hidden px-4 sm:px-8 lg:px-20 justify-center items-center mb-20">
                <img 
                    src="/assets/images/Banner.png" 
                    alt="Banner" 
                    className="w-full"
                />
            </div>

            {/* Footer */}
            <Footer />

        </section>
    );
};