import SideBarAdmin from "../../components/admin/SidebarAdmin";
import TopbarAdmin from "../../components/admin/TopbarAdmin";

export default function Courses() {
    return(
        <section id="courseAdmin" className="font-Open Sans bg-secondBlue relative w-full flex">
            <SideBarAdmin />
            <div className="flex flex-col flex-1 min-h-screen">
                <TopbarAdmin />
                <div className="flex-1">
                    <div className="flex flex-col px-4 sm:px-6 lg:px-10 mb-5 gap-6">
                        <h1 >Add Course Form</h1>
                    </div>
                
                </div>
            </div>
        </section>
    );
};