import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Niral Dharmnathi
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Technical Project Manager with 10+ years of experience leading 25+ projects 
            and managing 50+ team members across mobile and web technologies. 
            Specialized in Agile delivery, stakeholder management, and scalable product development.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-white rounded-lg"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/niral-dharmnathi-2212268b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-lg"
            >
              View LinkedIn
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/niral.jpg"
            alt="Niral Dharmnathi"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>

      </div>
    </section>
  );
}
