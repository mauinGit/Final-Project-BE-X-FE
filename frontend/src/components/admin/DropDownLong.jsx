import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function DropDownLong({ selected, setSelected }) {
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
        <div className="relative">
            <ClickAwayListener onClickAway={handleClickAway}>
                <div className="relative">
                    <div 
                        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                        className="bg-secondaryBlue px-4 sm:px-6 py-1 sm:py-2.5 sm:text-lg md:text-xl rounded-full w-full flex items-center text-heading justify-between cursor-pointer select-none"
                    >
                        {selected || "Choose Category"} 
                        <RiArrowDropDownLine 
                            size={34} 
                            className={`text-heading transition-transform duration-300 ${isDropdownVisible ? "rotate-180" : ""}`}
                        />
                    </div>
                    {isDropdownVisible && (
                        <div className="absolute mt-2 w-full bg-white border-2 border-black rounded-3xl z-10 max-h-60 overflow-y-auto">
                            {categories.map((category) => (
                                <div
                                    key={category}
                                    onClick={() => handleSelect(category)}
                                    className={`px-4 sm:px-6 py-2 sm:text-base md:text-lg cursor-pointer ${
                                        selected === category
                                            ? "bg-secondaryBlue text-heading"
                                            : "hover:bg-secondaryBlue"
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