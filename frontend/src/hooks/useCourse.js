import { useEffect, useState } from "react";
import { GetCourse, GetCourseById, CreateCourse, UpdateCourse } from "../service/course";

export default function useCourse(id = null) {
    const [courses, setCourses] = useState(id ? null : []);
    const [error, setError] = useState(null);

    // Fetch all course & by id
    useEffect(() => {
        const fetchCourses = async () => {
        try {
            const result = id ? await GetCourseById(id) : await GetCourse();
            setCourses(result);
        } catch (error) {
            setError(error);
        }
        };
        fetchCourses();
    }, [id]);

    // Create course
    const createCourse = async (form) => {
        try {
            const result = await CreateCourse(form);
            return result;
        } catch (error) {
            setError(error)
        }
    };

    // Update course by id
    const updateCourse = async (form) => {
        if(!id) return;
        try {
            const result = await UpdateCourse(id, form);
            setCourses(result);
            return result;
        } catch (error) {
            setError(error);
            throw error;
        }
    };

    return{ data:courses, createCourse, updateCourse, error };
};