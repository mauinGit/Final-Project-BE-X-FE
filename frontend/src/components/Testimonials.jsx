import { motion, AnimatePresence  } from "framer-motion";
import { useState  } from "react";

const listTestimonials = [
  {
    id: 1,
    name: "Sofia Novak",
    job: "Computer Science Student",
    text: "I love how flexible the courses are. I can study at my own pace while keeping up with university work.",
    image: "/assets/testimoni/sofia.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    job: "Front-End Developer",
    text: "The projects helped me land my first internship. Amazing platform!",
    image: "/assets/testimoni/john.jpg",
  },
  {
    id: 3,
    name: "Lia Watson",
    job: "UI/UX Designer",
    text: "The mentors are super helpful and the content is very practical.",
    image: "/assets/testimoni/lia.jpg",
  },
  {
    id: 4,
    name: "Kevin Tan",
    job: "Software Engineer Intern",
    text: "Thanks to the community and mentors, I was able to build strong projects and grow my skills quickly.",
    image: "/assets/testimoni/kevin.jpg",
  },
  {
    id: 5,
    name: "Xu Yuan",
    job: "Information Systems Student",
    text: "The projects helped me improve my portfolio and stand out during internship applications.",
    image: "/assets/testimoni/xuYuan.jpg",
  },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(2);

    const handleSwipe = (direction) => {
        if(direction === "left") {
            setActiveIndex((prev) => (prev + 1) % listTestimonials.length);
        } else if (direction === "right") {
            setActiveIndex(
                (prev) => (prev - 1 + listTestimonials.length) % listTestimonials.length
            );
        }
    };

    return(
        <div className="flex flex-col items-center py-10 px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden w-full">
            <div className="relative flex items-center justify-center w-full max-w-6xl">
                {listTestimonials.map((item, index) => {
                    const isActive = index === activeIndex;
                    const position = index - activeIndex; 
                    return(
                        <motion.div 
                            key={item.id}
                            drag={isActive ? "x" : false}
                            dragElastic={0.2}
                            dragSnapToOrigin
                            onDragEnd={(e, info) => {
                                if (info.offset.x < -100) handleSwipe("left");
                                if (info.offset.x > 100) handleSwipe("right");
                            }}
                            animate={{ 
                                x: position * 20,
                                y: isActive ? 0 : 20,
                                scale: isActive ? 1 : 0.8,
                                opacity: isActive ? 1 : 0.6,
                                zIndex: isActive ? 10 : 1,
                             }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center text-center cursor-grab select-none"
                        >
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className={`rounded-full object-cover mb-2 border-2 border-black ${isActive ? "h-44 w-44" : "h-36 w-36"}`}
                            />
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className="mt-4 w-80"
                                    >
                                        <h3 className="text-heading text-2xl font-medium">{item.name}</h3>
                                        <p className="text-base text-gray-500 mb-3">{item.job}</p>
                                        <p className="mt-2 text-xl max-w-md text-center text-gray-500">{item.text}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    );
};