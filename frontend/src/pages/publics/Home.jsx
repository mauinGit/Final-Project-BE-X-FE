import { NavLink } from "react-router-dom";

export default function Home() {
    return(
        <section id="home"className="font-Open Sans w-full min-h-screen mt-8">

            {/* Section Hero */}
            <div className="relative flex flex-row justify-between px-4 sm:px-8 lg:px-20">
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
                    <ul className="flex flex-row gap-10 mt-10">
                        <li className="flex flex-row gap-3">
                            <img 
                                src="/assets/icon-cheklist.png" 
                                alt="cheklist" 
                                className="bg-blue rounded-full py-2 px-2 border-2"
                            />
                            <p className="text-xl text-gray-500">Experienced Instructors</p>
                        </li>
                        <li className="flex flex-row gap-3">
                            <img 
                                src="/assets/icon-cheklist.png" 
                                alt="cheklist" 
                                className="bg-blue rounded-full py-2 px-2 border-2"
                            />
                            <p className="text-xl text-gray-500">Quality Video</p>
                        </li>
                        <li className="flex flex-row gap-3">
                            <img 
                                src="/assets/icon-cheklist.png" 
                                alt="cheklist" 
                                className="bg-blue rounded-full py-2 px-2 border-2"
                            />
                            <p className="text-xl text-gray-500">Free Access</p>
                        </li>
                    </ul>
                </div>
                <img 
                    src="/assets/img-hero.png" 
                    alt="Hero Home" 
                    className="w-1/2"
                />
                <div className="circlePosition w-[200px] h-[140px] bg-red rounded-full absolute z-1 top-[40%] right-[5%] -translate-x-1/2 -translate-y-1/2 blur-[150px]"></div>
            </div>

            {/* Section Benefit GDC */}
            <div className="flex flex-row justify-between px-4 sm:px-8 lg:px-20 gap-5 py-26">
                <div className="flex flex-col gap-10">
                    <h1 className="text-4xl text-heading font-bold">Innovating Education For Every Learner</h1>
                    <ul className="flex flex-col gap-4 mt-8">
                        <li className="flex flex-row gap-4 text-gray-500 text-xl">
                            <img 
                                src="/assets/checklist.png" 
                                className="w-8 h-auto"
                            />
                            Join free courses anytime
                        </li>
                        <li className="flex flex-row gap-4 text-gray-500 text-xl">
                            <img 
                                src="/assets/checklist.png" 
                                className="w-8 h-auto"
                            />
                            Learn new skills together
                        </li>
                        <li className="flex flex-row gap-4 text-gray-500 text-xl">
                            <img 
                                src="/assets/checklist.png" 
                                className="w-8 h-auto"
                            />
                            Get support from mentors
                        </li>
                    </ul>
                <NavLink 
                    to="/courses"
                    className="self-start inline-block px-4 py-2 text-white text-xl bg-blue rounded-full border-2 border-black hover:opacity-90 transition-transform duration-300 ease-in-out hover:shadow-lg"
                >
                    Explore Courses
                </NavLink>
                </div>
                <img 
                    src="/assets/img-benefit.png" 
                    alt="Image Innovating Education" 
                    className="w-1/2"
                />
            </div>

            {/* Section Available Course */}
            <div className="flex flex-col px-4 sm:px-8 lg:px-20 gap-5 py-10">
                <h1 className="text-4xl font-bold text-heading text-center">Explore All Available Courses</h1>

            </div>

            {/* Section Testimoni Students */}

            {/* Section QnA */}


        </section>
    );
};