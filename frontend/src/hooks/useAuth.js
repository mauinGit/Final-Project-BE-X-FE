import { useEffect, useState } from "react";
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshToken,
    forgotPassword,
    resetPassword,
} from "../service/auth";

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    
    // Register
    const handleRegister = async (name, email, password, confirmPassword) => {
        try {
            const res = await registerUser(name, email, password, confirmPassword);
            return res;
        } catch (error) {
            console.error("Register error:", error.message);
            return { error: true, message: error.message };            
        }
    };

    // Login
    const handleLogin = async (email, password) => {
        try {
            const data = await loginUser(email, password);
            console.log("Login response:", data);

            if(data.error) {
                return { error: true, message: data.message };
            }

            if(!data.user) {
                return { error: true, message: "Invalid response from server" };
            }

            localStorage.setItem("user", JSON.stringify(data.user));
            setUser(data.user);

            return { error: false, user: data.user };
        } catch (error) {
            console.error("Login error:", error.message);
            return { error: true, message: error.message };
        }
    };

    // Logout
    const handleLogout = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.error("Logout error:", error.message);
        } finally {
            localStorage.removeItem("token");
            setToken(null);
            setUser(null);
        }
    };

    // Refresh Token
    const handleRefresh = async () => {
        try {
            const data = await refreshToken();
        if (!data.error && data.token) {
            localStorage.setItem("token", data.token);
            setToken(data.token);
        }
        return data;
        } catch (error) {
            console.error("Refresh error:", error.message);
            return { error: true, message: error.message };
        }
    };

    // Forgot Password
    const handleForgotPassword = async (email) => {
        try {
            const res = await forgotPassword(email);
            return res;
        } catch (error) {
            console.error("Forgot password error:", error.message);
            return { error: true, message: error.message };
        } 
    };

    // Reset Password
    const handleResetPassword = async (token, newPassword, confirmPassword) => {
        try {
            const res = await resetPassword(token, newPassword, confirmPassword);
        return res;
        } catch (error) {
            console.error("Reset password error:", error.message);
            return { error: true, message: error.message };
        }
    };

    useEffect(() => {
        if(token) {
            handleRefresh();
        }
    }, []);

    return{
        user,
        token, 
        register: handleRegister,
        login: handleLogin,
        logout: handleLogout,
        refresh: handleRefresh,
        forgotPassword: handleForgotPassword,
        resetPassword: handleResetPassword,
    };
};