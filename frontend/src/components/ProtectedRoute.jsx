import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children, allowedRole }) {
    const { user, isAuth } = useAuth();

    // Belum login
    if(!isAuth || !user) {
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