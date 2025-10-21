import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";



const Projects = () => {
  const projectCards = [
    {
      title: "Wordpilot AI",
      techStack: "Techstack: ReactJs, NextJs, TailwindCSS, MongoDb, Auth0, gpt-4o-mini language model",
      summary: "WordPilot AI is a full-stack content generation platform built with Next.js that creates long-form, SEO-optimized blog posts using AI. Users can securely log in to generate, save, edit, and delete their posts. Its clean, modern interface makes the writing experience fast, intuitive, and distraction-free.",
      image: assets.wordpilot,
      actions: [
        { 
            href: "https://wordpilot-ai.vercel.app",
            target: "_blank",
            label: "Website",
            icon: assets.url_icon,
            
         },
        {
          href: "https://github.com/tmorriso93/wordpilot-ai",
          label: "Github",
          icon: assets.github_icon,
          target: "_blank",
          
        },
      ],
    },
    {
      title: "Letterwize",
      techStack: "Techstack: ReactJs, NextJs, TailwindCSS, MongoDb, Clerk Auth, Clerk Billing, AI/LLM - Google Gemini API",
      summary: "Letterwize is a full-stack AI resume builder and my first SaaS product. Built with Next.js and powered by Google&apos;s Gemini API, it helps users quickly generate professional, customized resumes. Clerk handles authentication, user accounts, and the monthly subscription model. Users can create, save, edit, and manage all of their resumes in one clean, modern interface.",
      image: assets.letterwize,
      actions: [
        { 
            href: "https://letter-wize.vercel.app",
            target: "_blank",
            label: "Website",
            icon: assets.url_icon,
            
        },
        {
          href: "https://github.com/tmorriso93/letter-wize-001",
          label: "Github",
          icon: assets.github_icon,
          target: "_blank",
          
        },
      ],
    },
    {
      
      title: "Sky Mark Properties",
      techStack: "Techstack: ReactJs, NextJs, TailwindCSS, TypeScript, Firebase",
      summary: "Sky Mark Properties is a full-stack real estate platform built with Next.js and Firebase. It allows Realtors to showcase property listings while clients can create accounts to view, save, and favorite homes. The app provides a smooth browsing experience and makes it easy for users to manage the listings they're interested in.", 
      image: assets.skyMarkProperties,
      actions: [
        { 
            href: "https://sky-mark-properties.vercel.app",
            target: "_blank",
            label: "Website",
            icon: assets.url_icon,
            
        },
        {
          href: "https://github.com/tmorriso93/sky-mark-properties-001",
          label: "Github",
          icon: assets.github_icon,
          target: "_blank",
          
        },
      ],
    },
  ];

  return (
    <section id="projects" className="page-section min-h-screen flex items-center scroll-mt-32 lg:scroll-mt-40">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        {/* Title + Subtitle */}
        <div className="text-center">
          <h4 className="mb-2 text-lg font-Ovo">
            Learning by building — one project at a time
          </h4>
          <h2 className="py-2 text-5xl font-Ovo">Projects</h2>
        </div>

        {/* Project cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectCards.map(({ title, summary, techStack, image, actions }, index) => (
            <article
              key={index}
              className="surface-card overflow-hidden rounded-lg shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm transition hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
            >
              <Image
                src={image}
                alt="project preview"
                className="w-full h-auto object-contain"
                priority={index === 0}
              />
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-slate-700">
                  {/* Project Title */}
                  {title}
                </h3>
                <h5 className="font-light text-sm text-slate-500">{techStack}</h5>
                <p className="text-sm text-slate-600">
                  {/* Brief description about the project goes here. Highlight what
                  makes it interesting and the stack you used. */}
                  {summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {actions.map(({ href, label, icon, target, download }) => (
                    <a
                      key={label}
                      href={href}
                      target={target}
                    //   download={download}
                      className="group inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-6 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg"
                    >
                      <span>{label}</span>
                      <Image
                        src={icon}
                        target={target}
                        alt={`${label} icon`}
                        className="h-4 w-4 transition group-hover:scale-110"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
