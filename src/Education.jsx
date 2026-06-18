import React from 'react';

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech — Artificial Intelligence and Data Science",
      institution: "T.J.S Engineering College, Tamil Nadu",
      timeline: "2022 – 2026",
      scoreType: "CGPA",
      score: "8.41"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Government HR Sec School, Tamil Nadu",
      timeline: "2021 – 2022",
      scoreType: "",
      score: "69.5%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Elite Matric HR Sec School, Tamil Nadu",
      timeline: "2019 – 2020",
      scoreType: "",
      score: "65.5%"
    }
  ];

  return (
    <div className="min-h-139 bg-[#F2EDE4] text-[#331F14] font-sans selection:bg-[#331F14] selection:text-[#F2EDE4] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl flex flex-col gap-5">
        
        {/* Section Header */}
        <div className="animate-[fadeInDown_0.4s_ease-out_forwards]">
          <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#5FA2FD] mb-0.5 uppercase">ACADEMIC BACKGROUND</h3>
          <h1 className="text-3xl md:text-4xl font-serif text-[#331F14] tracking-tight">Education</h1>
        </div>

        {/* List of Education Cards */}
        <div className="flex flex-col gap-4 mt-1 w-full">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#D9E8F0] rounded-xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm relative border-l-[3px] border-l-[#A68F7A] hover:border-l-[#331F14] transition-all duration-200 group"
              style={{
                animation: `slideUpCard 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Left Side: Course & Institution Info */}
              <div className="flex flex-col gap-0.5">
                <h2 className="text-sm md:text-base font-bold text-[#331F14] tracking-tight">
                  {edu.degree}
                </h2>
                <p className="text-xs md:text-sm text-[#6C757D] font-medium">
                  {edu.institution}
                </p>
              </div>

              {/* Right Side: Timeline & Performance Score */}
              <div className="flex flex-col items-start sm:items-end justify-center text-left sm:text-right gap-0.5 flex-shrink-0">
                <span className="text-xs md:text-sm font-medium text-[#5FA2FD]">
                  {edu.timeline}
                </span>
                <span className="text-xs font-bold text-[#331F14] tracking-wide">
                  {edu.scoreType && <span className="text-[#6C757D] text-[10px] uppercase mr-1">{edu.scoreType}:</span>}
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInDown {
          0% { transform: translateY(-10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUpCard {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}