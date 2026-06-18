import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

export default function Home() {
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
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projectsData = [
        {
            title: "Decentralized Credential Verification System",
            linkText: "digital-learning-platform-bay.vercel.app",
            linkUrl: "https://digital-learning-platform-bay.vercel.app",
            tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Solidity", "Ethereum", "Ethers.js", "Tailwind CSS"],
            description: "Full-stack MERN application for decentralized academic credential verification. Built and deployed Solidity smart contracts on Ethereum for tamper-proof on-chain credential issuance; integrated Ethers.js for MetaMask wallet connection from the React frontend.",
            previewImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=80" // Replace with your actual project screenshot path
        },
        {
            title: "Shopy — E-Commerce Web Application",
            linkText: "shopyapp-ten.vercel.app",
            linkUrl: "https://shopyapp-ten.vercel.app",
            tags: ["React.js", "Tailwind CSS", "Context API", "React Router"],
            description: "Responsive e-commerce platform with dynamic cart functionality via useState/useContext, product browsing, and client-side routing. Deployed on Vercel with a clean, user-friendly shopping experience.",
            previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" // Replace with your actual project screenshot path
        },
        {
            title: "Admin Dashboard — Institutional Management",
            linkText: "admindashboard-seven-roan.vercel.app",
            linkUrl: "https://admindashboard-seven-roan.vercel.app",
            tags: ["React.js", "Tailwind CSS", "Context API"],
            description: "Role-based admin dashboard with reusable React components and Context API state management for managing students, attendance, and course data across an institution.",
            previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" // Replace with your actual project screenshot path
        }
    ];
    const handleMouseMove = (e) => {
        // Tracks coordinates relative to the viewport to place the floating preview accurately
        setMousePos({ x: e.clientX, y: e.clientY });
    };
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
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage({ type: '', text: '' });

        // Replace these 3 strings with your actual EmailJS dashboard credentials
        const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
        const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatusMessage({ type: 'success', text: 'Message sent successfully! I will get back to you soon.' });
                formRef.current.reset();
            })
            .catch((error) => {
                console.error(error);
                setStatusMessage({ type: 'error', text: 'Something went wrong. Please try emailing directly.' });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        const revealElements = document.querySelectorAll('.scroll-reveal');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);

                        setTimeout(() => {
                            entry.target.classList.remove(
                                'scroll-reveal',
                                'reveal-left',
                                'reveal-right',
                                'reveal-up',
                                'reveal-zoom',
                                'is-visible'
                            );
                        }, 850);
                    }
                });
            },
            {
                threshold: 0.16,
                rootMargin: '0px 0px -60px 0px',
            }
        );

        revealElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);


    return (
        <>

            <style>{`
                .scroll-reveal {
                    opacity: 0;
                    transform: translateY(26px);
                    transition-property: opacity, transform;
                    transition-duration: 700ms;
                    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
                    will-change: opacity, transform;
                }

                .scroll-reveal.reveal-left {
                    transform: translateX(-36px);
                }

                .scroll-reveal.reveal-right {
                    transform: translateX(36px);
                }

                .scroll-reveal.reveal-up {
                    transform: translateY(28px);
                }

                .scroll-reveal.reveal-zoom {
                    transform: scale(0.88);
                }

                .scroll-reveal.is-visible {
                    opacity: 1;
                    transform: translateX(0) translateY(0) scale(1);
                }

                @media (prefers-reduced-motion: reduce) {
                    .scroll-reveal {
                        opacity: 1;
                        transform: none;
                        transition: none;
                    }
                }
            `}</style>
            <div className="">
                <div className="relative min-h-screen bg-[#F3EDE3] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 lg:py-10 overflow-hidden selection:bg-[#3A2419] selection:text-[#F3EDE3]">

                    <div className="relative w-full max-w-[1180px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center z-10">

                        <div className="lg:col-span-7 flex flex-col items-start gap-4 scroll-reveal reveal-left">

                            <div className="border border-[#8DC7E5] h-8 px-5 rounded-full bg-[#E9F7FC] flex items-center gap-2 hover:bg-[#DDF2FA] transition-all duration-300 shadow-sm">
                                <span className="w-1.5 h-1.5 bg-[#7ABDDD] rounded-full animate-pulse"></span>
                                <p className="text-[#70B5D7] text-[10px] sm:text-xs font-bold tracking-[0.32em] font-sans uppercase">
                                    OPEN TO MERN STACK ROLES
                                </p>
                            </div>

                            <h1 className="text-[3.4rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[5.6rem] xl:text-[6.2rem] font-serif text-[#3A2419] tracking-[-0.055em] leading-[0.9]">
                                Lokesh <span className="text-[#927250] inline-block hover:translate-x-1 transition-transform duration-300">R.</span>
                            </h1>

                            <div className="text-[#7B5B49] text-sm sm:text-base md:text-lg lg:text-[1.1rem] font-sans font-medium flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                                <span>MERN Stack Developer</span>
                                <span className="text-[#B99A70] text-[10px] font-bold">◆</span>
                                <span>Full-Stack Engineer</span>
                                <span className="text-[#B99A70] text-[10px] font-bold">◆</span>
                                <span>Chennai, TN</span>
                            </div>

                            <p className="text-[#7B5B49] text-sm sm:text-base md:text-lg lg:text-[1.05rem] font-sans max-w-xl leading-[1.65] mt-2">
                                Building scalable full-stack web applications with MongoDB, Express.js, React.js, and Node.js.
                                From RESTful APIs to responsive frontends — with a focus on clean, maintainable, and impactful code.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-4">
                                <Link
                                    to="/work"
                                    className="bg-[#3A2419] text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold font-sans shadow-sm hover:bg-[#4B3022] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group"
                                >
                                    <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    View My Work
                                </Link>

                                <Link
                                    to="/contact"
                                    className="border border-[#C2A67E] bg-transparent text-[#3A2419] flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold font-sans hover:bg-[#EFE5D8] hover:border-[#3A2419] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
                                >
                                    <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Get in Touch
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-5">
                                <a href="mailto:rlokeshtech@gmail.com" className="bg-[#FBF8F3] border border-[#E3D4C3] text-[#7B5B49] px-4 py-2 rounded-lg text-sm font-medium font-sans flex items-center gap-2 hover:bg-[#E9F7FC] hover:border-[#8DC7E5] hover:text-[#3A2419] hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email
                                </a>

                                <a href="https://www.linkedin.com/in/lokeshr19/" target="_blank" rel="noreferrer" className="bg-[#FBF8F3] border border-[#E3D4C3] text-[#7B5B49] px-4 py-2 rounded-lg text-sm font-medium font-sans flex items-center gap-2 hover:bg-[#E9F7FC] hover:border-[#8DC7E5] hover:text-[#3A2419] hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
                                    <svg className="w-4 h-4 fill-current text-[#7B5B49]" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    LinkedIn
                                </a>

                                <a href="https://github.com/rlokeshtech" target="_blank" rel="noreferrer" className="bg-[#FBF8F3] border border-[#E3D4C3] text-[#7B5B49] px-4 py-2 rounded-lg text-sm font-medium font-sans flex items-center gap-2 hover:bg-[#E9F7FC] hover:border-[#8DC7E5] hover:text-[#3A2419] hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
                                    <svg className="w-4 h-4 fill-current text-[#7B5B49]" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col items-center justify-center relative scroll-reveal reveal-right">

                            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[330px] aspect-[0.9/1] flex items-center justify-center">

                                <div className="w-full h-full bg-[#EDE2D2] border-[7px] border-[#BBDDEC] rounded-[1.7rem] flex flex-col items-center justify-center gap-3 relative overflow-hidden group shadow-[12px_12px_0_rgba(194,166,126,0.2)]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000"></div>

                                    <div className="text-[#B8A896] group-hover:scale-110 transition-transform duration-300">
                                        <img className='h-100 ' src="../src/assets/Lokesh.jpg" alt="" />
                                    </div>
                                </div>

                                <div className="absolute bottom-[-10px] right-[-4px] sm:right-[-18px] bg-white border border-[#E8DDD0] rounded-xl px-4 py-2.5 shadow-md flex items-center gap-2 scroll-reveal reveal-zoom hover:scale-105 transition-transform duration-300">
                                    <span className="w-2.5 h-2.5 bg-[#52B866] rounded-full"></span>
                                    <span className="text-[#3A2419] text-xs sm:text-sm font-bold font-sans whitespace-nowrap">Available for Hire</span>
                                </div>
                            </div>

                            <div className="w-59 max-w-[20px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[330px] mt-6 bg-white border border-[#E8DDD0] rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 scroll-reveal reveal-zoom group">
                                <div className="flex items-center">
                                    <a
                                        href="/Lokesh_R_Resume.pdf"
                                        download="Lokesh_R_Resume.pdf"
                                        className="block"
                                    >
                                        <div className="flex gap-2">
                                            <div className="flex bg-[#E9F7FC] border border-[#9FD0E8] p-2.5 rounded-lg text-[#74B9D9] group-hover:bg-[#74B9D9] group-hover:text-white transition-colors duration-300">
                                                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                                <span className="mt-1 text-[10px] text-[#8B6D58] font-semibold tracking-[0.25em] block mb-0.5 uppercase">
                                                    DOWNLOAD
                                                </span>
                                            </div>

                                            <div >

                                                <span className=" text-base font-bold text-[#3A2419] font-sans">
                                                    <button className="mt-2 about_button">Resume</button>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="text-[#C2A67E] group-hover:text-[#3A2419] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                    <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="absolute top-0 right-[-12%] h-full w-[64%] lg:w-[48%] bg-[#E9F7FC] transform -skew-x-6 origin-top-right pointer-events-none z-0"></div>

                    <style>{`
                    @keyframes slideInLeft {
                        0% { transform: translateX(-35px); opacity: 0; }
                        100% { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideInRight {
                        0% { transform: translateX(35px); opacity: 0; }
                        100% { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes bounceIn {
                        0% { transform: scale(0.5); opacity: 0; }
                        50% { transform: scale(1.04); opacity: 0.9; }
                        70% { transform: scale(0.96); opacity: 1; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                `}</style>

                </div>


                {/* about */}
                <div className="">
                    <div className="min-h-139 bg-[#F2EDE4] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-8 lg:py-10 selection:bg-[#331F14] selection:text-[#F2EDE4] overflow-hidden">

                        <div className="w-full max-w-[1180px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

                            <div className="lg:col-span-6 flex flex-col gap-4 scroll-reveal reveal-left">
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

                            <div className="lg:col-span-6 flex flex-col gap-4 w-full max-w-xl lg:mt-3 scroll-reveal reveal-right">

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
                </div>
                {/* skills  */}
                <div className="">
                    <div className="min-h-139 bg-[#EBF4F8]/60 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-8 lg:py-10 selection:bg-[#331F14] selection:text-[#F2EDE4] overflow-hidden">

                        <div className="w-full max-w-[1180px] flex flex-col gap-7">

                            <div className="scroll-reveal reveal-up">
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
                                        className="scroll-reveal reveal-up bg-white border border-[#D9E8F0] rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                        style={{
                                            transitionDelay: `${groupIndex * 120}ms`
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
                </div>

                {/* experience  */}
                <div className="">
                    <div className="min-h-[calc(100vh-82px)] bg-[#F2EDE4] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-6 selection:bg-[#331F14] selection:text-[#F2EDE4] overflow-hidden">

                        <div className="w-full max-w-[1200px] flex flex-col gap-6">

                            <div className="scroll-reveal reveal-up">
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
                                        className="scroll-reveal reveal-up relative pl-5 md:pl-6 border-l border-l-[#D3C1AF] flex flex-col gap-2.5 group"
                                        style={{
                                            transitionDelay: `${index * 140}ms`
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
                                                className={`self-start px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide font-sans border leading-none ${exp.isCurrent
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
                </div>
                {/* projects  */}
                <div className="">
                    <div className="min-h-139 bg-[#EBF4F8]/60 text-[#331F14] font-sans selection:bg-[#331F14] selection:text-[#F2EDE4] flex items-center justify-center p-4 md:p-8 relative">
                        <div className="w-full max-w-7xl flex flex-col gap-5">

                            {/* Section Header */}
                            <div className="scroll-reveal reveal-up">
                                <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#5FA2FD] mb-0.5 uppercase">THINGS I'VE BUILT</h3>
                                <h1 className="text-3xl md:text-4xl font-serif text-[#331F14] tracking-tight">Projects</h1>
                            </div>

                            {/* Grid Container */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch w-full mt-1 relative">
                                {projectsData.map((project, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onMouseMove={handleMouseMove}
                                        className="scroll-reveal reveal-up bg-[#FAF6F0]/40 border border-[#D9E8F0] rounded-2xl p-5 md:p-6 flex flex-col gap-3.5 shadow-sm hover:shadow-md transition-all duration-200 border-t-[3px] border-t-[#5FA2FD] cursor-pointer relative overflow-hidden group"
                                        style={{
                                            transitionDelay: `${index * 120}ms`
                                        }}
                                    >
                                        {/* Project Title & Link Block */}
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-base md:text-lg font-serif font-bold text-[#331F14] leading-snug tracking-tight">
                                                {project.title}
                                            </h2>
                                            <a
                                                href={project.linkUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-[#5FA2FD] font-medium inline-flex items-center gap-1 hover:underline self-start relative z-10"
                                            >
                                                <svg className="w-2.5 h-2.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                                {project.linkText}
                                            </a>
                                        </div>

                                        {/* Flex Tag Box */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag, tIndex) => (
                                                <span
                                                    key={tIndex}
                                                    className="bg-transparent border border-[#BCE0FD] text-[#3A5B85] px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Description */}
                                        <p className="text-xs md:text-sm text-[#565E64] leading-relaxed mt-1">
                                            {project.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Preview Image Layer */}
                        {hoveredIndex !== null && (
                            <div
                                className="fixed pointer-events-none z-50 rounded-lg overflow-hidden shadow-xl border-2 border-[#5FA2FD] bg-white transition-transform duration-100 ease-out animate-[popIn_0.15s_ease-out_forwards]"
                                style={{
                                    top: `${mousePos.y + 20}px`, // Offsets the image 20px below the cursor
                                    left: `${mousePos.x + 15}px`, // Offsets the image 15px to the right of the cursor
                                    width: '260px',
                                    aspectRatio: '16/10'
                                }}
                            >
                                <img
                                    src={projectsData[hoveredIndex].previewImage}
                                    alt="Project Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Styles */}
                        <style>{`
        @keyframes fadeInDown {
          0% { transform: translateY(-10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUpCard {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes popIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
                    </div>
                </div>
                {/* education  */}
                <div className="">
                    <div className="min-h-139 bg-[#F2EDE4] text-[#331F14] font-sans selection:bg-[#331F14] selection:text-[#F2EDE4] flex items-center justify-center p-4 md:p-8">
                        <div className="w-full max-w-5xl flex flex-col gap-5">

                            {/* Section Header */}
                            <div className="scroll-reveal reveal-up">
                                <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#5FA2FD] mb-0.5 uppercase">ACADEMIC BACKGROUND</h3>
                                <h1 className="text-3xl md:text-4xl font-serif text-[#331F14] tracking-tight">Education</h1>
                            </div>

                            {/* List of Education Cards */}
                            <div className="flex flex-col gap-4 mt-1 w-full">
                                {educationData.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="scroll-reveal reveal-up bg-white border border-[#D9E8F0] rounded-xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm relative border-l-[3px] border-l-[#A68F7A] hover:border-l-[#331F14] transition-all duration-200 group"
                                        style={{
                                            transitionDelay: `${index * 120}ms`
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
                </div>
                {/* contact  */}
                <div className="">
                    <div className="h-dvh bg-[#EBF4F8]/60 text-[#331F14] font-sans selection:bg-[#331F14] selection:text-[#F2EDE4] flex items-center justify-center  md:p-8">
                        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                            {/* Left Side: Contact Info & Socials */}
                            <div className="md:col-span-5 flex flex-col gap-5 scroll-reveal reveal-left">
                                <div>
                                    <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#5FA2FD] mb-0.5 uppercase">GET IN TOUCH</h3>
                                    <h1 className="text-3xl md:text-4xl font-serif text-[#331F14] tracking-tight">Let's Connect</h1>
                                </div>

                                <p className="text-xs md:text-sm text-[#565E64] leading-relaxed max-w-sm">
                                    I'm currently looking for full-time opportunities. Drop a message, and let's build something great together.
                                </p>

                                {/* Contact Details Stack */}
                                <div className="flex flex-col gap-3 mt-1">
                                    {/* Email Link */}
                                    <a href="mailto:rlokeshtech@gmail.com" className="bg-white border border-[#D9E8F0] rounded-xl p-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-l-[3px] border-l-[#A68F7A]">
                                        <div className="bg-[#EBF4F8] text-[#5FA2FD] p-2 rounded-lg">
                                            <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-[9px] text-[#A68F7A] font-bold tracking-widest block">EMAIL ME</span>
                                            <span className="text-xs md:text-sm font-bold text-[#331F14]">rlokeshtech@gmail.com</span>
                                        </div>
                                    </a>

                                    {/* LinkedIn Link */}
                                    <a href="https://www.linkedin.com/in/lokeshr19/" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#D9E8F0] rounded-xl p-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-l-[3px] border-l-[#5FA2FD]">
                                        <div className="bg-[#EBF5FF] text-[#4086F4] p-2 rounded-lg">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-[9px] text-[#A68F7A] font-bold tracking-widest block">LINKEDIN</span>
                                            <span className="text-xs md:text-sm font-bold text-[#331F14]">lokeshr19</span>
                                        </div>
                                    </a>

                                    {/* GitHub Link */}
                                    <a href="https://github.com/rlokeshtech" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#D9E8F0] rounded-xl p-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-l-[3px] border-l-[#331F14]">
                                        <div className="bg-[#F6F6F6] text-[#331F14] p-2 rounded-lg">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-[9px] text-[#A68F7A] font-bold tracking-widest block">GITHUB</span>
                                            <span className="text-xs md:text-sm font-bold text-[#331F14]">rlokeshtech</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Right Side: Message Form */}
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="md:col-span-7 bg-[#FAF6F0]/40 border border-[#D9E8F0] rounded-2xl p-5 md:p-6 flex flex-col gap-4 shadow-sm border-t-[3px] border-t-[#5FA2FD] w-full scroll-reveal reveal-right"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-bold text-[#A68F7A] tracking-wider uppercase">Your Name</label>
                                        <input type="text" name="from_name" required className="w-full bg-white border border-[#D9E8F0] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#331F14] outline-none focus:border-[#5FA2FD] transition-all duration-200" placeholder="John Doe" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-bold text-[#A68F7A] tracking-wider uppercase">Your Email</label>
                                        <input type="email" name="reply_to" required className="w-full bg-white border border-[#D9E8F0] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#331F14] outline-none focus:border-[#5FA2FD] transition-all duration-200" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] font-bold text-[#A68F7A] tracking-wider uppercase">Message</label>
                                    <textarea name="message" required rows="4" className="w-full bg-white border border-[#D9E8F0] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#331F14] outline-none focus:border-[#5FA2FD] transition-all duration-200 resize-none" placeholder="Write your message here..."></textarea>
                                </div>

                                {/* Status Notifications */}
                                {statusMessage.text && (
                                    <div className={`text-xs px-3 py-2 rounded-xl border ${statusMessage.type === 'success' ? 'bg-[#ECFDF5] border-[#10B981] text-[#065F46]' : 'bg-[#FEF2F2] border-[#EF4444] text-[#991B1B]'
                                        }`}>
                                        {statusMessage.text}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-[#331F14] text-[#F2EDE4] font-semibold text-xs md:text-sm py-2.5 rounded-xl transition-all duration-200 hover:bg-[#4a3122] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1 shadow-sm"
                                >
                                    {loading ? (
                                        <span className="w-4 h-4 border-2 border-[#F2EDE4] border-t-transparent rounded-full animate-spin"></span>
                                    ) : (
                                        <>
                                            <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>

                        </div>

                        <style>{`
        @keyframes slideInLeft { 0% { transform: translateX(-20px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slideInRight { 0% { transform: translateX(20px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
      `}</style>
                    </div>
                </div>
            <Footer/>
            </div>
        </>
    )
}