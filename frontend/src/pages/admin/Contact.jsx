import SideBarAdmin from "../../components/admin/SidebarAdmin";
import TableContact from "../../components/admin/TableContact";
import TopbarAdmin from "../../components/admin/TopbarAdmin";

export default function Contact() {
    return(
        <section id="dataContact" className="font-Open Sans bg-secondBlue relative w-full flex">
            <SideBarAdmin />
            <div className="flex flex-col flex-1 min-h-screen overflow-hidden">
                <TopbarAdmin />
                <div className="flex-1 overflow-auto">
                    <div className="flex flex-col mb-5 gap-6 min-w-0">
                        <div className="flex flex-row justify-between items-center px-4 sm:px-6 lg:px-10">
                            <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">All Contact</h1>
                            <p className="text-xl text-gray-500">Showing 10</p>
                        </div>
                    </div>
                    <div className="px-4 sm:px-6 lg:px-10">
                        <TableContact />
                    </div>
                </div>
            </div>
        </section>
    );
};