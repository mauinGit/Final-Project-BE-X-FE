import AdminInfo from "./AdminInfo";

export default function TopbarAdmin() {
    return(
        <div className="flex flex-col sm:flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10 mt-16 lg:mt-0 mb-2 items-center lg:items-center">
            <div className="w-auto flex justify-end">
                <AdminInfo />
            </div>
        </div>
    );
};