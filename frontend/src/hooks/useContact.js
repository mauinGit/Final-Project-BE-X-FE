import { useEffect, useState } from "react"
import { GetContacts } from "../service/contact";

export default function useContact() {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const result = await GetContacts();
                setContacts(result);
            } catch (error) {
                setError(error);
            }
        };
        fetchContacts(); 
    }, []);


    return{ contacts, error };
};