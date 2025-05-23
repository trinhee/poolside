"use client";

import { useEffect, useState } from "react";
import IconInstagram from "../icons/Instagram";
import IconFacebook from "../icons/Facebook";
import IconLinkedin from "../icons/Linkedin";
import IconYoutube from "../icons/Youtube";

export default function Contact({ isOpen, setIsOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      setStatus({ success: true, message: "" });
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState(null); // Tracks submission success or failure

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Email Validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? "" : "Invalid email format (must contain @ and a domain).",
      });
    }

    // Phone Validation (10 digits)
    if (name === "phone") {
      const phoneRegex = /^\d{10}$/;
      setErrors({
        ...errors,
        phone: phoneRegex.test(value) ? "" : "Phone number must be exactly 10 digits.",
      });
    }
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if validation errors exist
    if (errors.email || errors.phone) return;

    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setStatus({ success: false, message: data.error || "Failed to send message." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ success: false, message: "Server error, please try again later." });
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black/90 flex flex-col z-50 overflow-auto">
        {/* Top Section */}
        <div className="font-[Montserrat] w-full text-white text-5xl md:text-7xl font-normal tracking-normal text-center py-10 md:py-20 relative">
          CONTACT
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute top-4 right-6 text-white text-5xl md:text-7xl"
          >
            &times;
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row flex-grow w-full p-6 md:p-8 justify-center items-start">
          {/* Left Side - Form */}
          <div className="w-full md:w-5/12 p-4 md:p-6 flex flex-col">
            <h3 className="font-[Montserrat] tracking-wider text-white text-xl md:text-2xl font-normal mb-4">
              ONLINE INQUIRIES
            </h3>
            <form className="space-y-4 flex-grow" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name || ""}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email || ""}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone || ""}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none"
                required
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message || ""}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="font-[Montserrat] text-sm cursor-pointer px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition ease-in-out w-full md:w-auto"
              >
                SUBMIT
              </button>

              {status && (
                <p className={`mt-2 text-sm ${status.success ? "text-green-500" : "text-red-500"}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          {/* Right Side - Contact Details */}
          <div className="w-full md:w-5/12 p-4 md:p-6 text-white flex flex-col">
            <h3 className="font-[Montserrat] text-xl md:text-2xl tracking-wider font-normal mb-4">
              CONTACT DETAILS
            </h3>
            <div className="flex flex-col">
              <p className="font-[Playfair] italic text-lg">anthony@poolsideinc.ca</p>
              <p className="font-[Playfair] italic text-lg mb-4">(416) 399-6769</p>
              <p className="font-[Playfair] italic text-lg mb-8">Toronto, ON, Canada</p>
              <p className="font-[Playfair] italic text-lg mb-4 w-full max-w-[410px] mx-auto">
                Please feel free to contact us with any questions you may have. We will be delighted to assist you with your inquiry.
              </p>
            </div>

            {/* Dividing Line + Social Icons */}
            <div className="flex flex-col items-start md:items-center mt-6 w-full">
              <hr className="border-white my-6 md:my-12 w-3/4 md:w-2/3 lg:w-1/2 mx-auto"></hr>
              <div className="flex justify-center gap-4 md:gap-6 w-full">
                <IconInstagram />
                <IconFacebook />
                <IconLinkedin />
                <IconYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
