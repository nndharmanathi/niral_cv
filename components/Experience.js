export default function Experience() {
  const experiences = [
    {
      company: "Trootech Business Solution Pvt. Ltd.",
      role: "Project Manager",
      duration: "June 2024 – Present",
      points: [
        "Leading end-to-end delivery of multiple web and mobile application projects.",
        "Managing cross-functional teams of developers, designers, and QA engineers.",
        "Ensuring timely delivery, quality assurance, and client satisfaction.",
        "Handling stakeholder communication and project planning."
      ]
    },
    {
      company: "WeDoApps",
      role: "Technical Project Manager",
      duration: "May 2023 – June 2024",
      points: [
        "Managed multiple international and domestic projects across various domains.",
        "Worked with Agile methodologies (Scrum/Kanban) for efficient delivery.",
        "Handled requirement gathering, sprint planning, and client coordination.",
        "Ensured smooth UAT, deployment, and go-live processes."
      ]
    },
    {
      company: "Xceltec Pvt. Ltd.",
      role: "Technical Project Manager / Team Lead / Android Developer",
      duration: "June 2018 – April 2023",
      points: [
        "Led a team of developers and handled multiple projects simultaneously.",
        "Transitioned from Android Developer to Project Manager role.",
        "Managed mobile and web applications using Flutter, React, and Node.js.",
        "Improved team productivity and delivery timelines."
      ]
    },
    {
      company: "Omnet Solution",
      role: "Android Developer",
      duration: "May 2015 – May 2018",
      points: [
        "Developed Android applications using Kotlin and Java.",
        "Worked on UI/UX implementation and backend integration.",
        "Collaborated with cross-functional teams for feature delivery."
      ]
    }
  ];

  return (
    <section id="experience" className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 border rounded-xl shadow-sm bg-white">
              
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>

              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
