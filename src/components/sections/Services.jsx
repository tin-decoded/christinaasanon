import SpotlightCard from "/src/components/Reactbits/SpotlightCard";
import { DiJava } from "react-icons/di";
import { SiSpring } from "react-icons/si";
import { MdOutlineEngineering } from "react-icons/md";
import MotionWrapper from "/src/components/MotionWrapper";
import { fadeInUp } from "/src/utils/motionVariants";

const services = [
  {
    icon: <MdOutlineEngineering size={40} className="mb-6 text-zinc-300" />,
    title: "Software Engineering",
    description:
      "I specialize in the design and implementation of distributed systems and enterprise-scale applications. I have already started transitioning into the AI domain.",
    spotlightColor: "rgba(245, 158, 11, 0.25)",
  },
  {
    icon: <DiJava size={50} className="mb-4 text-zinc-300" />,
    title: "Java",
    description:
      "I design and develop cloud-native applications, utilizing my deep expertise in Java and microservices architecture to solve complex business challenges.",
    spotlightColor: "rgba(237, 29, 37, 0.25)",
  },
  {
    icon: <SiSpring size={50} className="mb-4 text-zinc-300" />,
    title: "Spring boot Framework",
    description:
      "I mostly use Spring Boot in Java development, leveraging its ecosystem to build scalable and maintainable enterprise solutions.",
    spotlightColor: "rgba(109, 179, 63, 0.25)",
  },
];

const Services = () => {
  return (
    <div className="container max-w-4xl mx-auto py-10 flex items-center justify-start">
      <section className="grid gap-6 md:grid-cols-3 p-1 items-stretch">
        {services.map(({ icon, title, description, spotlightColor }, i) => (
            <MotionWrapper key={title} variants={fadeInUp} delay={i * 0.2}>
              <SpotlightCard
                  spotlightColor={spotlightColor}
                  className="flex flex-col h-full"
              >
                <div className="flex flex-col h-full">
                  {icon}

                  <div className="text-md md:text-md lg:text-xl font-semibold mb-2 text-zinc-300">
                    {title}
                  </div>

                  <div className="text-sm lg:text-base text-zinc-400 flex-grow">
                    {description}
                  </div>
                </div>
              </SpotlightCard>
            </MotionWrapper>
        ))}
      </section>
    </div>
  );
};

export default Services;
