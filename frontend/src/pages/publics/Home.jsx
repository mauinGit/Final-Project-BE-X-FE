import { NavLink } from "react-router-dom";

export default function Home() {
    return(
        <section id="home"className="font-Open Sans relative w-full min-h-screen mt-8">
            <div className="flex flex-row justify-between px-4 sm:px-8 lg:px-20 gap-5">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-3">
                            <img 
                                src="/assets/Logo GDG.svg" 
                                alt="Logo GDGOC UNSRI" 
                            />
                            <p className="text-base text-heading font-medium">GDGoC Universitas Sriwijaya</p>
                        </div>
                        <p className="text-6xl font-bold text-heading max-w-2xl leading-tight">
                            Learn, Build, and Grow with <span className="text-blue">G</span>
                            <span className="text-red">D</span>
                            <span className="text-yellow">G</span>
                            <span className="text-green">o</span>
                            <span className="text-blue">C</span> Online Courses
                        </p>
                    </div>
                    <p className="text-xl text-gray-500 max-w-2xl leading-tight">Unlock new opportunities with GDCourse Online Courses. Learn from experts, collaborate with peers, and gain practical knowledge that empowers your journey in tech.</p>
                    <div className="flex flex-row gap-5 items-center">
                        <NavLink
                            to="/login"
                            className="px-4 py-2 text-white text-xl bg-blue rounded-full border-2 border-black hover:opacity-90 transition-transform duration-300 ease-in-out hover:shadow-lg"
                        >
                            Join for free
                        </NavLink>
                        <a 
                            href="#"
                            className="text-xl text-gray-500"
                        >
                            Learn More
                        </a>
                    </div>
                    <div className="circlePosition w-[260px] h-[200px] bg-blue rounded-full absolute z-1 top-[60%] left-[20%] -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
                    <div className="flex flex-row gap-10 mt-10">
                        <div className="flex flex-row gap-3">
                            <img 
                                src="/assets/icon-cheklist.png" 
                                alt="cheklist" 
                                className="bg-blue rounded-full py-2 px-2 border-2"
                            />
                            <p className="text-xl text-gray-500">Experienced Instructors</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <img 
                                src="/assets/icon-cheklist.png" 
                                alt="cheklist" 
                                className="bg-blue rounded-full py-2 px-2 border-2"
                            />
                            <p className="text-xl text-gray-500">Quality Video</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <img 
                                src="/assets/icon-cheklist.png" 
                                alt="cheklist" 
                                className="bg-blue rounded-full py-2 px-2 border-2"
                            />
                            <p className="text-xl text-gray-500">Free Access</p>
                        </div>
                    </div>
                </div>
                <img 
                    src="/assets/img-hero.png" 
                    alt="Hero Home" 
                    className="w-1/2"
                />
                <div className="circlePosition w-[200px] h-[140px] bg-red rounded-full absolute z-1 top-[40%] right-[5%] -translate-x-1/2 -translate-y-1/2 blur-[150px]"></div>
            </div>
        </section>
    );
};