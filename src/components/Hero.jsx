import React, { useEffect, useState } from 'react';
import graduationCap from '../assets/birrete.png';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated Circles */}
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-[#d4af37] opacity-20 animate-pulse-gold"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border-2 border-[#f4d03f] opacity-15 animate-pulse-gold" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full border border-[#c5a028] opacity-10 animate-float"></div>

                {/* Golden Dots Pattern */}
                <div className="absolute top-10 right-20 flex gap-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] opacity-60 animate-pulse-gold" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                </div>
                <div className="absolute bottom-32 left-16 flex gap-2">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c5a028] opacity-50 animate-pulse-gold" style={{ animationDelay: `${i * 0.3}s` }}></div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Graduation Cap Image */}
                <div className={`mb-3 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <img
                        src={graduationCap}
                        alt="Graduation Cap"
                        className="w-[30%] animate-float drop-shadow-2xl"
                    />
                </div>

                {/* Decorative Line */}
                <div className={`w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

                {/* Pre-title */}
                <p className={`text-sm md:text-base tracking-[0.3em] uppercase text-[#d4af37] mb-4 font-light transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    El Graduado del
                </p>

                {/* School Name - Script Font */}
                <h2 className={`text-3xl md:text-5xl h-20 text-center flex justify-center items-center mb-6 text-gradient-gold transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ fontFamily: "'Great Vibes', cursive" }}>
                    Colegio San Felipe
                </h2>

                {/* Main Title */}
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="block text-white mb-2">Te invita a la</span>
                    <span className="block text-gradient-gold">CEREMONIA</span>
                    <span className="block text-3xl md:text-5xl lg:text-6xl mt-2" style={{ fontFamily: "'Great Vibes', cursive" }}>de Grado</span>
                </h1>

                {/* Decorative Line */}
                <div className={`w-32 h-1 mx-auto mt-8 mb-8 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

                {/* Subtitle */}
                <p className={`text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Acompáñanos en este momento tan especial mientras celebramos<br className="hidden md:block" />
                    el logro de nuestros sueños y el inicio de nuevos caminos
                </p>

                {/* Scroll Indicator */}
                <div style={{ marginTop: '1rem' }} className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                        <p className="text-xs tracking-widest uppercase text-[#d4af37]">Desliza para más</p>
                        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
        </section>
    );
};

export default Hero;
