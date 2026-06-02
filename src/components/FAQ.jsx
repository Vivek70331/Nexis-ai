import React, { useState } from 'react';

const faqs = [
  {
    q: 'Is Nexis AI free to use?',
    a: 'Yes. The Free plan is available forever with no credit card required. You get 10 AI conversations per day, access to PDF Intelligence for up to 2 documents, and basic mock tests. Upgrade to Pro for unlimited access.',
  },
  {
    q: 'Which exams and job roles does Nexis support?',
    a: 'Nexis covers engineering and management entrance exams (GATE, CAT, UPSC), software engineering roles (DSA, system design, behavioural), data science and ML interviews, and general career transitions. The AI adapts to any domain you describe.',
  },
  {
    q: 'How does the personalised learning memory work?',
    a: "Every session you complete is stored and analysed. Nexis tracks which topics you get wrong, how long you take, and where you hesitate. It then weights future practice sessions to focus on your actual weak spots — not a generic curriculum.",
  },
  {
    q: 'Is my data private and secure?',
    a: 'Absolutely. Your documents, conversations, and resume data are encrypted at rest and in transit. We never train our models on your personal data. You can delete all your data at any time from your account settings.',
  },
  {
    q: 'Can I use Nexis for my college or coaching centre?',
    a: 'Yes — the Team plan is built for institutions. You get an admin dashboard, bulk student management, progress analytics, and optional custom branding. Contact our sales team for a demo and custom pricing above 50 seats.',
  },
  {
    q: 'How accurate is the Resume Analyzer?',
    a: "Our ATS scoring engine is trained on thousands of real job descriptions and hiring patterns across top Indian and global tech companies. It checks keyword density, formatting compatibility, role alignment, and impact phrasing — and gives you rewritten bullet points, not just feedback.",
  },
  {
    q: 'Does the Tech Interview Simulator use real questions?',
    a: "Yes. Questions are sourced from verified interview experiences and updated regularly. The simulator adapts difficulty in real time based on your responses — if you're acing easy DSA questions, it escalates to medium and hard variants instantly.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`border-b border-zinc-900 transition-colors duration-200 ${isOpen ? 'border-zinc-800' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-6 text-left group"
      >
        <span className={`text-sm font-medium tracking-wide pr-8 transition-colors duration-200 ${isOpen ? 'text-zinc-100' : 'text-zinc-300 group-hover:text-zinc-100'}`}>
          {item.q}
        </span>
        <span className={`flex-shrink-0 w-4 h-4 mt-0.5 transition-transform duration-300 text-zinc-500 ${isOpen ? 'rotate-45' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <p className="text-zinc-400 text-sm leading-relaxed font-light pb-6 max-w-2xl">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-zinc-950 text-zinc-100 py-32 px-6 border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-2">
          <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">FAQ</h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            Questions, answered.
          </h3>
        </div>

        <div className="max-w-3xl">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-zinc-500 text-sm font-light">Still have questions?</p>
          <a href="mailto:support@nexisai.in" className="text-[10px] font-mono tracking-widest text-zinc-300 border border-zinc-800 px-4 py-2 hover:border-zinc-600 hover:text-zinc-100 transition-all duration-200 rounded-sm">
            CONTACT SUPPORT →
          </a>
        </div>
      </div>
    </section>
  );
}
