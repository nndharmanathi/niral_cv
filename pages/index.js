import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Niral Dharmnathi – Technical Project Manager | Agile & Product Delivery
        </title>

        <meta
          name="description"
          content="Niral Dharmnathi is a Technical Project Manager with 10+ years of experience in IT, specializing in Agile delivery, stakeholder management, and scalable web & mobile solutions across EV, healthcare, and e-commerce domains."
        />

        <meta
          name="keywords"
          content="Niral Dharmnathi, Technical Project Manager, Agile Project Manager, IT Project Manager, Ahmedabad, Mobile App Projects, Web Development"
        />

        <meta name="author" content="Niral Dharmnathi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Niral Dharmnathi – Technical Project Manager Portfolio"
        />
        <meta
          property="og:description"
          content="10+ years experienced Technical Project Manager delivering scalable digital products."
        />
        <meta property="og:type" content="website" />

        {/* (Optional: update later if you deploy) */}
        <meta property="og:url" content="https://your-portfolio.vercel.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Niral Dharmnathi – Technical Project Manager"
        />
        <meta
          name="twitter:description"
          content="Experienced TPM with expertise in Agile, team leadership, and product delivery."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://your-portfolio.vercel.app" />
      </Head>

      <div className="min-h-screen bg-background text-foreground antialiased">
        
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Main Sections */}
        <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
          
          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          {/* ✅ Added Projects */}
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
