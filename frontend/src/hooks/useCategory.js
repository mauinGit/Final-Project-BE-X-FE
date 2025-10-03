import { useState } from "react";

export default function useCategory() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    return { selectedCategory, setSelectedCategory };
};