import React, { useEffect, useRef } from 'react';

const PostModal = ({ post, onClose }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Close when clicking the overlay background
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Split content into paragraphs
  const paragraphs = post.content
    .split('\n\n')
    .filter((p) => p.trim().length > 0);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm px-4 py-8 overflow-y-auto animate-fade-in"
    >
      <article
        ref={contentRef}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-10">
          {/* Meta */}
          <div className="flex items-center gap-2 mb-4 text-xs text-slate-400 font-mono">
            <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded font-medium uppercase tracking-wider text-[10px]">
              {post.category}
            </span>
            <span>{post.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{post.date}</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 leading-tight">
            {post.title}
          </h2>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-slate-200 mb-6" />

          {/* Body */}
          <div className="space-y-4">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-slate-600 text-[15px] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostModal;
