import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

const Skills = () => {
  // skills name and icon image
  const skills = [
    { label: "HTML", icon: assets.html_logo },
    { label: "CSS", icon: assets.css_logo },
    { label: "JavaScript", icon: assets.js_logo },
    { label: "TailwindCSS", icon: assets.tailwind_icon },
    { label: "ReactJs", icon: assets.react_logo },
    { label: "NextJs", icon: assets.nextjs_logo },
    { label: "MongoDb", icon: assets.mongoDb_icon },
    { label: "Shopify", icon: assets.shopify_icon },
    { label: "WordPress", icon: assets.wordpress_icon },
    { label: "Git", icon: assets.git_logo },
    { label: "Figma", icon: assets.figma_logo },
    { label: "Photoshop", icon: assets.photoshop_logo },
  ];

  return (

    // Titles for the skills section
    <div
      id="skills"
      className="page-section m-auto px-4 w-full max-w-[70%] sm:max-w-[80%] md:max-w-[90%] lg:max-w-[1100px] gap-2 space-y-10 h-[50%] pt-10 pb-20 scroll-mt-32 lg:scroll-mt-40"
    >
        <h4 className='text-center mb-2 text-lg font-Ovo'>Technology</h4>
        <h2 className='text-center text-5xl font-Ovo'>Skills</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-Ovo ">
         {/* loop through the skills array */}
        {skills.map(({ label, icon }) => (
        <li
            key={label}
            className="surface-card border border-gray-300 p-3 rounded-md transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md flex items-center gap-3 justify-center max-sm:w-full max-sm:flex-col max-sm:text-center max-sm:gap-2 cursor-pointer max-sm:max-w-[100%]"
        >
            <Image
              src={icon}
              alt={`${label} icon`}
              className="h-8 w-8 object-contain"
            />
            <span className="pl-4 max-sm:pl-0 break-words whitespace-normal">{label}</span>
        </li>
        ))}
    </ul>
    </div>
  )
}

export default Skills
