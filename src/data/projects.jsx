import React from 'react';

export const projects = [
    {
        id: 1,
        title: "Course to Calendar - A full-stack application",
        videoUrl: "https://www.youtube.com/watch?v=Ujrm_PUvi8g",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900"><span>Situation:</span></strong> Students spent excessive time manually entering class schedules into Google Calendar each semester.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900">Task:</strong> Build a tool to automate course schedule imports to Google Calendar.
                </p>
            </>
        ),
        solution: (
            <p className="mt-4 text-sm text-slate-500">
                <strong className="text-gray-900">Action:</strong> Developed a React/Node.js app using NLP to parse schedules and OAuth2.0 to sync with Google Calendar.
                <br /><br />
                <strong className="text-gray-900">Result:</strong> Reduced calendar setup time by 80%, saving students hours each semester.
            </p>
        ),
        tags: ["React", "Node.js", "Google Calendar API", "OAuth2.0"],
        sourceUrl: "https://github.com/robtzou/course-to-cal",
        demoUrl: "https://course2cal.com"
    },
    {
        id: 2,
        title: "Real-Time Donut Object Detection",
        videoUrl: "https://www.youtube.com/watch?v=OwYrSGb3ZCE",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900">Situation:</strong> Food franchises lacked real-time inventory visibility, leading to waste and missed sales opportunities.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900">Task:</strong> Create a system to track donut inventory in real-time for proactive decision-making.
                </p>
            </>
        ),
        solution: (
            <p className="mt-4 text-sm text-slate-500">
                <strong className="text-gray-900">Action:</strong> Trained a YOLOv11 model on 2,000 augmented images using Google Colab and Roboflow.
                <br /><br />
                <strong className="text-gray-900">Result:</strong> Achieved high mAP score with robust detection across varying lighting and angles.
            </p>
        ),
        tags: ["YOLOv11", "Computer Vision", "Python", "Google Colab", "Roboflow"],
        sourceUrl: "https://huggingface.co/datasets/robtzou/donuts",
        demoUrl: "https://huggingface.co/spaces/robtzou/dunkinInventory"
    },
    {
        id: 3,
        title: "To-do List App with random task generator",
        videoUrl: "https://www.youtube.com/watch?v=Gz3niQ5E98Q",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900">Situation:</strong> Task paralysis made it difficult to start working despite having a to-do list.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900">Task:</strong> Create a gamified experience to help users overcome procrastination.
                </p>
            </>
        ),
        solution: (
            <p className="mt-4 text-sm text-slate-500">
                <strong className="text-gray-900">Action:</strong> Built a desktop app with React and Tauri featuring a spinner wheel for random task selection.
                <br /><br />
                <strong className="text-gray-900">Result:</strong> Delivered a lightweight, personalized productivity tool that removes decision fatigue.
            </p>
        ),
        tags: ["React", "Tauri", "HTML"],
        sourceUrl: "https://github.com/robtzou/pomo",
        demoUrl: "https://www.youtube.com/watch?v=Gz3niQ5E98Q"
    },
    {
        id: 4,
        title: "SyllaScan",
        videoUrl: "https://www.youtube.com/watch?v=rEmNclLkUf8",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900">Situation:</strong> Students juggle multiple syllabi with scattered deadlines and schedules.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900">Task:</strong> Build an app to quickly extract and summarize key syllabus information.
                </p>
            </>
        ),
        solution: (
            <p className="mt-4 text-sm text-slate-500">
                <strong className="text-gray-900">Action:</strong> Led a 2-person team at HackUMBC 2024 to build a React/Flask app using Gemini API for parsing.
                <br /><br />
                <strong className="text-gray-900">Result:</strong> Enabled users to scan and summarize syllabi in seconds.
            </p>
        ),
        tags: ["React", "Gemini API", "Flask"],
        sourceUrl: "https://github.com/robtzou/SyllaScan",
        demoUrl: "https://devpost.com/software/syllascan-a93pfc"
    }
];
