import React from 'react';

export default function Capabilities() {
  const tools = [
    { 
      title: 'TECH INTERVIEW SIMULATOR', 
      category: 'CAREER', 
      desc: 'Practice live tech interviews with an AI that adapts in real time. DSA, system design, behavioural.',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    },
    { 
      title: 'RESUME ANALYZER', 
      category: 'CAREER', 
      desc: 'Upload your resume. Get pinpoint feedback - ATS score, missing keywords, role-specific rewrites.',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    },
    { 
      title: 'CAREER PREDICTOR', 
      category: 'CAREER', 
      desc: 'Discover the career paths that fit you best backed by deep ML on skills, projects and interviews.',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
    },
    { 
      title: 'PDF INTELLIGENCE', 
      category: 'SILENT READING', 
      desc: 'Stop reading 100-page textbooks. Chat with them. Extract summaries and find exact answers instantly.',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z"/></svg>
    },
    { 
      title: 'MOCK TESTS', 
      category: 'PRACTICE', 
      desc: 'Generate adaptive MCQs from any topic or file. Quizzes that actually adjust to your weak spots.',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    },
    { 
      title: 'CODE & GITHUB', 
      category: 'CODE', 
      desc: 'Paste a GitHub link. We pull the raw code and help you debug, explain, or rewrite line by line.',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    },
    { 
      title: 'VISION AI & GENERATION', 
      category: 'VISION', 
      desc: 'Snap handwritten math for step-by-step solutions, or describe an idea and let AI render stunning visuals.',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
    },
    { 
      title: 'PERSONALISED LEARNING', 
      category: 'MEMORY', 
      desc: 'Your AI study companion remembers what you struggle with - and crafts custom plans.',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    }
  ];

  return (
    <section id="features" className="bg-zinc-950 text-zinc-100 py-32 px-6 max-w-7xl mx-auto border-t border-zinc-900/60">
      <div className="mb-16 space-y-2">
        <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">CAPABILITIES & TOOLS</h2>
        <h3 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
          Eight quiet tools. One obvious advantage.
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool, idx) => (
          <div 
            key={idx} 
            className="bg-zinc-900/20 border border-zinc-900 p-6 rounded-sm hover:border-zinc-700/60 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded bg-zinc-950">
                  {tool.category}
                </span>
                <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">
                  {tool.icon}
                </div>
              </div>
              <h4 className="text-xs font-bold tracking-wider text-zinc-200 pt-2">{tool.title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">{tool.desc}</p>
            </div>
            <div className="pt-8 text-right">
              <span className="inline-block text-zinc-600 group-hover:text-zinc-200 group-hover:translate-x-1 transition-all duration-200 text-xs font-mono">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}