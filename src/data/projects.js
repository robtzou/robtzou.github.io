import Course2CalAsset from '../assets/Course2CalAsset.png';
import DonutClip from '../assets/DonutClip.mp4';
import PomoClip from '../assets/PomoClip.mp4';
import SyllaScanClip from '../assets/SyllaScanClip.mp4';

export const projects = [
  {
    id: 1,
    title: "Course to Calendar",
    description:
      "Students spent excessive time manually entering class schedules into Google Calendar. Built a React/Node.js app using NLP to parse course schedules and OAuth2.0 to sync directly with Google Calendar — reducing setup time by 80%.",
    tags: ["React", "Node.js", "Google Calendar API", "OAuth2.0"],
    sourceUrl: "https://github.com/robtzou/course-to-cal",
    demoUrl: "https://course2cal.com",
    videoId: "Ujrm_PUvi8g",
    videoSrc: null,
    imageSrc: Course2CalAsset,
  },
  {
    id: 2,
    title: "Real-Time Donut Detection",
    description:
      "Food franchises lacked real-time inventory visibility, leading to waste and missed sales. Trained a YOLOv11 model on 2,000 augmented images to detect donuts with high mAP across varying lighting and angles.",
    tags: ["YOLOv11", "Computer Vision", "Python", "Roboflow"],
    sourceUrl: "https://huggingface.co/datasets/robtzou/donuts",
    demoUrl: "https://huggingface.co/spaces/robtzou/dunkinInventory",
    videoId: "OwYrSGb3ZCE",
    videoSrc: DonutClip,
  },
  {
    id: 3,
    title: "To-Do List with Random Task Spinner",
    description:
      "Task paralysis makes it difficult to start working despite having a to-do list. Built a desktop app with React and Tauri featuring a spinner wheel for random task selection — removing decision fatigue.",
    tags: ["React", "Tauri", "HTML"],
    sourceUrl: "https://github.com/robtzou/pomo",
    demoUrl: "https://www.youtube.com/watch?v=Gz3niQ5E98Q",
    videoId: "Gz3niQ5E98Q",
    videoSrc: PomoClip,
  },
  {
    id: 4,
    title: "SyllaScan",
    description:
      "Students juggle multiple syllabi with scattered deadlines. Led a 2-person team at HackUMBC 2024 to build a React/Flask app using Gemini API to parse and summarize syllabi in seconds.",
    tags: ["React", "Gemini API", "Flask"],
    sourceUrl: "https://github.com/robtzou/SyllaScan",
    demoUrl: "https://devpost.com/software/syllascan-a93pfc",
    videoId: "rEmNclLkUf8",
    videoSrc: SyllaScanClip,
  },
];
