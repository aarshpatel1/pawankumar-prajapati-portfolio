import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { BlueSectionWhiteThread, EditorialParens } from './Squiggles';

interface ExperienceSectionProps {
  onOpenAddWork: () => void;
}

const CRAFT_PILLARS = [
  {
    id: 'clarity',
    headline: 'present brands to the world beautifully',
    detail:
      'Custom wordmarks, grid discipline, and restrained color pairings built to stand out on shelves and screens.',
  },
  {
    id: 'confidence',
    headline: 'inspire tactile confidence',
    detail:
      'Packaging dielines, uncoated paper selection, and print pre-press files checked down to the millimeter.',
  },
  {
    id: 'craft',
    headline: '2 years of graphic design craft',
    detail:
      'Two years spanning studio work and independent brand, editorial zine, and cultural poster commissions.',
  },
];

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onOpenAddWork,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: contentRef, isVisible } = useInView<HTMLDivElement>({ threshold: 0.12 });
  const [activePillar, setActivePillar] = useState<string>('clarity');
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let rafId = 0;

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          const offset = (rect.top + rect.height / 2 - viewportCenter) * -0.045;
          setParallaxY(Math.max(-24, Math.min(24, offset)));
        }
        rafId = 0;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative mx-2 my-8 overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0d488f] via-[#094183] to-[#073d7c] text-white sm:mx-4 sm:rounded-[32px]"
    >
      {/* Seamless Cobalt Editorial Portrait with Subtle Scroll Parallax */}
      <div
        style={{ transform: `translate3d(0, ${parallaxY}px, 0) scale(1.04)` }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] transition-transform duration-150 ease-out lg:block"
      >
        <img
          src="/images/avatar-pawan-blue.jpg"
          alt="Editorial studio portrait of Pawankumar Prajapati"
          className="h-full w-full object-cover object-top [mask-image:linear-gradient(to_right,transparent_0%,black_32%,black_100%)]"
        />
      </div>

      {/* Continuous White 1.5px Thread Drawing on Scroll */}
      <BlueSectionWhiteThread
        active={isVisible}
        className="pointer-events-none absolute top-0 left-[22%] hidden h-full w-[540px] opacity-90 md:block"
      />

      <div
        ref={contentRef}
        className={`relative z-10 mx-auto max-w-[1160px] px-6 pt-16 pb-12 sm:px-10 md:pt-24 md:pb-16 scroll-reveal ${
          isVisible ? 'scroll-reveal-visible' : ''
        }`}
      >
        <div className="flex flex-col gap-6 lg:max-w-[780px]">
          <div className="flex items-start gap-8 sm:gap-16">
            <span className="font-editorial pt-3 text-[18px] text-white/85">
              02
            </span>

            <h2 className="font-editorial text-[40px] leading-[1.05] text-white sm:text-[58px] lg:text-[68px]">
              <span className="block">I create</span>
              <span className="mt-2 block pl-[28%] sm:pl-[44%]">
                <em>tactile</em>
              </span>
            </h2>
          </div>

          <div className="font-editorial text-[40px] leading-[1.06] text-white sm:text-[58px] lg:text-[68px]">
            <span className="block sm:pl-[4%]">visuals</span>
            <span className="mt-2 flex flex-wrap gap-x-10 sm:pl-[18%]">
              <span>for</span>
              <span>adventurous</span>
            </span>
            <span className="mt-2 block pl-[36%] sm:pl-[58%]">brands</span>
          </div>

          {/* Mobile portrait */}
          <div className="mt-4 overflow-hidden rounded-[24px] lg:hidden">
            <img
              src="/images/avatar-pawan-blue.jpg"
              alt="Editorial studio portrait of Pawankumar Prajapati"
              className="h-[340px] w-full object-cover object-top"
            />
          </div>

          <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between lg:max-w-[600px]">
            <EditorialParens light>
              <p className="m-0">2 years of graphic design experience</p>
              <p className="m-0">turning concepts into brands, packaging &amp; print.</p>
            </EditorialParens>

            <button
              type="button"
              onClick={onOpenAddWork}
              className="coral-inline-link bg-transparent p-0 font-ui text-[13px]"
            >
              + add recent project
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Bottom White Rounded Strips (Click to Expand Craft Detail) */}
      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-end gap-4 px-4 pt-4 sm:grid-cols-3 sm:px-6">
        {CRAFT_PILLARS.map((pillar) => {
          const isActive = activePillar === pillar.id;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActivePillar(pillar.id)}
              aria-expanded={isActive}
              className={`cursor-pointer rounded-t-[24px] border-t border-x border-dusty-sky px-6 py-5 text-center text-black transition-all duration-300 sm:py-6 ${
                isActive
                  ? 'bg-white shadow-[0_-6px_0_0_rgba(129,174,217,0.45)]'
                  : 'bg-warm-paper/95 hover:bg-white'
              }`}
            >
              <p className="font-editorial text-[22px] leading-[1.18] sm:text-[26px]">
                {pillar.headline}
              </p>
              {isActive && (
                <p className="mt-2.5 font-ui text-[12px] sm:text-[13px] leading-[1.45] text-charcoal">
                  {pillar.detail}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};
