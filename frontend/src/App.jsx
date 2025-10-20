import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import useCategory from "./hooks/useCategory";
import Home from "./pages/publics/Home";
import Courses from "./pages/publics/Courses";
import CourseDetail from "./pages/publics/CourseDetail";
import Contact from "./pages/publics/Contact";
import SignUp from "./pages/publics/SignUp";
import Login from "./pages/publics/Login";
import HomeStudent from "./pages/students/Home";

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

        {/* Student Routes */}
        <Route path="/homeStudent" element={<HomeStudent />} />


        {/* Admin Routes */}


      </Routes>
    </CategoryContext.Provider>
  );
};

export default App;
