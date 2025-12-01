import React from 'react';

export const projects = [
    {
        id: 1,
        title: "Course to Calendar",
        videoUrl: "https://www.youtube.com/watch?v=Ujrm_PUvi8g",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900"> Problem:</strong> Adding your classes to Google Calendar was a time-consuming process.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900"> Idea:</strong> I designed a tool to automate the process of adding classes to Google Calendar via NLP and API calls. I used React for the frontend and Node.js for the backend.
                </p>
            </>
        ),
        solution: (
            <p className="mt-4 text-sm text-slate-500">
                <strong className="text-gray-900"> Solution:</strong> A streamlined, responsive web application that reduced the time it took to add classes to Google Calendar by 80%, saving students valuable time.
            </p>
        ),
        tags: ["React", "Node.js", "Google Calendar API"],
        sourceUrl: "https://github.com/robtzou/course-to-cal",
        demoUrl: "https://course2cal.com"
    },
    {
        id: 2,
        title: "Subsplit - A Subscription Splitting Platform (WIP)",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900"> Problem:</strong> Every year, my friends and I would have the idea to split a Minecraft Realm and would have to do it manually.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900"> Process:</strong> I created a platform that allowed users to split subscriptions fairly and keep track of who owed what.
                </p>
            </>
        ),
        solution: (
            <p className="mt-4 text-sm text-slate-500">
                <strong className="text-gray-900"> Solution:</strong> A subscription splitting platform that allowed users to split subscriptions fairly and keep track of who owed what.
            </p>
        ),
        tags: ["React Native", "Firebase", "Mobile First"],
        sourceUrl: "https://github.com/robtzou/subsplit",
        demoUrl: "https://subsplit.demo"
    },
    {
        id: 3,
        title: "SyllaScan",
        videoUrl: "https://www.youtube.com/watch?v=rEmNclLkUf8",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900"> Problem:</strong> 5 classes, 5 schedules, 5 due dates. It's a lot to juggle.
                </p>
                <p className="mb-2">
                    <strong className="text-gray-800"> Process:</strong> The main process was finding out what questions needed to answered for the student experinece. In a 24 hour period, at HackUMBC 2025, I spearheaded a team of 2 to create SyllaScan.
                </p>
            </>
        ),
        solution: (
            <p className="mt-4 text-sm text-slate-500">
                <strong className="text-gray-900"> Solution:</strong> A user-friendly app that allowed users to scan their syllabus and summarize it in a matter of seconds.
            </p>
        ),
        tags: ["React", "Firebase", "Flask"],
        sourceUrl: "https://github.com/robtzou/SyllaScan",
        demoUrl: "https://devpost.com/software/syllascan-a93pfc"
    }
];
