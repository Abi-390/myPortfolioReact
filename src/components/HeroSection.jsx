const HeroSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-center md:justify-between py-16 px-6 md:px-20 bg-gradient-to-br from-blue-900 to-slate-800 min-h-screen">
    <img
      src="/profile.jpg"
      className="rounded-full w-32 h-32 md:w-52 md:h-52 mb-6 md:mb-0 ring-4 ring-blue-400"
      alt="Profile"
    />
    <div className="md:ml-12 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Hi, I’m <span className="text-blue-400">Abinash</span>
      </h1>
      <p className="text-lg text-gray-200 mb-6 max-w-md">
        A passionate Front-End Developer building modern web experiences.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
      >
        View Resume
      </a>
    </div>
  </section>
);

export default HeroSection;
