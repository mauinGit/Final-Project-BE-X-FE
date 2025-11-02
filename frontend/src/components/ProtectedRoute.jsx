import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children, allowedRole }) {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    // Belum login
    if(!token || !user) {
        return <Navigate to="/login" replace />
    }

    // Jika role berbeda maka, arahkan sesuai role nya
    if(allowedRole && user.role !== allowedRole) {
        if(user.role === "admin") return <Navigate to="/admin/overview" replace />;
        if(user.role === "student") return <Navigate to="/student/dashboard" replace />;
        return <Navigate to="/" replace />;
    }

    return children;
};