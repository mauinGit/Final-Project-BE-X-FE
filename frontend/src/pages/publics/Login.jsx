import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const res = await login(form.email, form.password);

        if(res.error){
            setError(res.message);
            return;
        } else {
            const user = res.user;
            if(user.role === "admin") navigate("/admin/overview");
            else if(user.role === "student") navigate("/student/dashboard")
        }
        // const { token, user } = res.data;

        // localStorage.setItem("token", token);
        // localStorage.setItem("role", user.role);

        // if(user.role === "admin") {
        //     navigate("/admin/overview");
        // } else if (user.role === "student") {
        //     navigate("/student/dashboard");
        // } else {
        //     navigate("/");
        // }
    };

    return(
        <section id="signUp" className="font-Open Sans min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-14">
            <img 
                src="/assets/images/img-signUp.png" 
                alt="Images"
                className="lg:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
            />
            <div className="circlePosition w-[200px] h-[140px] bg-red rounded-full absolute z-1 top-[20%] right-[2%] -translate-x-1/2 -translate-y-1/2 blur-[220px]"></div>
            <div className="w-full relative max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 border-2 border-black bg-white items-center flex flex-col gap-10 z-10">
                <img 
                    src="/assets/logo/logoGDC.svg" 
                    alt="Logo GDGOC UNSRI"
                    className="absolute top-[-20px] right-[-16px] sm:top-[-32px] sm:right-[-20px] w-14 h-14 sm:w-20 sm:h-20 rotate-12"
                />
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-3xl sm:text-4xl text-heading font-bold">Log In</h1>
                    <p className="text-xl text-gray-500 text-center">Enter your email and password to log in</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 items-center w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <label htmlFor="email" className="text-xl font-medium text-heading">Email</label>
                        <input 
                            type="text" 
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="w-full rounded-full px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <label htmlFor="password" className="text-xl font-medium text-heading">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full rounded-full px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <NavLink
                        to="/forgotPassword"
                        className="text-blue cursor-pointer text-xl self-start"
                    >
                        Forgot Password?
                    </NavLink>
                    <button
                        type="submit"
                        className="bg-blue text-white text-xl border-2 border-black rounded-full px-5 py-3 w-full hover:scale-[1.02] transition-transform cursor-pointer"
                    >
                        Log In
                    </button>
                </form>
                <p 
                    className="text-heading text-xl"
                >
                    Don't have an account? {" "}
                    <NavLink
                        to="/signUp"
                        className="text-blue cursor-pointer"
                    >
                        Sign up
                    </NavLink>
                </p>
            </div>
            <div className="circlePosition w-[260px] h-[200px] bg-blue rounded-full absolute z-1 top-[80%] left-[10%] -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
        </section>
    );
};