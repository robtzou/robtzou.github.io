import React from 'react';
import ProjectItem from './ProjectItem';

import { projects } from '../data/projects';

const ProjectList = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-slate-700 border-b-4 border-sky-200 inline-block pb-1">My Projects</h2>
            {projects.map(project => (
                <ProjectItem
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    videoUrl={project.videoUrl}
                    description={project.description}
                    solution={project.solution}
                    tags={project.tags}
                    sourceUrl={project.sourceUrl}
                    demoUrl={project.demoUrl}
                />
            ))}
        </div>
    );
};

export default ProjectList;
