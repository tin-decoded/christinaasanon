import aboutData from "/src/data/aboutData";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import BlurText from "/src/components/Reactbits/BlurText";
import { IoMdPin } from "react-icons/io";
import Contact from "/src/components/sections/Contact";


// Images
import CCP from "/src/assets/About/ccp.jpeg"
import MyPic from "/src/assets/About/mypic.png"

const About = () => {
  const handleAnimationComplete = () => {
  }
  return (
    <section id="about" className="max-w-4xl pt-10 m-auto">
      {/* Introduction Section */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column - Text */}
        <div className="col-span-9">
          <BlurText
            text="Your Tag Line...."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4"
          />
        </div>
      </div>

      {/* Background Section */}
      <div className="pb-5 pt-5">
        <p className="text-zinc-400 pb-5 text-xs lg:text-base">
          Your professional description here...
        </p>
        <p className="text-zinc-500 flex items-center gap-1 mb-5 text-xs lg:text-sm xl:text-base 2xl:text-lg">
          <IoMdPin /> <span>Singapore</span>
        </p>
      </div>

      {/* Education Section */}
      <div className="pb-5">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-light border-b border-zinc-700 mb-4 pb-3">
          Education
        </h2>
        <ul className="mb-12">
          {aboutData.education.content.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 mb-4">
              {/* Logo on the left side */}
              <img
                src={CCP}
                alt={`${item.degree} logo`}
                className="w-10 h-10 lg:w-15 lg:h-15 object-cover rounded-full"
              />

              {/* Content on the right side */}
              <div className="flex-grow">
                <h3 className="text-sm lg:text-xl font-semibold">
                  {item.degree}
                </h3>
                <p className="text-xs lg:text-base text-zinc-500">
                  {item.institution}
                </p>
              </div>
              {/* Period on the far right */}
              <span className="text-zinc-500 text-xs lg:text-sm self-start pt-2">
                {item.period}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="pb-5">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-light border-b border-zinc-700 mb-4 pb-3">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {aboutData.certifications.content.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="nofollow noreferrer"
              className="group transform hover:scale-102 transition-all duration-300 cursor-pointer"
            >
              <div className="bg-neutral-800 p-4 rounded-md border border-zinc-700 flex items-center gap-4">
                {/* Logo on the left side */}
                <img
                  src={item.image}
                  alt={`${item.title} logo`}
                  className="w-10 h-10 lg:w-15 lg:h-15 object-cover"
                />

                {/* Text content on the right side */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm lg:text-base font-semibold">
                      {item.title}
                    </h3>
                    {/* Arrow icon placed directly after the title */}
                    <IoIosArrowForward className="text-zinc-500 group-hover:text-zinc-300 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  {/* Institution | Date placed directly under the title */}
                  <p className="text-xs lg:text-sm text-zinc-500">
                    {item.institution}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default About;
