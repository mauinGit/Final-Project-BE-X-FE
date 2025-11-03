import SearchBar from "../SearchBar";
import StudentInfo from "./StudentInfo";

export default function TopBar({ onSearch }) {
    return(
        <section className="flex flex-col sm:flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10 mt-16 lg:mt-0 mb-2 items-center lg:items-center">
            <div className="w-full lg:w-auto flex justify-start">
                <SearchBar onSearch={onSearch} />
            </div>
            <div className="hidden w-full sm:-1/2 lg:w-auto md:flex justify-center lg:justify-end">
                <StudentInfo />
            </div>
        </section>
    );
};