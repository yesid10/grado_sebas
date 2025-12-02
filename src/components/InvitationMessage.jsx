import React, { useEffect, useRef, useState } from 'react';

const InvitationMessage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative flex justify-center items-center py-20 md:py-32 px-4">

            <div className="flex justify-center flex-col max-w-4xl mx-auto h-auto">
                {/* Decorative Frame */}
                <div className={`glass-card relative rounded-3xl p-8 md:p-16 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    {/* Top Decoration */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-7 items-center justify-around text-center" style={{ marginTop: '1.5rem' }}>
                        {/* Graduate Name */}
                        <div className={`flex flex-col gap-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-sm tracking-widest uppercase text-[#d4af37] mb-3">Con gran orgullo</p>
                            <h2 className="text-4xl md:text-6xl text-gradient-gold mb-2 h-20 text-center flex items-center justify-center" style={{ fontFamily: "'Great Vibes', cursive" }}>
                                Sebastian Ricardo Vanegas Cely
                            </h2>
                            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-4"></div>
                        </div>

                        {/* Message */}
                        <div className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Tiene el honor de invitarte a celebrar la culminación de una etapa importante
                                y el comienzo de nuevos sueños en la
                            </p>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Ceremonia de Graduación
                            </h3>
                            <p className="text-2xl md:text-3xl text-gradient-gold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Grado 11 - Bachillerato
                            </p>
                        </div>

                        {/* Quote */}
                        <div className={` border-l-4 border-[#d4af37] pl-6 py-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-base md:text-lg italic text-gray-300 text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
                                "El futuro pertenece a aquellos que creen en la belleza de sus sueños"
                            </p>
                            <p className="text-sm text-[#d4af37] text-left mt-2">— Eleanor Roosevelt</p>
                        </div>

                        {/* Closing Message */}
                        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                Tu presencia hará este momento aún más especial.<br />
                                ¡Esperamos contar contigo en esta celebración inolvidable!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Decorative Elements */}
                <div className={`mt-12 flex justify-center gap-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center">
                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-400">Educación</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center">
                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-400">Logros</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center">
                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-400">Futuro</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvitationMessage;
