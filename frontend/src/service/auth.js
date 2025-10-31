const API_URL = import.meta.env.VITE_API_URL;

// Registration 
export const registerUser = async (name, email, password, confirmPassword) => {
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("confirm_password", confirmPassword);

        const res = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.error || data.message || "Failed to register");
        return data;
    } catch (error) {
        console.error("Register error: ", error.message);
        return { error: true, message: error.message };
    }
};

// Login 
export const loginUser = async (email, password) => {
    try {
        const res = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: "include",
        });

        const data = await res.json();
        console.log("Login response:", data);

        if (!res.ok) throw new Error(data.error || data.message || "Login failed");

        return data;
    } catch (error) {
        console.error("Login error: ", error.message);
        return { error: true, message: error.message };     
    }
};

// Logout 
export const logoutUser = async () => {
    try {
        const res = await fetch(`${API_URL}/users/logout`,{
            method: "POST",
            credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || data.message || "Logout failed");

        localStorage.removeItem("token");

        return data;
    } catch (error) {
        console.error("Logout error: ", error.message);
        return { error: true, message: error.message };         
    }
};

// Refresh Token
export const refreshToken = async () => {
    try {
        const res = await fetch(`${API_URL}/users/refresh`, {
            method: "POST",
            credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || data.message || "Failed to refresh");

        return data;
    } catch (error) {
        console.error("Refresh token error: ", error.message);
        return { error: true, message: error.message };        
    }
};

// Forgot Password
export const forgotPassword = async (email) => {
    try {
        const formData = new FormData();
        formData.append("email", email)

        const res = await fetch(`${API_URL}/users/forgot`, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || data.message || "Failed to send reset email");

        return data;
    } catch (error) {
        console.error("Forgot password error: ", error.message);
        return { error: true, message: error.message };                
    }
};

// Reset Password
export const resetPassword = async (token, newPassword, confirmPassword) => {
    try {
        const formData = new FormData();
        formData.append("token", token);
        formData.append("new_password", newPassword);
        formData.append("confirm_password", confirmPassword);

        const res = await fetch(`${API_URL}/users/reset`, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || data.message || "Failed to reset password");

        return data;
    } catch (error) {
        console.error("Reset password error: ", error.message);
        return { error: true, message: error.message };         
    }
};