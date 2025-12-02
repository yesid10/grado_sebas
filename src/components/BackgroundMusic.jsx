import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showUnmutePrompt, setShowUnmutePrompt] = useState(false);

    useEffect(() => {
        // Intentar reproducir automáticamente cuando el componente se monte
        const attemptAutoplay = async () => {
            if (audioRef.current) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                    setShowUnmutePrompt(false);
                } catch (error) {
                    console.log('Autoplay bloqueado por el navegador:', error);
                    setIsPlaying(false);
                    // Mostrar mensaje pidiendo al usuario que active el audio
                    setShowUnmutePrompt(true);
                }
            }
        };

        // Pequeño delay para asegurar que el audio esté cargado
        const timer = setTimeout(attemptAutoplay, 100);

        return () => clearTimeout(timer);
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                        setShowUnmutePrompt(false);
                    })
                    .catch((error) => {
                        console.error('Error al reproducir:', error);
                    });
            }
        }
    };

    const handleUnmuteClick = () => {
        togglePlay();
    };

    return (
        <>
            {/* Audio Element - Coloca tu archivo de música en src/assets/ */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
            >
                {/* Reemplaza con la ruta de tu archivo de música */}
                <source src="/music/grado_music.mp3" type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
            </audio>

            {/* Control de Música - Botón flotante */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={togglePlay}
                    className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
                >
                    {/* Onda de sonido animada cuando está reproduciendo */}
                    {isPlaying && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] opacity-50 animate-ping"></div>
                    )}

                    {/* Icono */}
                    <div className="relative z-10">
                        {isPlaying ? (
                            // Icono de Pausa
                            <svg className="w-6 h-6 md:w-7 md:h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            // Icono de Play
                            <svg className="w-6 h-6 md:w-7 md:h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {isPlaying ? 'Pausar música' : 'Reproducir música'}
                    </div>
                </button>

                {/* Indicador de ondas de sonido */}
                {isPlaying && (
                    <div className="absolute -top-2 -left-2 flex items-end gap-1">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-gradient-to-t from-[#d4af37] to-[#f4d03f] rounded-full"
                                style={{
                                    height: '12px',
                                    animation: `soundWave 0.8s ease-in-out infinite`,
                                    animationDelay: `${i * 0.15}s`,
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Animación de ondas de sonido */}
            <style jsx>{`
                @keyframes soundWave {
                    0%, 100% {
                        height: 8px;
                    }
                    50% {
                        height: 16px;
                    }
                }
            `}</style>
        </>
    );
};

export default BackgroundMusic;
