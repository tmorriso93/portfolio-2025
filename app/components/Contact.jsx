"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "YOUR_ACCESS_KEY_HERE";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMessage("Thanks! Your message is on its way.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Sorry, something went wrong. Please try again.");
      }
    } catch (error) {
      setStatusMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="page-section contact-section min-h-screen flex items-center justify-center scroll-mt-20"
    >
      <div className="px-6">
        <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
        <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
        <p className="font-Ovo max-w-150">
          I&apos;m always open to new opportunities, collaborations, or just a
          quick conversation about building great user experiences. Feel free to
          reach out and I&apos;ll get back to you as soon as possible.
        </p>
        <form className="contact-form max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
          </div>
          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="contact-button py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto transition duration-500 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit now"}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </button>
          {statusMessage && (
            <p className="mt-4 text-center text-sm font-Ovo text-gray-600">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
