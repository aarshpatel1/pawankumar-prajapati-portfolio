import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'top', label: 'Intro', code: '00' },
  { id: 'work', label: 'Works', code: '01' },
  { id: 'experience', label: 'Craft', code: '02' },
  { id: 'principles', label: 'Principles', code: '03' },
  { id: 'contact', label: 'Contact', code: '04' },
];

export const SectionProgressRail: React.FC = () => {
  const [activeId, setActiveId] = useState('top');
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      setScrollPercent(Math.min(100, Math.round((window.scrollY / maxScroll) * 100)));

      let current = 'top';
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.42) {
          current = s.id;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateProgress();
        rafId = 0;
      });
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside
      aria-label="Section quick navigation"
      className="fixed top-1/2 right-7 z-30 hidden -translate-y-1/2 xl:flex flex-col items-end gap-2"
    >
      <div className="flex flex-col items-end gap-1.5 rounded-[30px] border-[1.5px] border-dusty-sky bg-white/92 px-2.5 py-3 shadow-[4px_-4px_0px_0px_#81aed9]">
        {SECTIONS.map((s) => {
          const active = activeId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => handleJump(s.id)}
              title={`${s.code} — ${s.label}`}
              className={`group flex items-center gap-2 rounded-[3000px] border-0 bg-transparent px-2 py-1 font-ui text-[11px] cursor-pointer transition-all ${
                active ? 'text-black font-medium' : 'text-charcoal/55 hover:text-black'
              }`}
            >
              <span
                className={`transition-all duration-200 ${
                  active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {s.label}
              </span>
              <span
                className={`flex h-[22px] w-[22px] items-center justify-center rounded-full border text-[10px] transition-colors ${
                  active
                    ? 'border-black bg-dusty-sky text-black'
                    : 'border-dusty-sky/70 bg-warm-paper text-charcoal group-hover:border-black'
                }`}
              >
                {s.code}
              </span>
            </button>
          );
        })}

        <div className="mt-1 h-[1px] w-full bg-dusty-sky/40" />
        <span className="px-1.5 font-ui text-[10px] text-charcoal/70">
          {scrollPercent}%
        </span>
      </div>
    </aside>
  );
};
