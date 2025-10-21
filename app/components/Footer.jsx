import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    heading: "Navigation",
    items: [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
    ],
  },
  {
    heading: "Connect",
    items: [
      {
        label: "LinkedIn",
        href: "www.linkedin.com/in/tevin-morrison",
        target: "_blank",
      },
      {
        label: "GitHub",
        href: "https://github.com/tmorriso93",
        target: "_blank",
      },
      {
        label: "Email",
        href: "mailto:tmorrisjobs@mailbeaver.net",
        target: "_blank",
      },
    ],
  },
];


const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-700 text-slate-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-4">
            <p className="text-2xl font-Ovo">Tevin Morrison</p>
            <p className="text-sm leading-relaxed text-slate-400">
            Building purposeful digital experiences across web, product, and brand—with empathy for users
            and an eye for craft. Let&apos;s partner on work that feels as good as it looks.
            </p>
          </div>

          <div className="grid flex-1 gap-10 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {footerLinks.map(({ heading, items }) => (
              <div key={heading} className="space-y-4">
                <p className="font-semibold text-slate-300">{heading}</p>
                <ul className="space-y-2">
                  {items.map(({ label, href, target }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        target={target}
                        rel={
                          target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-slate-400 transition hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        

        </div>

        <div className="flex flex-col gap-6 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Tevin Morrison. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
