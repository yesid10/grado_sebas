import React, { useEffect, useState } from 'react';
import confettiImage from '../assets/confetti.png';

const Decorations = () => {
    const [confettiPieces, setConfettiPieces] = useState([]);

    useEffect(() => {
        // Generate random confetti pieces
        const pieces = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 10 + Math.random() * 10,
            size: 4 + Math.random() * 8,
        }));
        setConfettiPieces(pieces);
    }, []);

    return (
        <>
            {/* Floating Confetti */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                {confettiPieces.map((piece) => (
                    <div
                        key={piece.id}
                        className="absolute rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4af37] opacity-40"
                        style={{
                            left: `${piece.left}%`,
                            width: `${piece.size}px`,
                            height: `${piece.size}px`,
                            animation: `confetti-fall ${piece.duration}s linear infinite`,
                            animationDelay: `${piece.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Decorative Ribbons - Top Corners */}
            <div className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-0 opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                        d="M0,0 Q50,50 0,100"
                        fill="none"
                        stroke="url(#goldGradient)"
                        strokeWidth="3"
                        className="animate-float"
                    />
                    <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f4d03f" />
                            <stop offset="100%" stopColor="#d4af37" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="fixed top-0 right-0 w-64 h-64 pointer-events-none z-0 opacity-20 transform scale-x-[-1]">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                        d="M0,0 Q50,50 0,100"
                        fill="none"
                        stroke="url(#goldGradient2)"
                        strokeWidth="3"
                        className="animate-float"
                        style={{ animationDelay: '1s' }}
                    />
                    <defs>
                        <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f4d03f" />
                            <stop offset="100%" stopColor="#d4af37" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Geometric Patterns - Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#d4af37] rotate-45 animate-rotate"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-[#f4d03f] rotate-12 animate-rotate" style={{ animationDirection: 'reverse' }}></div>
            </div>

            {/* Sparkle Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#f4d03f] rounded-full animate-pulse-gold"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    >
                        <div className="absolute inset-0 bg-[#f4d03f] rounded-full blur-sm"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Decorations;
