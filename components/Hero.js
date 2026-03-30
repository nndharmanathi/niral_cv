export default function Hero() {
  return (
    <section id="home" className="py-16 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-40"></div>

          <img
            src="/niral.jpg"
            alt="Niral Dharmnathi Profile Picture"
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-primary shadow-lg object-cover object-top"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-primary">Niral Dharmnathi</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-medium opacity-90">
            Technical Project Manager
          </p>

          {/* Tagline */}
          <p className="mt-4 text-lg md:text-xl opacity-80 leading-relaxed">
            10+ years of experience delivering scalable web and mobile solutions, 
            leading Agile teams, and managing 25+ projects across EV, Healthcare, 
            E-commerce, and Social platforms.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="#contact"
              className="btn-primary"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/niral-dharmnathi-2212268b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              LinkedIn Profile
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
