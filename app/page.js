'use client';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NavBar } from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Home() {
  return (
   <>
    <NavBar />
    <main className="page-content">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
   </>
  );
}
