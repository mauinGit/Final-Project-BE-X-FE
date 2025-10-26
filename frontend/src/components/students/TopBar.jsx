import SearchBar from "../SearchBar";
import StudentInfo from "./StudentInfo";


export default function TopBar() {
    return(
        <section className="flex flex-row justify-between gap-10 px-4 sm:px-6 lg:px-10 py-10 items-center">
            <SearchBar />
            <StudentInfo />
        </section>
    );
};