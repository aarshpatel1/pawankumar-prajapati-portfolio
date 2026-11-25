import React from 'react';
import { DESIGNER_PROFILE } from '../data/works';
import { HeroSquiggleLoop, HeroUnderlineCurve } from './Squiggles';

interface HeroSectionProps {
  onOpenAddWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAddWork }) => {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1200px] px-6 pt-10 pb-20 md:px-10 md:pt-16 md:pb-24"
    >
      {/* Decorative ink squiggle looping upper-right */}
      <HeroSquiggleLoop className="pointer-events-none absolute top-2 right-6 hidden w-[210px] opacity-90 lg:block" />

      <div className="relative">
        <h1 className="font-editorial text-[44px] leading-[1.02] text-black sm:text-[62px] lg:text-[80px] lg:leading-[1.0]">
          Hey there! I’m <em>Pawankumar</em>{' '}
          <span
            className="mx-2 -mt-2 inline-flex h-[74px] w-[74px] overflow-hidden rounded-[120px] border-[1.5px] border-black bg-white align-middle sm:h-[96px] sm:w-[96px] lg:h-[112px] lg:w-[112px]"
            title="Pawankumar Prajapati — Graphic Designer"
          >
            <img
              src={DESIGNER_PROFILE.portraitUrl}
              alt="Portrait of graphic designer Pawankumar Prajapati"
              className="h-full w-full object-cover grayscale-[20%]"
            />
          </span>{' '}
          <em>Prajapati</em>. Two years into shaping visual identities, print &amp;{' '}
          <em>packaging</em> that feel <em>unmistakably</em> human.
        </h1>

        <HeroUnderlineCurve className="mt-4 w-[240px] sm:w-[310px]" />
      </div>

      {/* Editorial Parenthetical & Inline Coral Action */}
      <div className="mt-10 flex flex-col items-start justify-between gap-6 md:mt-12 md:flex-row md:items-end">
        <p className="font-ui max-w-[540px] text-[14px] leading-[1.45] text-charcoal">
          (Graphic designer with 2 years of experience across brand identity, editorial layouts,
          packaging &amp; poster systems. Placeholder dummy works are staged below until you{' '}
          <button
            type="button"
            onClick={onOpenAddWork}
            className="coral-inline-link inline bg-transparent p-0 font-ui text-[14px]"
          >
            add your own projects
          </button>
          .)
        </p>

        <div className="font-ui flex items-center gap-6 text-[14px] text-charcoal">
          <span>{DESIGNER_PROFILE.location}</span>
          <a href="#contact" className="coral-inline-link">
            let’s collaborate →
          </a>
        </div>
      </div>

      {/* Centered Oversized Pill CTA Button per Design Spec */}
      <div className="mt-14 flex justify-center md:mt-16">
        <button
          type="button"
          onClick={scrollToWork}
          className="pill-cta w-full max-w-[600px] px-10 py-8 sm:py-[48px]"
        >
          SEE PORTFOLIO
        </button>
      </div>
    </section>
  );
};
