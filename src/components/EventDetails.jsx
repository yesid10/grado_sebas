import React, { useEffect, useRef, useState } from 'react';

const EventDetails = () => {
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
        <section ref={sectionRef} className="flex justify-center px-4">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#d4af37] to-transparent blur-3xl opacity-20"></div>
                <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-[#f4d03f] to-transparent blur-3xl opacity-15"></div>
            </div>

            <div className="flex flex-col gap-2 z-10 max-w-6xl mx-auto">
                {/* Section Title */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Detalles del Evento
                    </h2>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Date & Time Card */}
                    <div className={`glass-card rounded-2xl p-8 md:p-10 transition-all duration-1000 delay-200 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="flex w-full justify-around items-center">
                            <div className="flex justify-center items-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center">
                                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex w-2/3 justify-end flex-col">
                                <h3 className="text-xl md:text-2xl font-semibold text-[#f4d03f] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Fecha y Hora
                                </h3>
                                <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    [Día, Mes Año]
                                </p>
                                <p className="text-lg text-gray-300">
                                    [Hora] - [Hora de finalización]
                                </p>
                                <p className="text-sm text-gray-400 mt-2">
                                    Puntualidad es importante
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className={`glass-card rounded-2xl p-8 md:p-10 transition-all duration-1000 delay-400 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="flex w-full justify-around items-center">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center">
                                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex w-2/3 justify-end flex-col">
                                <h3 className="text-xl md:text-2xl font-semibold text-[#f4d03f] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Ubicación
                                </h3>
                                <p className="text-xl md:text-2xl font-bold text-white mb-2">
                                    [Nombre del Lugar]
                                </p>
                                <p className="text-base text-gray-300 mb-3">
                                    [Dirección completa]<br />
                                    [Ciudad, Departamento]
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm text-[#d4af37] hover:text-[#f4d03f] transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    Ver en Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Dress Code Card */}
                    <div className={`glass-card rounded-2xl p-8 md:p-10 transition-all duration-1000 delay-600 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="flex w-full justify-around items-center">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center">
                                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex w-2/3 justify-end flex-col">
                                <h3 className="text-xl md:text-2xl font-semibold text-[#f4d03f] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Código de Vestimenta
                                </h3>
                                <p className="text-xl md:text-2xl font-bold text-white mb-2">
                                    Formal / Elegante
                                </p>
                                <p className="text-base text-gray-300">
                                    Vestimenta formal para una ocasión especial
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info Card */}
                    <div className={`glass-card rounded-2xl p-8 md:p-10 transition-all duration-1000 delay-800 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="flex w-full justify-around items-center">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center">
                                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex w-2/3 justify-end flex-col">
                                <h3 className="text-xl md:text-2xl font-semibold text-[#f4d03f] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Información Adicional
                                </h3>
                                <ul className="text-base text-gray-300 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4af37] mt-1">•</span>
                                        <span>Recepción 30 minutos antes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4af37] mt-1">•</span>
                                        <span>Habrá servicio de fotografía</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4af37] mt-1">•</span>
                                        <span>Recepción después de la ceremonia</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
