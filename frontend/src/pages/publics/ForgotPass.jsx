import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ForgotPass() {
    const [email, setEmail] = useState("");
    const { forgotPassword } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await forgotPassword(email);

        if(!res.error) {
            toast.success("Email verified!");
            localStorage.setItem("reset_token", res.token);
            navigate("/resetPassword");
        } else {
            toast.error(res.message || "Email not found!");
        }
    };

    return(
        <section id="forgotPassword" className="font-Open Sans min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-14">
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
                    <h1 className="text-3xl sm:text-4xl text-heading font-bold">Forgot Password</h1>
                    <p className="text-xl text-gray-500 text-center">Enter the email address associated with your account!</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 items-center w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <label htmlFor="email" className="text-xl font-medium text-heading">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full rounded-full px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="flex flex-row gap-4 w-full items-center">
                        <NavLink
                            to="/login"
                            className="bg-white text-heading text-center text-xl border-2 border-black rounded-full px-5 py-3 w-full hover:scale-[1.02] transition-transform cursor-pointer"
                        >
                            Cancel
                        </NavLink>
                        <button
                            type="submit"
                            className="bg-blue text-white text-center text-xl border-2 border-black rounded-full px-5 py-3 w-full hover:scale-[1.02] transition-transform cursor-pointer"
                        >
                            Verification
                        </button>
                    </div>
                </form>
            </div>
            <div className="circlePosition w-[260px] h-[200px] bg-blue rounded-full absolute z-1 top-[80%] left-[10%] -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
        </section>
    );
};