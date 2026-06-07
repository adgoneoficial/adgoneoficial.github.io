import { useRef, useEffect } from 'react';

const StarBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const smoothMouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const stars: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
        const numStars = 300;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initStars = () => {
            stars.length = 0;
            for (let i = 0; i < numStars; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                stars.push({
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: (Math.random() - 0.5) * 1.5,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Suavizado del mouse
            smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.1;
            smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.1;

            // Actualizar y dibujar estrellas
            stars.forEach((star) => {
                // EFECTO ATRACCIÓN AL LOGO (Agujero Negro)
                const dxCenter = centerX - star.x;
                const dyCenter = centerY - star.y;
                const distCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);

                if (distCenter > 20) {
                    // 1. Gravedad suave hacia el centro
                    const gravity = 0.05;
                    star.vx += (dxCenter / distCenter) * gravity;
                    star.vy += (dyCenter / distCenter) * gravity;

                    // 2. Fuerza Orbital suave
                    const swirl = 0.15;
                    star.vx += (dyCenter / distCenter) * swirl;
                    star.vy -= (dxCenter / distCenter) * swirl;
                }

                // 3. Fricción alta para desacelerar
                star.vx *= 0.97;
                star.vy *= 0.97;

                // 4. Repulsión central mínima (Permite acercarse al logo)
                const eventHorizon = 60;
                if (distCenter < eventHorizon) {
                    const force = (eventHorizon - distCenter) / eventHorizon;
                    star.vx -= (dxCenter / distCenter) * force * 0.3;
                    star.vy -= (dyCenter / distCenter) * force * 0.3;
                }

                // Movimiento base
                star.x += star.vx;
                star.y += star.vy;

                // Repulsión del mouse (Efecto suave y reducido)
                const dxMouse = star.x - smoothMouse.current.x;
                const dyMouse = star.y - smoothMouse.current.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < 150) {
                    const force = (150 - distMouse) / 150;
                    const angle = Math.atan2(dyMouse, dxMouse);
                    star.x += Math.cos(angle) * force * 8;
                    star.y += Math.sin(angle) * force * 8;
                }

                // Límites de pantalla (teletransporte)
                if (star.x < -200) star.x = canvas.width + 200;
                if (star.x > canvas.width + 200) star.x = -200;
                if (star.y < -200) star.y = canvas.height + 200;
                if (star.y > canvas.height + 200) star.y = -200;

                // Dibujar la estrella (punto suelto)
                ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => {
            resizeCanvas();
            initStars();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        initStars();
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
        />
    );
};

export default StarBackground;
