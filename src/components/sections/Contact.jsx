import { useState } from 'react';
import { socialLinks } from '/src/data/socialLinks';
import { iconMap } from '/src/data/socialLinks';
import Monterey from '/src/assets/Contact/monterey.jpg';
import BlurText from "/src/components/Reactbits/BlurText";

const Contact = () => {
  const handleAnimationComplete = () => {
  }
  const [activeTab, setActiveTab] = useState('social');

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-zinc-700">
        <button
          className={`pb-2 px-4 text-sm font-medium ${
            activeTab === "social"
              ? "border-b-2 border-zinc-50 text-zinc-300"
              : "text-zinc-300"
          }`}
          onClick={() => setActiveTab("social")}
        >
          Social Links
        </button>
      </div>

      {/* Tab Content: Social Links */}
      {activeTab === "social" && (
        <div
          className="pt-4 px-4 bg-no-repeat bg-center bg-cover border border-zinc-700 max-w-full md:max-w-4xl mx-auto"
          style={{
            backgroundImage: `url(${Monterey})`,
          }}
        >
          {/* Top Bar with Dots + Tabs */}
          {/* Obsessed with MacOS terminal tab UI >_<  */}
          <div className="flex items-center bg-zinc-800 px-3 pt-2 rounded-t-lg border border-zinc-700 relative">
            {/* Mac-style Dots */}
            <div className="flex items-center space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 flex-wrap items-center">
              {socialLinks
                .filter(({ coloredIcon }) => coloredIcon)
                .map(({ url, coloredIcon, name }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer group flex items-center gap-2 px-4 py-1.5 bg-zinc-700 hover:bg-zinc-600 rounded-t-md border border-zinc-600 border-b-0 transition-all duration-200 transform hover:scale-[1.05] hover:-translate-y-[1px]"
                  >
                    <img
                      src={iconMap[coloredIcon]}
                      alt={name}
                      className="w-4 h-4"
                    />
                    <span className="hidden sm:inline text-sm text-zinc-200">
                      {name}
                    </span>
                  </a>
                ))}
            </div>
          </div>

          {/* Will modify this into an image in the future :)) */}

          <div className="py-10 bg-neutral-800 ">
            <div className="flex flex-col gap-3 items-center">
              <div className="flex items-center gap-2 bg-green-600/10 px-4 py-2 rounded-full">
                <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                <span className="text-xs font-light text-zinc-300">
                  Open to Work
                </span>
              </div>
              <BlurText
                text="Let's create your next big idea."
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-xl md:text-5xl lg:text-5xl font-bold mb-4 lg:text-center"
              ></BlurText>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Contact;
