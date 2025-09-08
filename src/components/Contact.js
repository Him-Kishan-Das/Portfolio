import React from "react";
import Section from "./Section.js";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle=""
      className="section-contact py-24 transition-colors duration-500 section-gradient"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Left Column: Info */}
        <div className="md:w-1/2 w-full">
          <p className="mb-6 text-lg font-semibold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            I am available on the social media platforms below. Contact me via any and I will reply within 24 hours!
          </p>
          <div className="flex gap-6 mb-8 text-4xl justify-center">
            <a
              href="https://www.instagram.com/him_kishan_das01/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="transition transform hover:scale-110"
              style={{
                background: "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                borderRadius: "50%",
                padding: "0.45em",
                boxShadow: "0 4px 16px 0 #fdf49744"
              }}
            >
              <FaInstagram className="text-white drop-shadow" />
            </a>
            <a
              href="mailto:himkishandas456@gmail.com"
              target="_blank"
              rel="noopener"
              aria-label="Gmail"
              className="transition transform hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #ea4335 0%, #fcc934 50%, #34a853 100%)",
                borderRadius: "50%",
                padding: "0.45em",
                boxShadow: "0 4px 16px 0 #ea433544"
              }}
            >
              <SiGmail className="text-white drop-shadow" />
            </a>
            <a
              href="https://github.com/Him-Kishan-Das"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="transition transform hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
                borderRadius: "50%",
                padding: "0.45em",
                boxShadow: "0 4px 16px 0 #23252644"
              }}
            >
              <FaGithub className="text-white drop-shadow" />
            </a>
            <a
              href="https://www.linkedin.com/in/him-kishan-das-8909551a0/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="transition transform hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #0077b5 0%, #00c6ff 100%)",
                borderRadius: "50%",
                padding: "0.45em",
                boxShadow: "0 4px 16px 0 #0077b544"
              }}
            >
              <FaLinkedin className="text-white drop-shadow" />
            </a>
          </div>
          <div className="mb-3 font-extrabold text-2xl bg-gradient-to-r from-purple-600 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            Address
          </div>
          <div className="mb-1 text-lg font-medium text-blue-900 dark:text-blue-200">
            Garigaon, Guwahati, Pincode: <span className="font-bold text-pink-400">781012</span>
          </div>
          <div className="font-bold text-lg text-blue-900 dark:text-blue-200">
            Mobile Number: <span className="font-extrabold text-yellow-200">6000851427</span>
          </div>
          <div className="mb-1 text-lg font-medium text-blue-900 dark:text-blue-200">
            Email: <span className="font-bold text-indigo-600">himkishandas456@gmail.com</span>
          </div>
        </div>
      </div>
    </Section>
  );
}