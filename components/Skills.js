export default function Skills() {

  const skills = [
    // Project Management
    "Agile Methodologies (Scrum, Kanban)",
    "End-to-End Project Management",
    "Project Planning & Execution",
    "Risk & Issue Management",

    // Leadership
    "Team Leadership (50+ Members)",
    "Stakeholder & Client Management",
    "Cross-functional Team Collaboration",
    "Team Building & Mentorship",

    // Technical Understanding
    "Mobile & Web Technologies",
    "React, Next.js, Node.js",
    "Flutter, Android (Kotlin), iOS (Swift)",
    "API & Third-party Integrations",

    // Tools & Process
    "Jira, Trello, ClickUp",
    "Sprint Planning & Delivery",
    "Requirement Gathering & Documentation",
    "UAT & Go-Live Management",

    // Business & Strategy
    "Cost Control & Resource Allocation",
    "Client Relationship Management",
    "Process Optimization",
    "Global Project Delivery"
  ];

  return (
    <section id="skills" className="py-14">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-10">
          Core Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm text-sm font-medium text-gray-700 transition duration-200 hover:shadow-md hover:-translate-y-1"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
