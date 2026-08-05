import React, { useState } from 'react';
import Header from './components/Header';
import ContentCard from './components/ContentCard';
import ProjectCarousel from './components/ProjectCarousel';
import PostModal from './components/PostModal';
import AboutSection from './components/AboutSection';
import { projects } from './data/projects';
import { posts } from './data/posts';

function App() {
  const [tab, setTab] = useState('projects');
  const [activePost, setActivePost] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Tab toggle */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="flex justify-center">
          <div className="inline-flex bg-slate-200/70 rounded-lg p-1">
            <button
              onClick={() => setTab('projects')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                tab === 'projects'
                  ? 'bg-white text-slate-800 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setTab('about')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                tab === 'about'
                  ? 'bg-white text-slate-800 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setTab('blog')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                tab === 'blog'
                  ? 'bg-white text-slate-800 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Blog
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-10 pb-16">
        {tab === 'projects' && <ProjectCarousel projects={projects} />}
        {tab === 'about' && <AboutSection />}
        {tab === 'blog' && (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <ContentCard
                key={post.id}
                item={post}
                type="post"
                onReadMore={setActivePost}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Robert Tzou
        </p>
      </footer>

      {/* Post modal */}
      {activePost && (
        <PostModal post={activePost} onClose={() => setActivePost(null)} />
      )}
    </div>
  );
}

export default App;
