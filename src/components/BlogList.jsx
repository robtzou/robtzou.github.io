import React from 'react';

const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development",
        date: "November 15, 2025",
        preview: "As we move towards more AI-integrated workflows, the role of a web developer is evolving. Here's what I think the next 5 years will look like...",
    },
    {
        id: 2,
        title: "Why I Chose React for My Portfolio",
        date: "October 28, 2025",
        preview: "Building a portfolio is a rite of passage for every developer. In this post, I break down why React + Vite was the perfect choice for performance and scalability.",
    },
    {
        id: 3,
        title: "Mastering Tailwind CSS",
        date: "September 10, 2025",
        preview: "Tailwind CSS has changed the way I write styles. It's not just about utility classes; it's about a design system that scales. Let's dive in.",
    }
];

const BlogList = () => {
    return (
        <div className="max-w-5xl mx-auto mt-2">
            <h2 className="text-2xl font-bold mb-6 text-slate-700 border-b-4 border-sky-200 inline-block pb-1">Blog Posts</h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map(post => (
                    <div key={post.id} className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-300 hover:shadow-md transition-shadow flex flex-col h-full">
                        <div className="mb-4">
                            <span className="text-xs font-mono text-sky-600 bg-sky-50 px-2 py-1 rounded-full">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-700 mb-3">{post.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                            {post.preview}
                        </p>
                        <a href="#" className="text-sky-600 hover:text-sky-700 font-medium text-sm flex items-center mt-auto">
                            Read more
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
