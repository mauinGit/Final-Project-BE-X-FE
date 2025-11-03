const API_URL = import.meta.env.VITE_API_URL;

// Get Message From Page Contact
export const GetContacts = async () => {
    try {
        const res = await fetch(`${API_URL}/contact`);
        if(!res.ok) throw new Error("Failed to fetch contacts");

        const data = await res.json();
        return data.messages || [];
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return [];
    }
};

// Send Message from Page Contact
export const CreateContacts = async (form, token = null) => {
    try {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("message", form.message);
        if(!token) formData.append("email", form.email);

        const res = await fetch(`${API_URL}/contact/message`, {
            method: "POST",
            body: formData,
            credentials: "include",
        });

        if(!res.ok) throw new Error("Failed to create message contact");

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error create message:", error);
        throw error;
    }
};