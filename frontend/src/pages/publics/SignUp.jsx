import { NavLink } from "react-router-dom";

export default function SignUp() {
    return(
        <section id="signUp" className="font-Open Sans min-h-screen flex items-center justify-center relative overflow-hidden pt-14 pb-14">
            <img 
                src="/assets/images/img-signUp.png" 
                alt="Hero Illustration"
                className="lg:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
            />
            <div className="circlePosition w-[200px] h-[140px] bg-red rounded-full absolute z-1 top-[20%] right-[2%] -translate-x-1/2 -translate-y-1/2 blur-[220px]"></div>
            <div className="w-full relative max-w-2xl rounded-4xl p-10 border-2 border-black bg-white items-center flex flex-col gap-10 z-10">
                <img 
                    src="/assets/logo/logoGDC.svg" 
                    alt="Logo GDGOC UNSRI"
                    className="absolute top-[-32px] right-[-20px] w-20 h-20 rotate-12"
                />
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-4xl text-heading font-bold">Create Your Account</h1>
                    <p className="text-xl text-gray-500">Welcome! Please enter your details</p>
                </div>
                <form className="flex flex-col gap-8 items-center">
                    <div className="flex flex-col gap-4 w-full">
                        <label htmlFor="name" className="text-xl font-medium text-heading">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            placeholder="Enter your full name"
                            className="w-[320px] md:w-[400px] lg:w-[480px] rounded-full px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <label htmlFor="email" className="text-xl font-medium text-heading">Email</label>
                        <input 
                            type="text" 
                            id="email"
                            placeholder="Enter your email address"
                            className="w-[320px] md:w-[400px] lg:w-[480px] rounded-full px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <label htmlFor="password" className="text-xl font-medium text-heading">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            placeholder="Enter your password"
                            className="w-[320px] md:w-[400px] lg:w-[480px] rounded-full px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                </form>
                <button
                        className="bg-blue text-xl border-2 w-[320px] md:w-[400px] lg:w-[480px] rounded-full px-5 py-3 border-black text-white cursor-pointer"
                    >
                        Sign Up
                    </button>
                <p 
                    className="text-heading text-xl"
                >
                    Already have an account? {" "}
                    <NavLink
                        to="/login"
                        className="text-blue cursor-pointer"
                    >
                        Log In
                    </NavLink>
                </p>
            </div>
            <div className="circlePosition w-[260px] h-[200px] bg-blue rounded-full absolute z-1 top-[80%] left-[10%] -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
        </section>
    );
};