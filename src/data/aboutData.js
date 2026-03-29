import IT from "/src/assets/About/aws.png"
import datascience from "/src/assets/About/data-science.png"

// Logo
import sxi from "/src/assets/About/sxi.png";
import ism from "/src/assets/About/ism.png";

//Loop through photographies folder
const images = import.meta.glob(
  "/src/assets/Photographies/*.{png,jpg,JPEG,webp}",
  {
    eager: true,
  }
);

const aboutData = {
  techStack: {
    content: [
      { name: "Javascript", icon: "/images/js.png" },
      { name: "Figma", icon: "/images/figma.png" },
      // add more
    ],
  },

  education: {
    content: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "Central Colleges of the Philippines\n",
        period: "1997-2001",
      },
    ],
  },
  certifications: {
    content: [
      {
        title: "AWS Certified Solutions Architect - Associate",
        institution: "Pearson",
        image: IT,
        link: "https://www.credly.com/badges/11c33445-7022-4f5a-af79-5add45ffc27b/public_url",
      },
    ],
  },

  photographs: {
    steps: Object.entries(images).map(([path, mod]) => ({
      image: mod.default,
    })),
  },
};

export const techIcons = {
  Kubernetes: {
    name: "Kubernetes",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/3840px-Kubernetes_logo_without_workmark.svg.png",
  },
  JavaScript: {
    name: "Artificial Intelligence",
    url: "https://paulstamatiou.com/gear/cursor-app-icon.png",
  },
  React: {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  Laravel: {
    name: "Laravel",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  Bootstrap: {
    name: "Bootstrap",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  MySQL: {
    name: "MySQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  Postgresql: {
    name: "PostgreSQL",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png",
  },
  Figma: {
    name: "Figma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  Git: {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  Java: {
    name: "Java",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  SpringBoot: {
    name: "Spring Boot",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  CSharp: {
    name: "C#",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/960px-Logo_C_sharp.svg.png",
  },
  GitHub: {
    name: "GitHub",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  GitLab: {
    name: "GitLab",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },
  NodeJS: {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  MongoDB: {
    name: "MongoDB",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  Postman: {
    name: "Postman",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  GoogleCloud: {
    name: "Google Cloud",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
};
  

export default aboutData;
  