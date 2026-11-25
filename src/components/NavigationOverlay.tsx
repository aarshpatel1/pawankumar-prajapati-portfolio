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
      {/* Minimal Floating Top-Right Circular Hamburger Trigger matching Reference Images 1-5 */}
      <div className="fixed top-6 right-6 z-40 sm:top-9 sm:right-10">
        <button
          type="button"
          onClick={onToggle}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          className="circle-ink-btn h-[46px] w-[46px] flex-col gap-[4.5px]"
        >
          <span className="block h-[1.5px] w-[18px] bg-black" />
          <span className="block h-[1.5px] w-[13px] -translate-x-[2px] bg-black" />
          <span className="block h-[1.5px] w-[16px] translate-x-[1px] bg-black" />
        </button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-warm-paper px-6 py-7 md:px-12"
        >
          <div className="mx-auto flex w-full max-w-[1160px] items-center justify-between">
            <span className="font-ui text-[14px] text-charcoal">
              ({DESIGNER_PROFILE.fullName} — {DESIGNER_PROFILE.role} · 2 Years Experience)
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="circle-ink-btn h-[46px] w-[46px] font-ui text-[20px] leading-none"
            >
              ×
            </button>
          </div>

          <nav className="mx-auto my-auto w-full max-w-[1160px] py-10">
            <ul className="space-y-6 md:space-y-8">
              <li className="group flex items-baseline gap-5">
                <span className="font-editorial text-[22px] text-charcoal">01</span>
                <button
                  type="button"
                  onClick={() => navigateTo('work')}
                  className="font-editorial cursor-pointer text-left text-[40px] leading-none text-black transition-opacity hover:opacity-70 md:text-[64px]"
                >
                  My selected <em>works</em>
                </button>
              </li>

              <li className="group flex items-baseline gap-5">
                <span className="font-editorial text-[22px] text-charcoal">02</span>
                <button
                  type="button"
                  onClick={() => navigateTo('experience')}
                  className="font-editorial cursor-pointer text-left text-[40px] leading-none text-black transition-opacity hover:opacity-70 md:text-[64px]"
                >
                  Experience &amp; <em>craft</em>
                </button>
              </li>

              <li className="group flex items-baseline gap-5">
                <span className="font-editorial text-[22px] text-charcoal">03</span>
                <button
                  type="button"
                  onClick={() => navigateTo('principles')}
                  className="font-editorial cursor-pointer text-left text-[40px] leading-none text-black transition-opacity hover:opacity-70 md:text-[64px]"
                >
                  Principles &amp; <em>guidelines</em>
                </button>
              </li>

              <li className="group flex items-baseline gap-5">
                <span className="font-editorial text-[22px] text-charcoal">04</span>
                <button
                  type="button"
                  onClick={() => navigateTo('contact')}
                  className="font-editorial cursor-pointer text-left text-[40px] leading-none text-black transition-opacity hover:opacity-70 md:text-[64px]"
                >
                  Say <em>hello</em>
                </button>
              </li>

              <li className="group flex items-baseline gap-5 pt-2">
                <span className="font-editorial text-[22px] text-coral-link">+</span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenAddWork();
                  }}
                  className="font-editorial cursor-pointer text-left text-[34px] leading-none text-black transition-opacity hover:opacity-70 md:text-[52px]"
                >
                  Add <em>new work</em> to folio
                </button>
              </li>
            </ul>

            <HeroUnderlineCurve className="mt-8 w-[240px]" />
          </nav>

          <div className="mx-auto flex w-full max-w-[1160px] flex-wrap items-center justify-between gap-4 border-t border-black/15 pt-6">
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
