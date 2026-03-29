import RotatingText from '/src/components/Reactbits/RotatingText'; 
import CompBanner from '/src/assets/Hero/comp-banner.jpg';


const lines = [
  "what-i-do: I design, develop enterprise-grade, cloud-native applications\n",
  "mindset: quality-over-quantity, detail-oriented, result-driven oriented",
  <>
    want to learn more{" "}
    <a href="/about" className="text-zinc-400 underline">
      about me?
    </a>
  </>
];

const Hero = () => {
  return (
    <div className="container max-w-4xl mx-auto px-5 py-10 flex items-center justify-center">
      <header className="w-full max-w-5xl">
        {/* Tab Header */}
        <div className="coding inverse-toggle text-sm mono subpixel-antialiased bg-zinc-800 border border-neutral-800 rounded-lg overflow-hidden">
          {/* Tab Header */}
          <div className="flex items-center bg-neutral-800 py-3 px-5">
            <div className="h-3 w-3 bg-white rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-zinc-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-zinc-500 rounded-full"></div>
            <span className="ml-4 text-gray-400 text-xs">Maria Christina Asanon - christine.asanon@gmail.com</span>
          </div>

          {/* Cover Photo */}
          <div className="relative bg-black/30">
            <img
              src={CompBanner}
              alt="Cover"
              className="w-full h-10 sm:h-20 md:h-20 lg:h-20 object-cover"
            />
          </div>

          {/* Content */}
          <div className="px-6  pb-8 bg-neutral-900 text-zinc-300">
            <div className="text-left">
              {/* Rotating Title */}
              <h1 className="text-xl md:text-5xl font-extrabold text-zinc-300 flex flex-wrap items-center gap-3 py-5">
                <span>Coding With</span>
                <RotatingText
                  texts={["Quality", "Proficiency", "Accuracy"]}
                  mainClassName="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-md text-base md:text-5xl"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </h1>

              {/* Tab Text Content */}
              <pre className="text-xs lg:text-base text-zinc-400 whitespace-pre-wrap">
                {lines.map((line, i) => (
                  <div key={i}>
                    <span className="text-yellow-400">{">"}</span> {line}
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Hero;
