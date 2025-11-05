import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import useCategory from "../../hooks/useCategory";

export default function DropDownLong({ selected, setSelected }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const { categories } = useCategory();

    const handleClickAway = () => setIsDropdownVisible(false);

    const handleSelect = (category) => {
        setSelected(category.name);
        setIsDropdownVisible(false);
    };

    if (!categories || categories.length === 0) {
        return (
            <div className="bg-secondaryBlue px-4 sm:px-6 py-1 sm:py-2 sm:text-lg md:text-xl rounded-full w-full flex items-center text-gray-400 justify-between">
                Loading categories...
            </div>
        );
    }

    const allCategories = [{ id: "all", name: "All" }, ...categories];

    return(
        <div className="relative">
            <ClickAwayListener onClickAway={handleClickAway}>
                <div className="relative">
                    <div 
                        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                        className="bg-secondaryBlue px-4 sm:px-6 py-1 sm:py-2 sm:text-lg md:text-xl rounded-full w-full flex items-center text-heading justify-between cursor-pointer select-none"
                    >
                        {selected || "Choose Category"} 
                        <RiArrowDropDownLine 
                            size={34} 
                            className={`text-heading transition-transform duration-300 ${isDropdownVisible ? "rotate-180" : ""}`}
                        />
                    </div>
                    {isDropdownVisible && (
                        <div className="absolute mt-2 w-full bg-white border-2 border-black rounded-3xl z-10 max-h-60 overflow-y-auto">
                            {allCategories.map((category) => (
                                <div
                                    key={category.id}
                                    onClick={() => handleSelect(category)}
                                    className={`px-4 sm:px-6 py-2 sm:text-base md:text-lg cursor-pointer ${
                                        selected === category.name
                                            ? "bg-secondaryBlue text-heading"
                                            : "hover:bg-secondaryBlue"
                                    }`}
                                >
                                    {category.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </ClickAwayListener>
        </div>
    );
};