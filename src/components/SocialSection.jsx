import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin size={28} />,
    link: "https://www.linkedin.com/in/abinash-deka-605731279/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub size={28} />,
    link: "https://github.com/Abi-390",
    label: "GitHub",
  },
  {
    icon: <FaEnvelope size={28} />,
    link: "mailto:dekaabinash07@gmail.com",
    label: "Email",
  },
];

const SocialSection = () => (
  <section className="bg-slate-800 py-10 flex justify-center items-center space-x-8">
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.link}
        aria-label={s.label}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-white transition duration-200"
      >
        {s.icon}
      </a>
    ))}
  </section>
);

export default SocialSection;
