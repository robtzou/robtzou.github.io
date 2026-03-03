import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SphereCanvas from './SphereCanvas';
import healthcareAnalysisSvg from '../assets/healthcare_analysis.svg';

const blogPosts = [
    {
        id: 4,
        slug: 'healthcare',
        title: "Healthcare Data Analysis",
        date: "March 3, 2026",
        preview: "A deep dive into healthcare data trends—exploring patterns in patient outcomes, treatment efficacy, and system-wide metrics through detailed visual analysis.",
        category: "Data",
        readTime: "7 min read",
        image: healthcareAnalysisSvg,
    },
    {
        id: 1,
        slug: 'future-of-web-development',
        title: "The Future of Web Development",
        date: "November 15, 2025",
        preview: "As we move towards more AI-integrated workflows, the role of a web developer is evolving. Here's what I think the next 5 years will look like...",
        category: "Industry",
        readTime: "5 min read",
        image: null,
    },
    {
        id: 2,
        slug: 'why-i-chose-react',
        title: "Why I Chose React for My Portfolio",
        date: "October 28, 2025",
        preview: "Building a portfolio is a rite of passage for every developer. In this post, I break down why React + Vite was the perfect choice for performance and scalability.",
        category: "React",
        readTime: "4 min read",
        image: null,
    },
    {
        id: 3,
        slug: 'mastering-tailwind-css',
        title: "Mastering Tailwind CSS",
        date: "September 10, 2025",
        preview: "Tailwind CSS has changed the way I write styles. It's not just about utility classes; it's about a design system that scales. Let's dive in.",
        category: "CSS",
        readTime: "6 min read",
        image: null,
    }
];

const categoryColors = {
    Industry: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200' },
    React: { bg: 'bg-sky-100', text: 'text-sky-700', border: 'border-sky-200' },
    CSS: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' },
    Data: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' },
};

export { blogPosts, categoryColors };

const BlogCard = ({ post, index }) => {
    const [visible, setVisible] = useState(false);
    const colors = categoryColors[post.category] || categoryColors.Industry;

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 600 + index * 150);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 overflow-hidden
                        transition-all duration-500 ease-out hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: visible ? '0ms' : `${index * 150}ms` }}
        >
            {/* Gradient accent bar */}
            <div className="h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Thumbnail image */}
            {post.image && (
                <div className="w-full h-40 overflow-hidden bg-slate-50">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}

            <div className="p-6">
                {/* Meta row */}
                <div className="flex items-center justify-between mb-4">
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
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug group-hover:text-sky-700 transition-colors duration-300">
                    {post.title}
                </h3>

                {/* Preview */}
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {post.preview}
                </p>

                {/* Read more link */}
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group/link">
                    <span>Read article</span>
                    <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

const BlogList = () => {
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="max-w-5xl mx-auto">
            {/* Hero section with sphere */}
            <div
                className={`relative rounded-2xl overflow-hidden mb-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl
                            transition-all duration-1000 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
                {/* Subtle grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="relative flex flex-col md:flex-row items-center">
                    {/* Sphere */}
                    <div className="w-full md:w-1/2 h-64 md:h-80 flex-shrink-0">
                        <SphereCanvas />
                    </div>

                    {/* Text content */}
                    <div
                        className={`flex-1 p-8 md:pr-10 text-center md:text-left transition-all duration-700 delay-300
                                    ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                            <span className="text-xs font-medium text-sky-300 tracking-wide">Blog</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                            Thoughts &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Insights</span>
                        </h1>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                            Exploring ideas in web development, design patterns, and the evolving landscape of software engineering.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-700">
                    Latest Posts
                </h2>
                <span className="text-xs font-mono text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    {blogPosts.length} articles
                </span>
            </div>

            {/* Blog cards grid */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, i) => (
                    <BlogCard key={post.id} post={post} index={i} />
                ))}
            </div>
        </div>
    );
};

export default BlogList;
