import React, { useEffect, useRef, useState } from 'react';
import gallery1 from '../assets/sebas1.jpeg';
import gallery2 from '../assets/sebas2.jpg';
import gallery3 from '../assets/sebas3.jpg';
import gallery4 from '../assets/sebas4.jpeg';
import gallery5 from '../assets/sebas5.jpg';
import gallery6 from '../assets/sebas6.jpeg';

const PhotoGallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sectionRef = useRef(null);

    // Array de fotos - puedes agregar más imágenes aquí
    const photos = [
        { id: 5, src: gallery5, alt: 'Foto de graduación 5', caption: 'Nuevos comienzos' },
        { id: 3, src: gallery3, alt: 'Foto de graduación 3', caption: 'Nuevos comienzos' },
        { id: 4, src: gallery4, alt: 'Foto de graduación 4', caption: 'Nuevos comienzos' },
        { id: 2, src: gallery2, alt: 'Foto de graduación 2', caption: 'Logros alcanzados' },
        { id: 6, src: gallery6, alt: 'Foto de graduación 6', caption: 'Nuevos comienzos' },
        { id: 1, src: gallery1, alt: 'Foto de graduación 1', caption: 'Momentos inolvidables' },
    ];

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

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval);
    }, [isAutoPlaying, photos.length]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section ref={sectionRef} className="flex justify-center items-center py-20 md:py-32 px-4">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-[#d4af37] to-transparent blur-3xl opacity-10"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center mx-auto max-w-4xl w-full px-4">
                {/* Section Title */}
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Galería de Recuerdos
                    </h2>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Momentos especiales que marcaron este camino
                    </p>
                </div>

                {/* Carousel Container */}
                <div className={`relative w-[80%] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    {/* Main Image Display */}
                    <div className="relative overflow-hidden rounded-3xl glass-card p-4 md:p-6">
                        {/* Image Container with vertical aspect ratio for portrait photos */}
                        <div className="relative  min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden rounded-2xl bg-black/30">
                            {photos.map((photo, index) => (
                                <div
                                    key={photo.id}
                                    className={`absolute w-full h-full inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${index === currentIndex
                                        ? 'opacity-100 translate-x-0'
                                        : index < currentIndex
                                            ? 'opacity-0 -translate-x-full'
                                            : 'opacity-0 translate-x-full'
                                        }`}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="max-h-[400px] md:max-h-[500px] w-auto object-contain"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-10"
                            aria-label="Foto anterior"
                        >
                            <svg className="w-6 h-6 md:w-7 md:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-10"
                            aria-label="Foto siguiente"
                        >
                            <svg className="w-6 h-6 md:w-7 md:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Photo Counter */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-[#d4af37]/30">
                            <p className="text-sm text-white font-semibold">
                                {currentIndex + 1} / {photos.length}
                            </p>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-6">
                        {photos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'w-12 h-3 bg-gradient-to-r from-[#f4d03f] to-[#d4af37]'
                                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Ir a foto ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Auto-play Toggle */}
                    {/* <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card-light hover:scale-105 transition-transform"
                        >
                            {isAutoPlaying ? (
                                <>
                                    <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-300">Pausar</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-300">Reproducir</span>
                                </>
                            )}
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;
