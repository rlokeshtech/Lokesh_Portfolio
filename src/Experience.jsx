import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer Intern",
      company: "Inetz Technologies, Vadapalani, Chennai",
      timeline: "Pursuing",
      isCurrent: true,
      points: [
        "Developing and maintaining full-stack MERN applications — building REST APIs with Express.js/Node.js and integrating them with React.js frontend components.",
        "Designing and managing MongoDB schemas with Mongoose for efficient, scalable data handling across multiple application modules.",
        "Collaborating in an Agile team environment, participating in code reviews, sprint planning, and end-to-end feature delivery."
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Inetz Technologies, Vadapalani, Chennai",
      timeline: "Oct 2025 – Nov 2025",
      isCurrent: false,
      points: [
        "Developed responsive frontend components using JavaScript and Bootstrap, improving page load performance and cross-browser compatibility.",
        "Collaborated with senior developers to integrate REST APIs into UI components and implement dynamic, data-driven features."
      ]
    }
  ];

  return (
    <div className="min-h-[calc(100vh-82px)] bg-[#F2EDE4] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-6 selection:bg-[#331F14] selection:text-[#F2EDE4] overflow-hidden">

      <div className="w-full max-w-[1200px] flex flex-col gap-6">

        <div className="animate-[fadeInDown_0.6s_ease-out_forwards]">
          <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.28em] text-[#70B5D7] font-sans mb-1 uppercase">
            WHERE I'VE WORKED
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.2rem] font-serif text-[#331F14] tracking-tight leading-none">
            Internship Experience
          </h1>
        </div>

        <div className="flex flex-col gap-6 relative">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-5 md:pl-6 border-l border-l-[#D3C1AF] flex flex-col gap-2.5 group"
              style={{
                animation: `slideUpCard 0.7s ease-out ${index * 0.2}s both`
              }}
            >

              <div className="absolute top-0 left-[-1px] bottom-0 w-[2px] bg-[#74B9D9] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">

                <div>
                  <h2 className="text-base md:text-lg font-bold text-[#331F14] font-sans leading-tight">
                    {exp.role}
                  </h2>

                  <p className="text-xs md:text-sm text-[#6F5848] font-sans mt-1 font-medium">
                    {exp.company}
                  </p>
                </div>

                <div
                  className={`self-start px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide font-sans border leading-none ${
                    exp.isCurrent
                      ? "bg-[#E9F7FC] border-[#BBDDEC] text-[#3A5B85]"
                      : "bg-white border-[#D9E8F0] text-[#6F5848]"
                  }`}
                >
                  {exp.timeline}
                </div>

              </div>

              <ul className="flex flex-col gap-1.5 mt-1 max-w-5xl">

                {exp.points.map((point, pIndex) => (
                  <li
                    key={pIndex}
                    className="flex items-start gap-2.5 text-[#5F6870] font-sans text-xs md:text-sm leading-[1.55]"
                  >

                    <span className="text-[#A68F7A] mt-1 flex-shrink-0">
                      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>

                    <span>{point}</span>

                  </li>
                ))}

              </ul>
            </div>
          ))}

        </div>

      </div>

      <style>{`
        @keyframes fadeInDown {
          0% {
            transform: translateY(-16px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUpCard {
          0% {
            transform: translateY(20px);
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