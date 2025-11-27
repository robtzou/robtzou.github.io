import React from 'react';
import Sidebar from './components/Sidebar';
import ProjectList from './components/ProjectList';

import BlogList from './components/BlogList';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-200">
      <Sidebar />
      <main className="flex-1 p-8 md:p-12 lg:p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/blog" element={<BlogList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
