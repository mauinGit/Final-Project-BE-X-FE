import useCategory from "../../hooks/useCategory";

export default function CourseFilter({ selected, setSelected }) {
    const { categories } = useCategory();

    const allCategories = [{ id: "all", name: "All" }, ...categories];

    return(
        <div className="py-4 px-4 sm:px-6 flex items-center justify-center gap-8 bg-secondBlue rounded-full mt-8 text-base sm:text-xl overflow-x-auto scrollbar-hide">
            {allCategories.map((category, index) => (
                <button 
                    key={category.id || index}
                    onClick={() => setSelected(category.name)}
                    className={`px-3 py-2 ${selected === category.name ? "bg-blue text-white rounded-full border-2 border-black cursor-pointer" : "text-gray-500"}`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};