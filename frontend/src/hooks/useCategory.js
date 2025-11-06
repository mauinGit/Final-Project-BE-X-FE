import { useEffect, useState } from "react";
import { 
    GetCategories, 
    GetCategoryById, 
    CreateCategory, 
    UpdateCategory, 
    DeleteCategory 
} from "../service/category";

export default function useCategory(id = null) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [categories, setCategories] = useState([]);
    const [categoryDetail, setCategoryDetail] = useState(null);
    const [error, setError] = useState(null);
    
    const fetchCategories = async () => {
        setError(null);
        try {
            const data = await GetCategories();
            setCategories(data || []);
        } catch (error) {
            setError(error.message);
        }
    };

    const fetchCategoryById = async (categoryId) => {
        setError(null);
        try {
            const data = await GetCategoryById(categoryId);
            setCategoryDetail(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const createCategory = async (name) => {
        try {
            const result = await CreateCategory(name);
            await fetchCategories(); // refresh list
            return result;
        } catch (error) {
            setError(error.message);
            throw error;
        }
    };

    const updateCategory = async (categoryId, name) => {
        try {
            const result = await UpdateCategory(categoryId, name);
            await fetchCategories();
            return result;
        } catch (error) {
            setError(error.message);
            throw error;
        }
    };

    const deleteCategory = async (categoryId) => {
        try {
            await DeleteCategory(categoryId);
            setCategories((prev) => prev.filter((cat) => cat.id !== categoryId));
        } catch (error) {
            setError(error.message);
            throw error;
        }
    };

    useEffect(() => {
        if(id) {
            fetchCategoryById(id);
        } else {
            fetchCategories();
        }
    }, [id]);

    return { 
        selectedCategory, 
        setSelectedCategory,
        categories,
        categoryDetail,
        error,
        createCategory,
        updateCategory,
        deleteCategory,
        refreshCategories: fetchCategories,
    };
};