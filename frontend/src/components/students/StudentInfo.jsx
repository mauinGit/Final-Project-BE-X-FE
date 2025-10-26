import { useEffect, useState } from "react";

export default function StudentInfo() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // GetUserStudent().then(setUser); //sementara
        setUser({
            name: "Nabila Ayu Talita",
            email: "nabilaayutalitaa@gmail.com",
            profile: ""
        });
    }, []);

    if(!user) {
        return <div className="text-gray-500 items-center text-xl">Loading...</div>
    }

    // Inisial nama user
    const initials = user.name
        ? user.name
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
        : "?";

    // Generate warna berdasarkan nama user
    const getColorFromName = (name) => {
        const colors = ["#4C7CF3", "#E57373", "#81C784", "#FFD54F", "#BA68C8", "#4DD0E1"];
        let hash = 0;
        for(let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5 ) - hash);
        }
        const index = Math.abs(hash % colors.length );
        return colors[index];
    };

    return(
        <div className="flex flex-row items-center gap-4">
            {user.profile ? (
                <img 
                    src={user.profile}
                    alt={user.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-black"
                />
            ) : (
                <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-xl border-2 border-black"
                    style={{ 
                        backgroundColor: getColorFromName(user.name),
                     }}
                >
                    {initials}
                </div>
            )}

            <div className="flex flex-col">
                <h3 className="text-heading text-2xl font-medium">{user.name}</h3>
                <p className="text-gray-500 text-xl">{user.email}</p>
            </div>
        </div>
    );
};