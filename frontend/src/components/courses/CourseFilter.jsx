import { useState } from "react";

export default function CourseFilter() {
    const [selected, setSelected] = useState([]);

    const categories = [
        "All",
        "UI/UX",
        "Front-End",
        "Back-End",
        "Mobile Development",
        "Machine Learning",
        "Cyber Security",
        "Game Development"
    ];

    return(
        <div className="py-4 px-6 flex flex-row justify-between gap-2 bg-secondBlue rounded-full mt-8 text-xl">
            {categories.map((idx) => (
                <button 
                    key={idx}
                    onClick={() => setSelected(idx)}
                    className={`px-3 py-2 ${selected === idx ? "bg-blue text-white rounded-full border-2 border-black cursor-pointer" : "text-gray-500"}`}
                >
                    {idx}
                </button>
            ))}
        </div>
    );
};