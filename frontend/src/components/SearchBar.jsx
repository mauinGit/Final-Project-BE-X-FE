import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { TbX } from "react-icons/tb";

export default function SearchBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = async () => {
        onSearch(searchInput);
    };

    const handleClear = () => {
        setSearchInput("");
        onSearch("");
    };

    return(
        <div className="relative flex p-2 sm:p-3 px-4 sm:px-5 gap-2 w-[326px] sm:w-[250px] lg:w-[500px] items-center border-2 border-black rounded-full bg-secondaryBlue">
            <IoSearchOutline 
                size={32}
                className="text-gray-500 rounded-full p-1"
                onClick={handleSearch}
            />
            <input 
                type="input" 
                placeholder="Course title or keyword"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={e => {
                    if(e.key == "Enter") {
                        handleSearch();
                    }
                }}
                className={`flex-1 h-full text-lg lg:text-xl rounded-full outline-none border-none px-2 transition duration-300 ${searchInput ? "text-heading" : "text-gray-500"}`}
            />
            {handleSearch && (
                <button
                    onClick={handleClear}
                    className="absolute right-4 sm:right-6 text-gray-500 hover:text-heading cursor-pointer"
                >
                    <TbX size={24} />
                </button>
            )}
        </div>
    );
};