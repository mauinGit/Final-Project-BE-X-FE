import useContact from "../../hooks/useContact";

export default function TableContact() {
    const { contacts, error } = useContact();

    if (error) return <p className="text-red-500">Failed to load contacts.</p>;

    return(
        <div className="w-full rounded-xl overflow-hidden bg-white p-2 px-8 pl-8">
            <div className="overflow-x-auto">
                <table className="w-full min-w-max table-auto">
                    <thead className="border-b border-gray-200">
                        <tr>
                            <th className="p-4 px-4 tracking-wide text-left text-xl font-semibold text-heading w-[20%]">Name</th>
                            <th className="p-4 tracking-wide text-left text-xl font-semibold text-heading w-[30%]">Email</th>
                            <th className="p-4 pl-4 tracking-wide text-left text-xl font-semibold text-heading w-auto pr-8">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((item) => (
                            <tr key={item.id} className="border-b px-4 border-gray-200">
                                <td className="p-4 px-4 whitespace-nowrap text-xl text-gray-500">{item.name}</td>
                                <td className="p-4 whitespace-nowrap text-xl text-gray-500 hover:underline">{item.email || "-"}</td>
                                <td className="p-4 pl-4 whitespace-nowrap text-xl text-gray-500 pr-8 truncate">{item.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};