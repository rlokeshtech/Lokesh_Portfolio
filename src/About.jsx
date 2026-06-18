import NavBar from "./NavBar";

export default function About() {
    return (
        <>
            <div className="min-h-139 bg-[#F2EDE4] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-8 lg:py-10 selection:bg-[#331F14] selection:text-[#F2EDE4] overflow-hidden">

                <div className="w-full max-w-[1180px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

                    <div className="lg:col-span-6 flex flex-col gap-4 animate-[slideInLeft_0.8s_ease-out_forwards]">
                        <div>
                            <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.28em] text-[#70B5D7] font-sans mb-2 uppercase">
                                WHO I AM
                            </h3>
                            <h1 className="text-4xl sm:text-5xl md:text-[3.2rem] lg:text-[3.6rem] font-serif text-[#331F14] tracking-tight leading-none">
                                About Me
                            </h1>
                        </div>

                        <div className="text-[#6F5848] font-sans text-sm md:text-[15px] lg:text-base leading-[1.6] flex flex-col gap-2 max-w-xl">
                            <p>
                                I'm <span className="font-semibold text-[#331F14]">Lokesh R</span>, a dedicated MERN Stack Developer
                                currently pursuing my B.Tech in Artificial Intelligence and Data Science at T.J.S Engineering College,
                                Chennai (CGPA: 8.41).
                            </p>
                            <p>
                                With hands-on internship experience at Inetz Technologies, I've built and maintained full-stack web
                                applications using MongoDB, Express.js, React.js, and Node.js. I'm proficient in designing RESTful APIs,
                                managing database schemas with Mongoose, and crafting responsive React.js frontends.
                            </p>
                            <p>
                                I've also ventured into Web3 — designing and deploying Solidity smart contracts on Ethereum for
                                tamper-proof credential verification, integrated with Ethers.js for MetaMask connectivity.
                            </p>
                            <p>
                                I thrive in Agile environments, enjoy collaborating on end-to-end feature delivery, and am always
                                focused on writing clean, scalable, and maintainable code.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 max-w-md mt-1">
                            <div className="bg-[#E9F7FC] border border-[#BBDDEC] rounded-xl p-3 text-center shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-300">
                                <span className="block text-2xl md:text-[1.7rem] font-serif text-[#331F14] mb-0">3+</span>
                                <span className="text-[9px] tracking-widest font-bold text-[#7B5B49] uppercase font-sans">Projects Built</span>
                            </div>

                            <div className="bg-[#E9F7FC] border border-[#BBDDEC] rounded-xl p-3 text-center shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-300">
                                <span className="block text-2xl md:text-[1.7rem] font-serif text-[#331F14] mb-0">8.41</span>
                                <span className="text-[9px] tracking-widest font-bold text-[#7B5B49] uppercase font-sans">CGPA</span>
                            </div>

                            <div className="bg-[#E9F7FC] border border-[#BBDDEC] rounded-xl p-3 text-center shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-300">
                                <span className="block text-2xl md:text-[1.7rem] font-serif text-[#331F14] mb-0">2</span>
                                <span className="text-[9px] tracking-widest font-bold text-[#7B5B49] uppercase font-sans">Internships</span>
                            </div>

                            <div className="bg-[#E9F7FC] border border-[#BBDDEC] rounded-xl p-3 text-center shadow-sm hover:scale-[1.03] hover:shadow-md transition-all duration-300">
                                <span className="block text-2xl md:text-[1.7rem] font-serif text-[#331F14] mb-0">10+</span>
                                <span className="text-[9px] tracking-widest font-bold text-[#7B5B49] uppercase font-sans">Tech Skills</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col gap-4 w-full max-w-xl lg:mt-3 animate-[slideInRight_0.8s_ease-out_forwards]">

                        <div className="bg-white border border-[#EBE3D9] rounded-xl p-4 flex gap-3 items-start shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-l-[#74B9D9]">
                            <div className="bg-[#FFF5EA] p-2 rounded-lg text-[#F59E0B] shrink-0">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm md:text-base font-bold text-[#331F14] font-sans mb-1">
                                    Full-Stack MERN Development
                                </h4>
                                <p className="text-xs md:text-sm text-[#6F5848] font-sans leading-relaxed">
                                    End-to-end application development from backend REST APIs with Node.js/Express.js to responsive React.js frontends with Tailwind CSS.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#EBE3D9] rounded-xl p-4 flex gap-3 items-start shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-l-[#74B9D9]">
                            <div className="bg-[#F3E8FF] p-2 rounded-lg text-[#8B5CF6] shrink-0">
                                <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm md:text-base font-bold text-[#331F14] font-sans mb-1">
                                    Web3 & Blockchain
                                </h4>
                                <p className="text-xs md:text-sm text-[#6F5848] font-sans leading-relaxed">
                                    Experience with Solidity smart contracts on Ethereum and Ethers.js integration for decentralized application development.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#EBE3D9] rounded-xl p-4 flex gap-3 items-start shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-l-[#74B9D9]">
                            <div className="bg-[#E0F2FE] p-2 rounded-lg text-[#0284C7] shrink-0">
                                <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm md:text-base font-bold text-[#331F14] font-sans mb-1">
                                    Database Design
                                </h4>
                                <p className="text-xs md:text-sm text-[#6F5848] font-sans leading-relaxed">
                                    Designing and managing efficient MongoDB schemas with Mongoose for scalable, multi-module application data handling.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#EBE3D9] rounded-xl p-4 flex gap-3 items-start shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-l-[#74B9D9]">
                            <div className="bg-[#ECFDF5] p-2 rounded-lg text-[#10B981] shrink-0">
                                <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" rx="4" ry="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm md:text-base font-bold text-[#331F14] font-sans mb-1">
                                    Agile Collaboration
                                </h4>
                                <p className="text-xs md:text-sm text-[#6F5848] font-sans leading-relaxed">
                                    Active participation in code reviews, sprint planning, and collaborative feature delivery in Agile team environments.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <style>{`
                    @keyframes slideInLeft {
                        0% { transform: translateX(-35px); opacity: 0; }
                        100% { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideInRight {
                        0% { transform: translateX(35px); opacity: 0; }
                        100% { transform: translateX(0); opacity: 1; }
                    }
                `}</style>
            </div>
        </>
    )
}