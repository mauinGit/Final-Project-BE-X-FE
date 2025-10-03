import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/publics/Home";
import Courses from "./pages/publics/Courses";
import useCategory from "./hooks/useCategory";

export const CategoryContext = createContext();

function App() {
  const category = useCategory();
  
  return (
    <CategoryContext.Provider value={category}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </CategoryContext.Provider>
  );
};

export default App;
