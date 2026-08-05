import React from 'react';

const skills = [
  { category: 'Languages', items: ['JavaScript', 'Python', 'HTML/CSS', 'SQL'] },
  { category: 'Frameworks', items: ['React', 'Node.js', 'Flask', 'Tauri'] },
  { category: 'AI / ML', items: ['YOLOv11', 'Computer Vision', 'Gemini API', 'NLP'] },
  { category: 'Tools', items: ['Git', 'Vite', 'Roboflow', 'Google Cloud'] },
];

const experience = [
  {
    role: 'Software Developer',
    org: 'Personal Projects',
    period: '2024 – Present',
    description:
      'Building full-stack applications with React, Node.js, and Python — from NLP-powered calendar tools to real-time computer vision systems.',
  },
  {
    role: 'Hackathon Team Lead',
    org: 'HackUMBC 2024',
    period: '2024',
    description:
      'Led a 2-person team to build SyllaScan, a React/Flask app using Gemini API to parse and summarize course syllabi in seconds.',
  },
];

const AboutSection = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      {/* Bio Card */}
      <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          About Me
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed mb-3">
          I'm Robert — a developer and Information Science student at the University of Maryland
          with a passion for building tools that solve real problems. I enjoy working across the
          full stack, from crafting clean user interfaces to training computer vision models.
        </p>
        <p className="text-sm text-slate-500 leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, contributing to
          open-source projects, or brainstorming the next app idea. I believe great software
          starts with empathy for the user and attention to detail.
        </p>
      </div>

      {/* Skills Card */}
      <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded font-medium hover:bg-slate-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Card */}
      <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Experience
        </h2>
        <div className="space-y-4">
          {experience.map((item, i) => (
            <div
              key={i}
              className="relative pl-4 border-l-2 border-slate-200 hover:border-slate-400 transition-colors duration-200"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-sm font-semibold text-slate-700">{item.role}</h3>
                <span className="text-[11px] font-mono text-slate-400 ml-2 shrink-0">{item.period}</span>
              </div>
              <p className="text-xs font-medium text-slate-400 mb-1">{item.org}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Card */}
      <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          Education
        </h2>
        <div className="pl-4 border-l-2 border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700">University of Maryland</h3>
          <p className="text-xs font-medium text-slate-400 mb-1">B.S. Information Science</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Coursework in data science, human-computer interaction, web development, and machine learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
