import React from 'react';

export const projects = [
    {
        id: 1,
        title: "Course to Calendar - A full-stack application",
        videoUrl: "https://www.youtube.com/watch?v=Ujrm_PUvi8g",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900"> Problem:</strong> Adding your classes to Google Calendar was a time-consuming process. Especially having to do it manually.
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
        tags: ["React", "Node.js", "Google Calendar API", "OAuth2.0"],
        sourceUrl: "https://github.com/robtzou/course-to-cal",
        demoUrl: "https://course2cal.com"
    },
    {
        id: 4,
        title: "Real-Time Donut Object Detection",
        videoUrl: "https://www.youtube.com/watch?v=OwYrSGb3ZCE",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900"> Problem:</strong> Managing inventory and reducing waste effectively is a challenge for food franchises. Without real-time data, it's hard to make proactive decisions to increase sales and minimize waste.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900"> Idea:</strong> I built a custom object detection model to identify and count donuts in real-time. This technology is designed to power proactive dashboards for franchise owners and customers.
                </p>
            </>
        ),
        solution: (
            <p className="mt-4 text-sm text-slate-500">
                <strong className="text-gray-900"> Solution:</strong> A robust YOLOv11 model trained on a custom dataset of 2,000 augmented images in Google Colab. It handles various lighting conditions and angles, achieving a high mAP score for accurate real-time tracking.
            </p>
        ),
        tags: ["YOLOv11", "Computer Vision", "Python", "Google Colab", "Roboflow"],
        sourceUrl: "",
        demoUrl: ""
    },
    {
        id: 2,
        title: "To-do List App with random task generator",
        videoUrl: "https://www.youtube.com/watch?v=Gz3niQ5E98Q",
        description: (
            <>
                <p className="mb-4">
                    <strong className="text-gray-900"> Problem:</strong> Making the list isn't the hard part. Getting started is.
                </p>
                <p className="mb-4">
                    <strong className="text-gray-900"> Idea:</strong> Online I've seen many people use spinner wheels to gamify the process of getting started, but I wanted to create a more personalized experience.
                </p>
            </>
        ),
        solution: (
            <p className="mt-4 text-sm text-slate-500">
                <strong className="text-gray-900"> Solution:</strong> An application that uses a random spinner wheel to select a task to complete.
            </p>
        ),
        tags: ["React", "Tauri", "HTML"],
        sourceUrl: "https://github.com/robtzou/pomo",
        demoUrl: "https://www.youtube.com/watch?v=Gz3niQ5E98Q"
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
                    <strong className="text-gray-800"> Idea:</strong> The main process was finding out what questions needed to answered for the student experinece. In a 24 hour period, at HackUMBC 2025, I spearheaded a team of 2 to create SyllaScan.
                </p>
            </>
        ),
        solution: (
            <p className="mt-4 text-sm text-slate-500">
                <strong className="text-gray-900"> Solution:</strong> A user-friendly app that allowed users to scan their syllabus and summarize it in a matter of seconds.
            </p>
        ),
        tags: ["React", "Gemini API", "Flask"],
        sourceUrl: "https://github.com/robtzou/SyllaScan",
        demoUrl: "https://devpost.com/software/syllascan-a93pfc"
    }
];
