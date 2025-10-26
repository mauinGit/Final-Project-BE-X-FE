import SideBarStudent from "../../components/students/SideBarStudent";
import TopBar from "../../components/students/TopBar";

export default function MyCourses() {
    return(
        <section id="myCourses" className="font-Open Sans bg-secondBlue relative w-full flex">
            <SideBarStudent />
            <div className="flex flex-col flex-1">
                <TopBar />
                <div className="flex-1">

                </div>
            </div>
        </section>
    );
};