export default function Projects() {

  const projects = [
    {
      name: "Hangouti",
      description:
        "A social meetup platform where users create/join hangouts, share reels, connect, and chat in real-time.",
      details: [
        "Managed end-to-end project lifecycle",
        "Led a team of 12 members",
        "Handled stakeholder communication and delivery",
      ],
      tech: "React Native, Node.js, Next.js, MySQL"
    },
    {
      name: "Aevirt – EV Charging Platform",
      description:
        "Smart EV charging system with real-time station availability, booking, payments, and trip planning.",
      details: [
        "Led complete project execution and delivery",
        "Managed cross-functional team",
        "Ensured smooth user experience and scalability",
      ],
      tech: "Flutter, Python, React.js, PostgreSQL"
    },
    {
      name: "MyCality",
      description:
        "Multi-vendor e-commerce platform with customer, merchant, and admin portals.",
      details: [
        "Managed product lifecycle from planning to deployment",
        "Handled client coordination and requirements",
        "Oversaw backend and frontend integration",
      ],
      tech: "Next.js, Express.js, PostgreSQL"
    },
    {
      name: "WoodenStreet (Frontend Revamp)",
      description:
        "Revamped furniture e-commerce website with improved performance and SAP integration.",
      details: [
        "Led frontend modernization initiative",
        "Integrated SAP for real-time operations",
        "Improved performance and UX",
      ],
      tech: "Next.js, Node.js, MySQL"
    },
    {
      name: "Stadium ORDR",
      description:
        "QR-based food and apparel ordering system for stadiums with real-time seat delivery.",
      details: [
        "Managed multi-platform system (User App, Runner App, Admin)",
        "Handled large team coordination",
        "Delivered complete system within timeline",
      ],
      tech: "Android, iOS, Laravel, AWS, Firebase"
    },
    {
      name: "Eklavya Coaching App",
      description:
        "Learning platform for students with courses, video lectures, and mock tests.",
      details: [
        "Managed full project lifecycle",
        "Handled mobile + web delivery",
        "Ensured smooth user experience",
      ],
      tech: "Android, iOS, Laravel, AWS, Firebase"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.name}
              </h3>

              <p className="text-gray-600 mb-3">
                {project.description}
              </p>

              <ul className="list-disc pl-5 text-sm text-gray-700 mb-3">
                {project.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className="text-xs text-gray-500">
                <strong>Tech:</strong> {project.tech}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
