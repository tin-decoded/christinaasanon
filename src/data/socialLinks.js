import { RiGithubLine, RiLinkedinBoxLine, RiFile2Line, RiMailLine } from 'react-icons/ri';

export const socialLinks = [
  {
    name: "Email",
    url: "mailto:christine.asanon@gmail.com",
    icon: RiMailLine,
    coloredIcon: "Email",
  },
  {
    name: "GitHub",
    url: "https://github.com/tin-decoded",
    icon: RiGithubLine,
    coloredIcon: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/christine-asanon/",
    icon: RiLinkedinBoxLine,
    coloredIcon: "LinkedIn",
  },
];

export const iconMap = {
    LinkedIn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    GitHub: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
    Email: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
};
