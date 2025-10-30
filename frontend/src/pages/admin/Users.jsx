import SideBarAdmin from "../../components/admin/SidebarAdmin";
import TopbarAdmin from "../../components/admin/TopbarAdmin";

export default function Users() {
    return(
        <section id="users" className="font-Open Sans bg-secondBlue relative w-full flex">
            <SideBarAdmin />
            <div className="flex flex-col flex-1 min-h-screen">
                <TopbarAdmin />
                <div className="flex-1">

                </div>
            </div>
        </section>
    );
};