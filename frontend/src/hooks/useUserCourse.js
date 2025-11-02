import { useEffect, useState } from "react";
import { StartCourse, UpdateProgress, GetMyCourse } from "../service/userCourse";

export default function useUserCourse() {
    const [myCourses, setMyCourses] = useState([]);
    const [error, setError] = useState(null);

    // Get User Courses with Progress
    const fetchMyCourses = async () => {
        try {
            const data = await GetMyCourse();
            setMyCourses(data);
        } catch (error) {
            setError(error.message);
        }
    };

    // Start Course
    const startCourse = async (courseId) => {
        try {
            const result = await StartCourse(courseId);
            return result;
        } catch (error) {
            setError(error.message);
            throw error;
        }
    };

    // Update Progress Course
    const updateProgress = async (courseId, currentTime, duration) => {
        try {
            const result = await UpdateProgress(courseId, currentTime, duration);
            return result;
        } catch (error) {
            setError(error.message);
            throw error;
        }
    };

    useEffect(() => {
        fetchMyCourses();
    }, []);

    return {
        myCourses, 
        error, 
        startCourse, 
        updateProgress,
        refetchMyCourses: fetchMyCourses,
    };
};