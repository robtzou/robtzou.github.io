import React, { useRef, useEffect, useState } from 'react';

function generateSphere(radius, segments) {
    const vs = [];
    for (let i = 0; i <= segments; i++) {
        const phi = (i * Math.PI) / segments;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);
        for (let j = 0; j <= segments; j++) {
            const theta = (j * 2 * Math.PI) / segments;
            const x = radius * sinPhi * Math.cos(theta);
            const y = radius * cosPhi;
            const z = radius * sinPhi * Math.sin(theta);
            vs.push({ x, y, z });
        }
    }
    return vs;
}

function generateEdges(segments) {
    const edges = [];
    for (let i = 0; i <= segments; i++) {
        for (let j = 0; j <= segments; j++) {
            const idx = i * (segments + 1) + j;
            // horizontal ring
            if (j < segments) edges.push([idx, idx + 1]);
            // vertical meridian
            if (i < segments) edges.push([idx, idx + (segments + 1)]);
        }
    }
    return edges;
}

function rotateY(v, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: v.x * cos + v.z * sin,
        y: v.y,
        z: -v.x * sin + v.z * cos,
    };
}

function rotateX(v, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: v.x,
        y: v.y * cos - v.z * sin,
        z: v.y * sin + v.z * cos,
    };
}

function project(v, w, h, fov) {
    const scale = fov / (fov + v.z);
    return {
        x: v.x * scale + w / 2,
        y: v.y * scale + h / 2,
        scale,
        z: v.z,
    };
}

const SphereCanvas = ({ className = '' }) => {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const angleRef = useRef({ x: 0.3, y: 0 });
    const mouseRef = useRef({ x: 0, y: 0, active: false });
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Fade in
        const fadeTimer = setTimeout(() => setOpacity(1), 50);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const segments = 20;
        const baseVertices = generateSphere(0.5, segments);
        const edges = generateEdges(segments);

        let dpr = window.devicePixelRatio || 1;

        function resize() {
            dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();
        window.addEventListener('resize', resize);

        function handleMouseMove(e) {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = (e.clientX - rect.left) / rect.width - 0.5;
            mouseRef.current.y = (e.clientY - rect.top) / rect.height - 0.5;
            mouseRef.current.active = true;
        }

        function handleMouseLeave() {
            mouseRef.current.active = false;
        }

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        let time = 0;

        function draw() {
            const rect = canvas.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;
            const size = Math.min(w, h);
            const fov = size * 1.6;

            ctx.clearRect(0, 0, w, h);

            time += 0.003;

            // Auto-rotate + mouse influence
            const targetYSpeed = mouseRef.current.active
                ? mouseRef.current.x * 0.03
                : 0.004;
            const targetXAngle = mouseRef.current.active
                ? 0.3 + mouseRef.current.y * 0.5
                : 0.3 + Math.sin(time * 0.5) * 0.1;

            angleRef.current.y += targetYSpeed;
            angleRef.current.x += (targetXAngle - angleRef.current.x) * 0.05;

            // Transform vertices
            const transformed = baseVertices.map((v) => {
                const scaled = { x: v.x * size * 0.7, y: v.y * size * 0.7, z: v.z * size * 0.7 };
                let r = rotateX(scaled, angleRef.current.x);
                r = rotateY(r, angleRef.current.y);
                return project(r, w, h, fov);
            });

            // Draw edges with depth-based opacity
            ctx.lineCap = 'round';
            for (const [a, b] of edges) {
                const pa = transformed[a];
                const pb = transformed[b];
                const avgZ = (pa.z + pb.z) / 2;
                const maxZ = size * 0.7 * 0.5;
                const depthFactor = 1 - (avgZ + maxZ) / (2 * maxZ);
                const alpha = 0.04 + depthFactor * 0.18;

                ctx.beginPath();
                ctx.moveTo(pa.x, pa.y);
                ctx.lineTo(pb.x, pb.y);
                ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
                ctx.lineWidth = 0.5 + depthFactor * 0.5;
                ctx.stroke();
            }

            // Draw vertices with glow
            for (const pt of transformed) {
                const maxZ = size * 0.7 * 0.5;
                const depthFactor = 1 - (pt.z + maxZ) / (2 * maxZ);
                const radius = 0.8 + depthFactor * 1.8;
                const alpha = 0.15 + depthFactor * 0.65;

                // Glow
                const grad = ctx.createRadialGradient(
                    pt.x, pt.y, 0,
                    pt.x, pt.y, radius * 4
                );
                grad.addColorStop(0, `rgba(56, 189, 248, ${alpha * 0.5})`);
                grad.addColorStop(1, 'rgba(56, 189, 248, 0)');
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, radius * 4, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();

                // Dot
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(186, 230, 253, ${alpha})`;
                ctx.fill();
            }

            animRef.current = requestAnimationFrame(draw);
        }

        animRef.current = requestAnimationFrame(draw);

        return () => {
            clearTimeout(fadeTimer);
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                width: '100%',
                height: '100%',
                opacity,
                transition: 'opacity 1.2s ease-out',
            }}
        />
    );
};

export default SphereCanvas;
