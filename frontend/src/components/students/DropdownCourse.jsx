import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function DropdownCourse({ selected, setSelected }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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

    const handleClickAway = () => setIsDropdownVisible(false);

    const handleSelect = (category) => {
        setSelected(category);
        setIsDropdownVisible(false);
    };

    return(
        <div className="relative w-72">
            <ClickAwayListener onClickAway={handleClickAway}>
                <div className="relative">
                    <div 
                        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                        className="border-2 border-black bg-white px-6 py-2 text-xl rounded-full w-full flex items-center text-heading justify-between cursor-pointer select-none"
                    >
                        {selected || "Choose Category"} 
                        <RiArrowDropDownLine 
                            size={34} 
                            className={`text-heading transition-transform duration-300 ${isDropdownVisible ? "rotate-180" : ""}`}
                        />
                    </div>
                    {isDropdownVisible && (
                        <div className="absolute mt-2 w-full bg-white border-2 border-black rounded-3xl z-10">
                            {categories.map((category) => (
                                <div
                                    key={category}
                                    onClick={() => handleSelect(category)}
                                    className={`px-6 py-2 text-base cursor-pointer rounded-3xl ${
                                        selected === category
                                            ? "bg-secondaryBlue border-2 border-black text-heading"
                                            : "hover:bg-secondaryBlue hover:border-2 hover:border-black"
                                    }`}
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </ClickAwayListener>
        </div>
    );
};