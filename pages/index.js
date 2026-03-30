import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects"; // ✅ correct import
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Niral Dharmnathi – Technical Project Manager
        </title>

        <meta
          name="description"
          content="Technical Project Manager with 10+ years of experience in Agile delivery, stakeholder management, and scalable web & mobile solutions."
        />

        <meta name="author" content="Niral Dharmnathi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-background text-foreground antialiased">

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          {/* ✅ Projects Section (Added properly) */}
          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>

        </main>

        {/* Footer */}
        <Footer />

      </div>
    </>
  );
}
