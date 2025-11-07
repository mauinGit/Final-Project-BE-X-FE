import SearchBar from "../SearchBar";
import StudentInfo from "./StudentInfo";

export default function TopBar({ onSearch }) {
    return(
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10 mt-16 lg:mt-0 mb-2">
            <div className="flex justify-center lg:justify-end">
                <SearchBar onSearch={onSearch} />
            </div>
            <div className="hidden lg:flex justify-center lg:justify-end w-full lg:w-auto">
                <StudentInfo />
            </div>
        </section>
    );
};