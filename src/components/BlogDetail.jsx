import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts, categoryColors } from './BlogList';

const MIN_SCALE = 1;
const MAX_SCALE = 6;
const ZOOM_STEP = 0.15;

const ZoomableImage = ({ src, alt }) => {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const translateStart = useRef({ x: 0, y: 0 });

    const clampTranslate = useCallback((x, y, s) => {
        if (s <= 1) return { x: 0, y: 0 };
        const el = containerRef.current;
        if (!el) return { x, y };
        const maxX = (el.scrollWidth * (s - 1)) / 2;
        const maxY = (el.scrollHeight * (s - 1)) / 2;
        return {
            x: Math.max(-maxX, Math.min(maxX, x)),
            y: Math.max(-maxY, Math.min(maxY, y)),
        };
    }, []);

    const handleWheel = useCallback((e) => {
        e.preventDefault();
        setScale(prev => {
            const next = e.deltaY < 0
                ? Math.min(MAX_SCALE, prev + ZOOM_STEP)
                : Math.max(MIN_SCALE, prev - ZOOM_STEP);
            if (next <= 1) setTranslate({ x: 0, y: 0 });
            return next;
        });
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        el.addEventListener('wheel', handleWheel, { passive: false });
        return () => el.removeEventListener('wheel', handleWheel);
    }, [handleWheel]);

    const handlePointerDown = useCallback((e) => {
        if (scale <= 1) return;
        e.preventDefault();
        setIsDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY };
        translateStart.current = { ...translate };
        e.currentTarget.setPointerCapture(e.pointerId);
    }, [scale, translate]);

    const handlePointerMove = useCallback((e) => {
        if (!isDragging) return;
        const dx = e.clientX - dragStart.current.x;
        const dy = e.clientY - dragStart.current.y;
        setTranslate(clampTranslate(
            translateStart.current.x + dx,
            translateStart.current.y + dy,
            scale
        ));
    }, [isDragging, scale, clampTranslate]);

    const handlePointerUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const resetView = () => {
        setScale(1);
        setTranslate({ x: 0, y: 0 });
    };

    const zoomIn = () => setScale(prev => Math.min(MAX_SCALE, prev + ZOOM_STEP * 2));
    const zoomOut = () => {
        setScale(prev => {
            const next = Math.max(MIN_SCALE, prev - ZOOM_STEP * 2);
            if (next <= 1) setTranslate({ x: 0, y: 0 });
            return next;
        });
    };

    const zoomPercent = Math.round(scale * 100);

    return (
        <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-lg mb-8 bg-white group/zoom">
            {/* Zoom controls */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-slate-200 px-2 py-1.5 opacity-70 group-hover/zoom:opacity-100 transition-opacity">
                <button onClick={zoomOut} className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-600 transition-colors" title="Zoom out">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /></svg>
                </button>
                <span className="text-xs font-mono text-slate-500 w-10 text-center select-none">{zoomPercent}%</span>
                <button onClick={zoomIn} className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-600 transition-colors" title="Zoom in">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                </button>
                {scale > 1 && (
                    <button onClick={resetView} className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-600 transition-colors ml-0.5 border-l border-slate-200 pl-1.5" title="Reset zoom">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h5M20 20v-5h-5M4 9a9 9 0 0 1 15.36-5.36M20 15a9 9 0 0 1-15.36 5.36" /></svg>
                    </button>
                )}
            </div>

            {/* Hint text */}
            {scale <= 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-[11px] font-medium text-slate-400 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 opacity-0 group-hover/zoom:opacity-100 transition-opacity select-none">
                    Scroll to zoom · Drag to pan
                </div>
            )}

            {/* Image container */}
            <div
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="overflow-hidden"
                style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto select-none"
                    draggable={false}
                    style={{
                        transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
                        transformOrigin: 'center center',
                        transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                    }}
                />
            </div>
        </div>
    );
};

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.slug === id);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    if (!post) {
        return (
            <div className="max-w-4xl mx-auto text-center mt-20">
                <p className="text-slate-500 text-lg">Article not found.</p>
                <Link to="/blog" className="inline-flex items-center gap-2 mt-4 text-sky-600 hover:text-sky-700 font-semibold transition-colors">
                    ← Back to Blog
                </Link>
            </div>
        );
    }

    const colors = categoryColors[post.category] || categoryColors.Industry;

    return (
        <div
            className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
            {/* Back link */}
            <Link to="/blog" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
            </Link>

            <article className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                {/* Gradient accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500" />

                <div className="p-6 md:p-10">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                            {post.category}
                        </span>
                        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                            <span>{post.readTime}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span>{post.date}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Preview / intro text */}
                    <p className="text-slate-500 text-lg leading-relaxed mb-8 border-l-4 border-sky-400 pl-4">
                        {post.preview}
                    </p>

                    {/* Zoomable SVG image */}
                    {post.image && (
                        <ZoomableImage src={post.image} alt={post.title} />
                    )}
                </div>
            </article>
        </div>
    );
};

export default BlogDetail;
