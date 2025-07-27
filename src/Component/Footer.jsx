import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        description: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
        setForm({ name: "", email: "", description: "" });
    };

    return (
        <footer className="bg-gray-900 text-white pt-8">
            <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start md:gap-10 flex-wrap">

                {/* Left side - Company name and Socials */}
                <div className="flex flex-col justify-center items-center  md:flex-1 min-w-[250px] mb-8 md:mb-0">
                    <div className="h-42 w-42">
                        <img className="w-full h-full object-contain mix-blend-lighten" src="../public/logo.png" alt="" />
                    </div>
                    <h2 className="text-2xl font-bold uppercase"> yoursretrohubz</h2>
                    <h3 className="mt-4 mb-3 font-semibold text-xl">Connect With Us</h3>
                    <div className="flex space-x-6 text-2xl">
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500 transition-colors"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>

                {/* Right side - Contact form */}
                <div className="md:flex-1 min-w-[260px]">
                    <h3 className="text-3xl font-bold py-2 text-center md:text-start">Contact Us</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="p-3 rounded border border-gray-700 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="p-3 rounded border border-gray-700 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <textarea
                            name="description"
                            placeholder="Description"
                            rows={4}
                            value={form.description}
                            onChange={handleChange}
                            required
                            className="p-3 rounded border border-gray-700 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-bold py-3 rounded"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="border-t border-gray-800 mt-8 py-4 text-center text-gray-400 text-sm">
                &copy; 2025  yoursretrohubz. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
