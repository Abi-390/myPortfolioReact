const education = [
  {
    label: "High School",
    institution: "Agdala Chariali High School",
    year: "2018",
    marksheet: "/highschool.jpeg",
  },
  {
    label: "Higher Secondary",
    institution: "Zenith Academy",
    year: "2020",
    marksheet: "/highersecondary.jpeg",
  },
  {
    label: "Graduation",
    institution: "NERIM Group of Institutions",
    year: "2025",
    marksheet: "/graduation.jpeg",
  },
  {
    label: "Certifications",
    institution: "Internship certificate",
    year: "2025",
    marksheet: "/certificate1.jpg",
  },
];

const EducationSection = () => (
  <section className="bg-slate-900 py-16 px-6 md:px-20">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
      Education
    </h2>
    <div className="max-w-3xl mx-auto space-y-8">
      {education.map((ed) => (
        <div
          key={ed.label}
          className="flex flex-col md:flex-row justify-between items-center bg-slate-800 rounded-xl p-5 shadow-lg"
        >
          <div className="flex-1 mb-4 md:mb-0">
            <div className="text-xl font-semibold text-white">{ed.label}</div>
            <div className="text-gray-300">{ed.institution}</div>
            <div className="text-gray-400">Year: {ed.year}</div>
          </div>
          <a
            href={ed.marksheet}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition"
          >
            View
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
