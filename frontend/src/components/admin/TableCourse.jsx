export default function TableCourse() {
    return(
        <div className="w-full rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full bg-white min-w-max">
                    <thead className="border-b-2 border-gray-200">
                        <tr>
                            <th className="w-42 p-4 px-8 tracking-wide text-left text-xl font-semibold text-heading">Title</th>
                            <th className="w-32 p-4 tracking-wide text-left text-xl font-semibold text-heading">Video URL</th>
                            <th className="p-4 tracking-wide text-left text-xl font-semibold text-heading">Description</th>
                            <th className="w-26 p-4 tracking-wide text-left text-xl font-semibold text-heading">Cover</th>
                            <th className="w-32 p-4 tracking-wide text-left text-xl font-semibold text-heading">Category</th>
                            <th className="w-36 p-4 px-8 tracking-wide text-left text-xl font-semibold text-heading">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2 border-gray-200">
                            <td className="p-4 px-8 whitespace-nowrap text-xl text-gray-500">Introduction to UI/UX Design</td>
                            <td className="p-4 whitespace-nowrap text-xl text-gray-500">
                                <a 
                                    href="#"
                                    className="font-medium text-blue hover:underline"
                                >
                                    Link URL
                                </a>
                            </td>
                            <td className="p-4 whitespace-nowrap text-xl text-gray-500">Lorem ipsum dolor sit amet...</td>
                            <td className="p-4 whitespace-nowrap text-xl text-gray-500">image.png</td>
                            <td className="p-4 whitespace-nowrap text-xl text-gray-500">Front-End</td>
                            <td className="p-4 px-8 whitespace-nowrap text-xl text-gray-500">Delete & Edit</td>
                        </tr>
                        <tr className="border-b-2 border-gray-200">
                            <td className="p-4 px-8 whitespace-nowrap text-xl text-gray-500">Introduction to UI/UX Design</td>
                            <td className="p-4 whitespace-nowrap text-xl text-gray-500">
                                <a 
                                    href="#"
                                    className="font-medium text-blue hover:underline"
                                >
                                    Link URL
                                </a>
                            </td>
                            <td className="p-4 whitespace-nowrap text-xl text-gray-500">Lorem ipsum dolor sit amet...</td>
                            <td className="p-4 whitespace-nowrap text-xl text-gray-500">image.png</td>
                            <td className="p-4 whitespace-nowrap text-xl text-gray-500">Front-End</td>
                            <td className="p-4 px-8 whitespace-nowrap text-xl text-gray-500">Delete & Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};