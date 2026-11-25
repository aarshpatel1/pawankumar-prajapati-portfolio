import React, { useEffect } from 'react';
import { DESIGNER_PROFILE } from '../data/works';
import { HeroUnderlineCurve } from './Squiggles';

interface NavigationOverlayProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onOpenAddWork: () => void;
}

export const NavigationOverlay: React.FC<NavigationOverlayProps> = ({
  isOpen,
  onToggle,
  onClose,
  onOpenAddWork,
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const navigateTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="relative z-30 mx-auto flex max-w-[1200px] items-center justify-between px-6 pt-7 pb-4 md:px-10">
        <a
          href="#top"
          className="font-ui text-[14px] text-charcoal transition-opacity hover:opacity-75"
        >
          ({DESIGNER_PROFILE.fullName} — {DESIGNER_PROFILE.role} · 2 Yrs Exp.)
        </a>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenAddWork}
            className="coral-inline-link hidden font-ui text-[14px] sm:inline-block"
          >
            + add work
          </button>

          <button
            type="button"
            onClick={onToggle}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="flex h-[42px] w-[42px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[3000px] border-[1.5px] border-black bg-white shadow-[4px_-4px_0px_0px_#333333] transition-transform hover:-translate-x-[1px] hover:translate-y-[1px]"
          >
            <span className="block h-[1.5px] w-4 bg-black" />
            <span className="block h-[1.5px] w-4 bg-black" />
            <span className="block h-[1.5px] w-4 bg-black" />
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-warm-paper px-6 py-7 md:px-10"
        >
          <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
            <span className="font-ui text-[14px] text-charcoal">
              ({DESIGNER_PROFILE.shortMark} — Portfolio Index)
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-[3000px] border-[1.5px] border-black bg-white font-ui text-[18px] leading-none text-black shadow-[4px_-4px_0px_0px_#333333] transition-transform hover:-translate-x-[1px] hover:translate-y-[1px]"
            >
              ×
            </button>
          </div>

          <nav className="mx-auto my-auto w-full max-w-[1200px] py-10">
            <ul className="space-y-6 md:space-y-8">
              <li className="group flex items-baseline gap-5">
                <span className="font-editorial text-[22px] text-charcoal">01</span>
                <button
                  type="button"
                  onClick={() => navigateTo('work')}
                  className="font-editorial cursor-pointer text-left text-[42px] leading-none text-black transition-opacity hover:opacity-70 md:text-[64px]"
                >
                  Selected <em>works</em>
                </button>
              </li>

              <li className="group flex items-baseline gap-5">
                <span className="font-editorial text-[22px] text-charcoal">02</span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenAddWork();
                  }}
                  className="font-editorial cursor-pointer text-left text-[42px] leading-none text-black transition-opacity hover:opacity-70 md:text-[64px]"
                >
                  Add <em>new</em> work
                </button>
              </li>

              <li className="group flex items-baseline gap-5">
                <span className="font-editorial text-[22px] text-charcoal">03</span>
                <button
                  type="button"
                  onClick={() => navigateTo('experience')}
                  className="font-editorial cursor-pointer text-left text-[42px] leading-none text-black transition-opacity hover:opacity-70 md:text-[64px]"
                >
                  Two years of <em>craft</em>
                </button>
              </li>

              <li className="group flex items-baseline gap-5">
                <span className="font-editorial text-[22px] text-charcoal">04</span>
                <button
                  type="button"
                  onClick={() => navigateTo('contact')}
                  className="font-editorial cursor-pointer text-left text-[42px] leading-none text-black transition-opacity hover:opacity-70 md:text-[64px]"
                >
                  Say <em>hello</em>
                </button>
              </li>
            </ul>

            <HeroUnderlineCurve className="mt-8 w-[240px]" />
          </nav>

          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 border-t border-black/15 pt-6">
            <span className="font-ui text-[14px] text-charcoal">
              ({DESIGNER_PROFILE.availability})
            </span>

            <div className="flex flex-wrap items-center gap-6 font-ui text-[14px]">
              <a href={`mailto:${DESIGNER_PROFILE.email}`} className="coral-inline-link">
                {DESIGNER_PROFILE.email}
              </a>
              {DESIGNER_PROFILE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="coral-inline-link"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
