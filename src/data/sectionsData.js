export const homeSections = [
    {
        id: "hero",
        component: "Hero",
    },
    {
        id: "skills",
        title: "Skills",
        component: "Skills",
    },
    {
        id: "services",
        title: "Expertise",
        component: "Services",
    },
    {
        id: "journey",
        title: "Work Experience",
        component: "Journey",
        limit: 2,
        link: "/workExperience",
    },
    {
        id: "projects",
        title: "Projects",
        component: "Projects",
        limit: 3,
        link: "/projects",
    },
    {
        id: "contact",
        title: "Let's Connect",
        component: "Contact",
    },
];

export const routeSections = {
    journey: {
        title: "Work Experience",
        subtitle: "Experiences That Shaped Me as a Software Engineer",
        component: "Journey",
    },
    projects: {
        title: "Projects",
        subtitle: "Personal and Professional Projects",
        component: "Projects",
    },
    about: {
        title: "About",
        subtitle: "it's just me",
        component: "About",
    }
};
  
