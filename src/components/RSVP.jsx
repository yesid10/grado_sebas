import React, { useEffect, useRef, useState } from 'react';

const RSVP = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [copied, setCopied] = useState(false);
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

    const handleWhatsAppClick = () => {
        // Replace with actual WhatsApp number
        const phoneNumber = '573001234567'; // Format: country code + number (no + or spaces)
        const message = encodeURIComponent('¡Hola! Confirmo mi asistencia a la ceremonia de graduación.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <section ref={sectionRef} className="flex justify-center items-center py-20 md:py-32 px-4">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-[#d4af37] to-transparent blur-3xl opacity-10"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                {/* Section Title */}
                <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Confirma tu Asistencia
                    </h2>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Nos encantaría contar con tu presencia en este día tan especial.<br />
                        Por favor, confirma tu asistencia lo antes posible.
                    </p>
                </div>

                {/* RSVP Card */}
                <div style={{ marginTop: '1.5rem' }} className={`glass-card rounded-3xl p-8 md:p-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    {/* WhatsApp Button */}
                    <div className="mb-8" style={{ marginTop: '.8rem' }}>
                        <button
                            onClick={handleWhatsAppClick}
                            className="btn-gold inline-flex items-center gap-3 group"
                        >
                            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>Confirmar por WhatsApp</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4af37] opacity-30"></div>
                        <span className="text-sm text-gray-400">o</span>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4af37] opacity-30"></div>
                    </div>

                    {/* Alternative Contact */}
                    <div className="text-gray-300">
                        <p className="mb-4">También puedes confirmar por:</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="tel:+573001234567" className="flex items-center gap-2 text-[#d4af37] hover:text-[#f4d03f] transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+57 300 123 4567</span>
                            </a>
                            <span className="hidden sm:block text-gray-600">•</span>
                            <a href="mailto:ejemplo@email.com" className="flex items-center gap-2 text-[#d4af37] hover:text-[#f4d03f] transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>ejemplo@email.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Deadline Note */}
                    <div className="mt-8 p-4 rounded-xl bg-black/30 border border-[#d4af37]/20">
                        <p className="text-sm text-gray-400">
                            <span className="text-[#d4af37] font-semibold">Nota:</span> Por favor confirma tu asistencia antes del [Fecha límite]
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RSVP;
