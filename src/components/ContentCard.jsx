import React from 'react';

const ContentCard = ({ item, type, onReadMore }) => {
  const isProject = type === 'project';

  return (
    <div className="group bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      {/* YouTube thumbnail for projects */}
      {isProject && item.videoId && (
        <a
          href={`https://www.youtube.com/watch?v=${item.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-video bg-slate-900 overflow-hidden"
        >
          <img
            src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
            alt={item.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600/90 transition-colors duration-300">
              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </a>
      )}

      <div className="p-5">
        {/* Category / meta for blog posts */}
        {!isProject && (
          <div className="flex items-center gap-2 mb-3 text-xs text-slate-400 font-mono">
            <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded font-medium uppercase tracking-wider text-[10px]">
              {item.category}
            </span>
            <span>{item.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{item.date}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-800 mb-2 leading-snug">
          {item.title}
        </h3>

        {/* Description / preview */}
        <p className="text-sm text-slate-500 leading-relaxed mb-4">
          {isProject ? item.description : item.preview}
        </p>

        {/* Tags for projects */}
        {isProject && item.tags && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action links for projects */}
        {isProject && (
          <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
            {item.demoUrl && (
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </a>
            )}
            {item.sourceUrl && (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Source
              </a>
            )}
          </div>
        )}
        {/* Read article link for blog posts */}
        {!isProject && onReadMore && (
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => onReadMore(item)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Read article
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
