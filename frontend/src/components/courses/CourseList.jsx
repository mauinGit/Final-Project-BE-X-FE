import CourseCard from "./CourseCard";

const dummyCourses = [
    {
        id: 1,
        title: "Introduction to UI/UX Design",
        category: "UI/UX",
        description: "Learn the basics of user interface and user experience design, from wireframing to prototyping.",
        image: "/assets/courses/intro-uiux.png"
    },
    {
        id: 2,
        title: "Front-End Development with React",
        category: "Front-End",
        description: "Master React to build modern, interactive websites with reusable components.",
        image: "/assets/courses/react-fe.png"            
    },
    {
        id: 3,
        title: "Mobile Development with Flutter",
        category: "Mobile Development",
        description: "Start building cross-platform mobile apps with Flutter and Dart.",
        image: "/assets/courses/flutter-mobdev.png"            
    }
];

export default function CourseList({ selectedCategory }) {
    const filteredCourses = 
        selectedCategory === "All"
            ? dummyCourses
            : dummyCourses.filter((course) => course.category === selectedCategory);

    return(
        <div className="grid md:grid-cols-3 gap-6 mt-5">
            {filteredCourses.map((course) => (
                <CourseCard 
                    key={course.id}
                    course={course}
                />
            ))}
        </div>
    );
};