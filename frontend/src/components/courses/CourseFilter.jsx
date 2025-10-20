export default function CourseFilter({ selected, setSelected }) {

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
        <div className="py-4 px-4 sm:px-6 flex items-center justify-center gap-8 bg-secondBlue rounded-full mt-8 text-base sm:text-xl overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
                <button 
                    key={category}
                    onClick={() => setSelected(category)}
                    className={`px-3 py-2 ${selected === category ? "bg-blue text-white rounded-full border-2 border-black cursor-pointer" : "text-gray-500"}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};