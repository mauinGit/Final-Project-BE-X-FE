import { useMemo, useState } from "react";
import { debounce } from "lodash";
import { IoSearchOutline } from "react-icons/io5";
import { TbX } from "react-icons/tb";

export default function SearchBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const debouncedSearch = useMemo(
        () => debounce((value) => onSearch(value), 300),
        [onSearch]
    );

    const handleSearch = async (e) => {
        setSearchInput(e.target.value);
        debouncedSearch(e.target.value);
    };

    const handleClear = () => {
        setSearchInput("");
        onSearch("");
    };

    return(
        <div className="relative flex p-2 sm:p-3 px-4 sm:px-5 gap-2 mx-auto w-full max-w-7xl items-center border-2 border-black rounded-full bg-secondaryBlue">
            <IoSearchOutline 
                size={32}
                className="text-gray-500 rounded-full p-1"
                onClick={handleSearch}
            />
            <input 
                type="input" 
                placeholder="Course title or keyword"
                value={searchInput}
                onChange={handleSearch}
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