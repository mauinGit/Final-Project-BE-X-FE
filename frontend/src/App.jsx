import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import useCategory from "./hooks/useCategory";
import Home from "./pages/publics/Home";
import Courses from "./pages/publics/Courses";
import CourseDetail from "./pages/publics/CourseDetail";
import Contact from "./pages/publics/Contact";
import SignUp from "./pages/publics/SignUp";
import Login from "./pages/publics/Login";
import CourseStudent from "./pages/students/Courses";
import MyCourses from "./pages/students/MyCourses";
import Dashboard from "./pages/students/Dashboard";
import Overview from "./pages/admin/Overview";
import CoursesAdmin from "./pages/admin/Courses";
import ContactAdmin from "./pages/admin/Contact";
import ForgotPass from "./pages/publics/ForgotPass";
import ResetPass from "./pages/publics/ResetPass";
import SuccesResetPass from "./pages/publics/SuccesResetPass";
import AddCourse from "./pages/admin/AddCourse";
import EditCourse from "./pages/admin/EditCourse";


export const CategoryContext = createContext();

function App() {
  const category = useCategory();
  
  return (
    <CategoryContext.Provider value={category}>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPass />} />
        <Route path="/resetPassword" element={<ResetPass />} />
        <Route path="/succesResetPassword" element={<SuccesResetPass />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<Dashboard />} />
        <Route path="/student/courseStudent" element={<CourseStudent />} />
        <Route path="/student/myCourses" element={<MyCourses />} />

        {/* Admin Routes */}
        <Route path="/admin/overview" element={<Overview />} />
        <Route path="/admin/courses" element={<CoursesAdmin />} />
        <Route path="/admin/contactAdmin" element={<ContactAdmin />} />
        <Route path="/admin/addCourse" element={<AddCourse />} />
        <Route path="/admin/editCourse" element={<EditCourse />} />

      </Routes>
    </CategoryContext.Provider>
  );
};

export default App;