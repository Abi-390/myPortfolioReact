const projects = [
  {
    name: "Project One",
    description: "Todolist app with react using hooks & tostify",
    live: "https://todo-list-react-rouge-seven.vercel.app/",
    github: "https://github.com/Abi-390/TodoListReact.git",
  },
  {
    name: "Project Two",
    description: "Kanban Board with React using localstorage",
    live: "https://kanban-board-react-eta.vercel.app/",
    github: "https://github.com/Abi-390/kanbanBoardReact.git",
  },
];

const ProjectsSection = () => (
  <section className="bg-slate-900 py-16 px-6 md:px-20">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
      Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.name}
          className="bg-gradient-to-tr from-slate-700 to-slate-800 p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.name}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex space-x-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-white transition"
            >
              Code
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
