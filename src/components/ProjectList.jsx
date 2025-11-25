import React from 'react';
import ProjectItem from './ProjectItem';

const projects = [
    {
        id: 1,
        title: "Course to Calendar",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900"> Problem:</strong> Adding your classes to Google Calendar was a time-consuming process.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900"> Idea:</strong> I designed a tool to automate the process of adding classes to Google Calendar via NLP and API calls. I used React for the frontend and Node.js for the backend.
                </p>
                <p>
                    <strong className="text-gray-900"> Solution:</strong> A streamlined, responsive web application that reduced the time it took to add classes to Google Calendar by 80%, saving students valuable time.
                </p>
            </>
        ),
        tags: ["React", "Node.js", "Google Calendar API"],
        sourceUrl: "https://github.com/robtzou/course-to-calendar",
        demoUrl: "https://course2cal.com"
    },
    {
        id: 2,
        title: "Subsplit - A Subscription Splitting Platform",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900"> Problem:</strong> Roommates, family members, and friends found it challenging to split subscriptions fairly and keep track of who owed what.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900"> Process:</strong> I created a platform that allowed users to split subscriptions fairly and keep track of who owed what.
                </p>
                <p>
                    <strong className="text-gray-900"> Solution:</strong> A subscription splitting platform that allowed users to split subscriptions fairly and keep track of who owed what.
                </p>
            </>
        ),
        tags: ["React Native", "Firebase", "Mobile First"],
        sourceUrl: "https://github.com/robtzou/subsplit",
        demoUrl: "https://subsplit.demo"
    },
    {
        id: 3,
        title: "Fitness Tracking App",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900"> Problem:</strong> Users found existing fitness apps too complex or lacking in social features to keep them motivated.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900"> Process:</strong> I adopted a mobile-first approach, simplifying the workout logging flow. I added a social feed feature to share achievements with friends.
                </p>
                <p>
                    <strong className="text-gray-900"> Solution:</strong> A user-friendly app that increased user retention by 25% compared to the previous version, thanks to the engaging social features and intuitive UI.
                </p>
            </>
        ),
        tags: ["React Native", "Firebase", "Mobile First"],
        sourceUrl: "https://github.com/robtzou/fitness-tracker",
        demoUrl: "https://fitness-tracker.demo"
    }
];

const ProjectList = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-slate-700 border-b-4 border-sky-200 inline-block pb-1">My Projects</h2>
            {projects.map(project => (
                <ProjectItem
                    key={project.id}
                    title={project.title}
                    videoUrl={project.videoUrl}
                    description={project.description}
                    tags={project.tags}
                    sourceUrl={project.sourceUrl}
                    demoUrl={project.demoUrl}
                />
            ))}
        </div>
    );
};

export default ProjectList;
