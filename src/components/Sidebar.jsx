import React from 'react';

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
                        <p className="text-sky-200 font-medium text-sm">Product Engineer</p>
                        <div className="flex space-x-3 mt-2">
                            <a href="#" className="text-slate-400 hover:text-sky-200 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-sky-200 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-sky-200 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

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
                            <h3 className="font-bold text-slate-200">Iterate</h3>
                            <p className="text-xs text-slate-400 font-mono">2025 - Present</p>
                        </div>
                        <p className="text-sm text-slate-400">Product Engineer</p>
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
                    <ul className="space-y-3">
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
