import { Link } from 'react-router-dom';

export default function NavBar() {
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/About", label: "About" },
        { to: "/Skills", label: "Skills" },
        { to: "/Experience", label: "Experience" },
        { to: "/Project", label: "Projects" },
        { to: "/Education", label: "Education" },
        { to: "/Contact", label: "Contact" },
    ];

    return (
        <>
            {/* Added fixed positioning, full width, top alignment, and z-index layer */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-[#F2EDE4]/90 border-b border-white/20 shadow-sm overflow-hidden">
                {/* Logo - Slides in from the left */}
                <div className="flex items-center gap-2 cursor-pointer animate-[navFadeLeft_0.5s_ease-out_forwards]">
                    <img className='h-9 w-30' src="./src/assets/lokeshlogo.png" alt="Logo" />
                </div>

                {/* Nav Links - Staggered Cascade fade in down */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ to, label }, index) => (
                        <Link
                            key={to}
                            to={to}
                            className="relative font-medium text-[#4B2C0D] group opacity-0"
                            style={{
                                animation: `navFadeDown 0.4s ease-out ${index * 0.08}s forwards`
                            }}
                        >
                            {label}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4B2C0D] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Resume Button - Slides in from the right */}
                <div className="resume animate-[navFadeRight_0.5s_ease-out_forwards]">
                    <button className="flex items-center gap-2 bg-[#4B2C0D] hover:bg-[#B26920] text-white px-5 py-2 rounded-lg font-semibold transition-all shadow-lg shadow-[#4B2C0D]/10 active:scale-95">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Resume
                    </button>
                </div>
            </nav>

            {/* Embedded Pure CSS Animation Frames */}
            <style>{`
                @keyframes navFadeLeft {
                    0% { transform: translateX(-30px); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                @keyframes navFadeRight {
                    0% { transform: translateX(30px); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                @keyframes navFadeDown {
                    0% { transform: translateY(-15px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </>
    );
}