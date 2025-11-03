import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { toast } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useContact from "../../hooks/useContact";

export default function Contact() {
    const { addContact } = useContact();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await addContact(form);
            toast.success("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            toast.error("Failed to send message.");
        }
    };

    return(
        <section id="contact" className="font-Open Sans w-full min-h-screen">
            <Navbar />
            <div className="relative flex flex-col lg:flex-row justify-between items-start pt-10 px-4 sm:px-8 lg:px-20 mb-20">

                {/* Section Get In Touch */}
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-heading font-bold leading-tight max-w-sm">Get In Touch With Us</h1>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl text-gray-500">Email</h3>
                        <a 
                            href="mailto:gdcourse@gmail.com"
                            className="text-xl font-medium text-heading"
                        >    
                            gdcourse@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl text-gray-500">Phone</h3>
                        <p className="text-xl font-medium text-heading">+6289660301678</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl text-gray-500">Address</h3>
                        <p className="text-xl font-medium text-heading leading-tight max-w-sm">Universitas Sriwijaya Kampus Palembang. Jalan Srijaya Negara, Bukit Lama, Kec. Ilir Barat I, Kota Palembang, Sumatera Selatan</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl text-gray-500">Follow Us</h3>
                        <ul className="flex flex-row gap-4">
                            <li className="rounded-full bg-blue border-2 border-black p-2">
                                <FaXTwitter 
                                    size={24} 
                                    className="text-white"
                                />
                            </li>
                            <li className="rounded-full bg-blue border-2 border-black p-2">
                                <FaInstagram 
                                    size={24} 
                                    className="text-white"
                                />
                            </li>
                            <li className="rounded-full bg-blue border-2 border-black p-2">
                                <GrYoutube 
                                    size={24} 
                                    className="text-white"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="circlePosition w-[260px] h-[200px] bg-blue rounded-full absolute z-1 top-[60%] left-[20%] -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
                </div>

                {/* Section Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full lg:w-3/5 mt-20 lg:mt-1">
                    <div className="flex flex-col sm:flex-row gap-8 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <label htmlFor="name" className="text-xl font-medium text-heading">Your Name</label>
                            <input 
                                type="text" 
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Your full name"
                                className="rounded-full px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <label htmlFor="email" className="text-xl font-medium text-heading">Email Address</label>
                            <input 
                                type="email" 
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="Your email address"
                                className="rounded-full px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <label htmlFor="message" className="text-xl font-medium text-heading">Message</label>
                        <textarea 
                            id="message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder="Write something..."
                            className="rounded-2xl px-5 py-3 text-xl text-gray-500 bg-secondaryBlue focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        className="bg-blue text-white text-xl rounded-full border-2 border-black hover:opacity-90 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer py-2 px-6"
                    >
                        Send Message
                    </button>
                </form>
                <div className="circlePosition w-[200px] h-[140px] bg-red rounded-full absolute z-1 top-[40%] right-[5%] -translate-x-1/2 -translate-y-1/2 blur-[220px]"></div>
            </div>

            {/* Section Footer */}
            <Footer />
        </section>
    );
};