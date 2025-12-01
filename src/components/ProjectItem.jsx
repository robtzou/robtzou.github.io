import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ id, title, videoUrl, description, solution, tags, sourceUrl, demoUrl }) => {
    // Helper to extract YouTube ID if needed, or just use embed URL directly if provided
    const getEmbedUrl = (url) => {
        if (url.includes('youtube.com/watch?v=')) {
            const videoId = url.split('v=')[1];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url; // Assume it's already an embed URL or other valid source
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 mb-6 bg-slate-50 p-4 rounded-xl shadow-sm transition-all duration-300 border border-slate-300">

            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-2 text-slate-700">{title}</h3>
                <div className="prose text-slate-500 leading-relaxed text-sm">
                    {description}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags && tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-200 text-slate-600 text-xs rounded-md font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt- flex gap-3">
                    <Link to={`/projects/${id}`} className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-500 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                        <span>Read More</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm font-semibold hover:bg-slate-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                        <span>Live Demo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                    <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                        <span>Source Code</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-black mb-4">
                    <iframe
                        width="100%"
                        height="100%"
                        src={getEmbedUrl(videoUrl)}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                {solution}
            </div>
        </div>
    );
};

export default ProjectItem;
