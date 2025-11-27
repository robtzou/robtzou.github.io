import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="w-full md:w-1/4 lg:w-1/3 bg-slate-800 text-slate-200 p-6 md:h-screen md:sticky md:top-0 flex flex-col overflow-y-auto border-r border-slate-700">
            <div className="mb-6">
                <div className="flex items-center gap-4">
                    <img
                        src="public/linkedin.jpg"
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-2 border-slate-600 shadow-lg object-cover"
                    />
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-100">Robert Tzou</h1>
                        <p className="text-sky-200 font-medium text-sm">Software Engineer</p>
                        <div className="flex space-x-3 mt-2">
                            <a href="https://github.com/robtzou" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-200 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="https://huggingface.com/robtzou" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-200 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.372 0 0 5.372 0 12c0 3.73 1.7 7.045 4.35 9.293.4.347.93.535 1.485.535.418 0 .835-.145 1.155-.42l2.3-2.02c.31-.27.48-.65.48-1.05V12c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v5.35c0 .41.17.79.48 1.06l2.3 2.02c.32.275.74.42 1.155.42.555 0 1.085-.188 1.485-.535C22.3 19.045 24 15.73 24 12 24 5.372 18.628 0 12 0zM7.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/robert-tzou" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-200 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@bob_mt" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-200 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="flex space-x-2 mb-4 justify-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${isActive ? 'bg-slate-700 text-sky-200' : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'}`
                    }
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        `px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${isActive ? 'bg-slate-700 text-sky-200' : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'}`
                    }
                >
                    Blog
                </NavLink>
            </nav>

            <div className="space-y-6">
                <section>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Education</h2>
                    <div className="mb-2">
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-slate-200">University of Maryland</h3>
                            <p className="text-xs text-slate-400 font-mono">2024 - Present</p>
                        </div>
                        <p className="text-sm text-slate-400">B.S. Information Science</p>
                    </div>
                    <div className="mb-2">
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-slate-200">Montgomery College</h3>
                            <p className="text-xs text-slate-400 font-mono">2021 - 2024</p>
                        </div>
                        <p className="text-sm text-slate-400">A.A. General Studies</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Experience</h2>
                    <div className="mb-2">
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-slate-200">Handshake AI</h3>
                            <p className="text-xs text-slate-400 font-mono">2025 - Present</p>
                        </div>
                        <p className="text-sm text-slate-400">ML Annotation Clerk</p>
                    </div>
                    <div className="mb-2">
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-slate-200">University of Maryland</h3>
                            <p className="text-xs text-slate-400 font-mono">2025 - Present</p>
                        </div>
                        <p className="text-sm text-slate-400">Teaching Assistant</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Values</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center text-sm text-slate-300">
                            <svg className="w-4 h-4 mr-3 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            Fast & Scalable
                        </li>
                        <li className="flex items-center text-sm text-slate-300">
                            <svg className="w-4 h-4 mr-3 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                            Pixel Perfect
                        </li>
                        <li className="flex items-center text-sm text-slate-300">
                            <svg className="w-4 h-4 mr-3 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            User Centric
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Interests</h2>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                        <li>Open Source Contributing</li>
                        <li>UI/UX Design</li>
                        <li>Machine Learning</li>
                        <li>Hiking & Photography</li>
                    </ul>
                </section>
            </div>
        </aside>
    );
};

export default Sidebar;
