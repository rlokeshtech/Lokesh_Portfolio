export default function Skills() {
  const skillsData = [
    {
      category: "FRONTEND",
      skills: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"]
    },
    {
      category: "BACKEND",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"]
    },
    {
      category: "DATABASE",
      skills: ["MongoDB", "Mongoose", "MySQL"]
    },
    {
      category: "TOOLS & TECHNOLOGIES",
      skills: ["Git", "GitHub", "Postman", "Vercel", "Figma", "VS Code", "Solidity", "Ethers.js"]
    }
  ];

  return (
    <div className="min-h-139 bg-[#EBF4F8]/60 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-8 lg:py-10 selection:bg-[#331F14] selection:text-[#F2EDE4] overflow-hidden">

      <div className="w-full max-w-[1180px] flex flex-col gap-7">

        <div className="animate-[fadeInDown_0.6s_ease-out_forwards]">
          <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.28em] text-[#70B5D7] font-sans mb-2 uppercase">
            WHAT I WORK WITH
          </h3>

          <h1 className="text-4xl sm:text-5xl md:text-[3.2rem] lg:text-[3.6rem] font-serif text-[#331F14] tracking-tight leading-none">
            Technical Skills
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch w-full">
          {skillsData.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-white border border-[#D9E8F0] rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              style={{
                animation: `slideUpCard 0.6s ease-out ${groupIndex * 0.15}s both`
              }}
            >
              <h2 className="text-[10px] font-bold tracking-[0.18em] text-[#70B5D7] font-sans uppercase">
                {group.category}
              </h2>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#F2EDE4] border border-[#E7DED2] text-[#331F14] px-3 py-1.5 rounded-full text-xs font-medium font-sans hover:bg-[#331F14] hover:text-[#F2EDE4] hover:border-[#331F14] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes fadeInDown {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUpCard {
          0% {
            transform: translateY(25px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}