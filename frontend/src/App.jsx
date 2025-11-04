import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { Toaster } from "react-hot-toast";
import useCategory from "./hooks/useCategory";

// Pages Public
import Home from "./pages/publics/Home";
import Courses from "./pages/publics/Courses";
import Contact from "./pages/publics/Contact";
import SignUp from "./pages/publics/SignUp";
import Login from "./pages/publics/Login";
import ForgotPass from "./pages/publics/ForgotPass";
import ResetPass from "./pages/publics/ResetPass";
import SuccesResetPass from "./pages/publics/SuccesResetPass";

// Student Pages
import CourseStudent from "./pages/students/Courses";
import MyCourses from "./pages/students/MyCourses";
import Dashboard from "./pages/students/Dashboard";
import CourseDetail from "./pages/students/CourseDetail";

// Admin Pages
import Overview from "./pages/admin/Overview";
import CoursesAdmin from "./pages/admin/Courses";
import ContactAdmin from "./pages/admin/Contact";
import AddCourse from "./pages/admin/AddCourse";
import EditCourse from "./pages/admin/EditCourse";

// Components
import ProtectedRoute from "./components/ProtectedRoute";


export const CategoryContext = createContext();

function App() {
  const category = useCategory();
  
  return (
    <CategoryContext.Provider value={category}>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPass />} />
        <Route path="/resetPassword" element={<ResetPass />} />
        <Route path="/succesResetPassword" element={<SuccesResetPass />} />

        {/* Student Routes */}
        <Route 
          path="/student/dashboard" 
          element={
            <ProtectedRoute allowedRole="student">
              <Dashboard />
            </ProtectedRoute>
          } 
          />
        <Route 
          path="/student/courseStudent" 
          element={
            <ProtectedRoute allowedRole="student">
              <CourseStudent />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/student/myCourses" 
          element={
            <ProtectedRoute allowedRole="student">
              <MyCourses />
            </ProtectedRoute>
          } 
        />
        <Route path="/student/dashboard/courses/:id" 
          element={
            <ProtectedRoute allowedRole="student">
              <CourseDetail />
            </ProtectedRoute>
          } 
        />

        {/* Admin Routes */}
        <Route 
          path="/admin/overview" 
          element={
            <ProtectedRoute allowedRole="admin">
              <Overview />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/courses" 
          element={
            <ProtectedRoute allowedRole="admin">
              <CoursesAdmin />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/contactAdmin" 
          element={
            <ProtectedRoute allowedRole="admin">
              <ContactAdmin />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/addCourse" 
          element={
            <ProtectedRoute allowedRole="admin">
              <AddCourse />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/editCourse/:id" 
          element={
            <ProtectedRoute allowedRole="admin">
              <EditCourse />
            </ProtectedRoute>
          } 
        />

      </Routes>
    </CategoryContext.Provider>
  );
};

export default App;