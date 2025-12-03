import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiEffect = () => {
    useEffect(() => {
        // Esperar un poco para que la página cargue
        const timer = setTimeout(() => {
            // Configuración del confeti con colores dorado y negro
            const colors = ['#d4af37', '#f4d03f', '#FFD700', '#000000', '#1a1a1a'];

            // Función para lanzar confeti desde diferentes posiciones
            const launchConfetti = () => {
                // Confeti desde la izquierda
                confetti({
                    particleCount: 100,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y: 0.6 },
                    colors: colors
                });

                // Confeti desde la derecha
                confetti({
                    particleCount: 100,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y: 0.6 },
                    colors: colors
                });
            };

            // Lanzar confeti inicial
            launchConfetti();

            // Lanzar más confeti después de un momento
            setTimeout(launchConfetti, 250);
            setTimeout(launchConfetti, 500);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return null; // Este componente no renderiza nada visible
};

export default ConfettiEffect;
