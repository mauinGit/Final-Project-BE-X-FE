import { useEffect, useState } from "react"
import { GetContacts, CreateContacts } from "../service/contact";

export default function useContact() {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    const fetchContacts = async () => {
        try {
            const result = await GetContacts();
            setContacts(result);
        } catch (error) {
            setError(error);
        }
    };

    const addContact = async (form, token = null) => {
        try {
            const result = await CreateContacts(form, token);
            await fetchContacts();
            return result;
        } catch (error) {
            setError(error);
            throw error;
        }
    };

    useEffect(() => {
        fetchContacts(); 
    }, []);


    return{ contacts, addContact, error, refetch: fetchContacts };
};