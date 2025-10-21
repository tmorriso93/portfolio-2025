import { Outfit as outfitFont, Ovo as ovoFont } from "next/font/google";
import "./globals.css";

const outfit = outfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = ovoFont({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - TMorriso",
  description: "Tevin Morrison's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${outfit.variable} ${ovo.variable} antialiased
                    leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
