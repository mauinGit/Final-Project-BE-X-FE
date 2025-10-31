import SideBarAdmin from "../../components/admin/SidebarAdmin";
import TableCourse from "../../components/admin/TableCourse";
import TopbarAdmin from "../../components/admin/TopbarAdmin";

export default function Courses() {
    return(
        <section id="courseAdmin" className="font-Open Sans bg-secondBlue relative w-full flex">
            <SideBarAdmin />
            <div className="flex flex-col flex-1 min-h-screen overflow-hidden">
                <TopbarAdmin />
                <div className="flex-1 overflow-auto">
                    <div className="flex flex-col mb-5 gap-6 min-w-0">
                        <div className="flex flex-row justify-between items-center px-4 sm:px-6 lg:px-10">
                            <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">All Course</h1>
                            <div className="flex flex-row gap-8 items-center">
                                {/* untuk add new course & show total course */}
                            </div>
                        </div>
                        {/* component tabel kumpulan data course */}
                        <div className="px-4 sm:px-6 lg:px-10">
                            <TableCourse />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};