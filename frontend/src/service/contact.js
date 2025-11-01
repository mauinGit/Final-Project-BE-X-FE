const API_URL = import.meta.env.VITE_API_URL;

export const GetContacts = async () => {
    try {
        const res = await fetch(`${API_URL}/contact`);
        if(!res.ok) throw new Error("Failed to fetch contacts");

        const data = await res.json();
        return data.contacts || [];
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return [];
    }
};