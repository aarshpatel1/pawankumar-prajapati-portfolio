import React from 'react';
import { DESIGNER_PROFILE } from '../data/works';
import { EditorialParens, HeroContinuousThread } from './Squiggles';

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
      className="relative mx-auto max-w-[1180px] overflow-hidden px-6 pt-12 pb-10 sm:px-10 md:pt-16 md:pb-14"
    >
      {/* Continuous 1.5px Black Ink Thread entering from top & looping behind SEE PORTFOLIO */}
      <HeroContinuousThread className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[580px] -translate-x-1/2 opacity-90 md:block" />

      {/* Scattered Editorial Typography matching Reference Image 1 */}
      <div className="relative z-10 mx-auto max-w-[1040px]">
        <h1 className="font-editorial text-[42px] leading-[1.06] text-black sm:text-[62px] lg:text-[76px] lg:leading-[1.03]">
          {/* Line 1 */}
          <span className="flex flex-wrap items-center gap-x-8 gap-y-3 md:justify-between md:pr-20">
            <span>Hey there!</span>
            <span className="inline-flex flex-wrap items-center gap-4">
              <span>I’m Pawankumar.</span>
              <span
                className="inline-flex h-[74px] w-[74px] overflow-hidden rounded-full border-2 border-[#1e56a8] bg-[#1e56a8] align-middle sm:h-[92px] sm:w-[92px]"
                title="Pawankumar Prajapati — Graphic Designer"
              >
                <img
                  src={DESIGNER_PROFILE.portraitUrl}
                  alt="Portrait of graphic designer Pawankumar Prajapati"
                  className="h-full w-full object-cover"
                />
              </span>
            </span>
          </span>

          {/* Line 2 (shifted right) */}
          <span className="mt-2 block md:mt-3 md:pl-[38%]">
            Two years shaping brands
          </span>

          {/* Line 3 (left-offset + Giant Parentheses on right) */}
          <span className="mt-3 flex flex-col gap-5 md:mt-4 md:flex-row md:items-center md:justify-between md:pl-[12%] md:pr-[6%]">
            <span>to appear</span>
            <EditorialParens className="self-start md:self-center">
              <p className="m-0">Graphic designer with 2 years</p>
              <p className="m-0">of brand, print &amp; packaging craft</p>
            </EditorialParens>
          </span>

          {/* Line 4 */}
          <span className="mt-3 flex flex-wrap items-baseline gap-x-10 gap-y-2 md:mt-4">
            <span>in print &amp; life</span>
            <span>
              as <em>unique</em>
            </span>
          </span>

          {/* Line 5 */}
          <span className="mt-2 block md:mt-3 md:pl-[46%]">
            as <em>they are.</em>
          </span>
        </h1>
      </div>

      {/* Centered Oversized Dusty-Sky Offset Pill CTA Button */}
      <div className="relative z-10 mt-14 flex flex-col items-center gap-4 md:mt-16">
        <button
          type="button"
          onClick={scrollToWork}
          className="pill-cta w-full max-w-[960px] px-10 py-8 sm:py-10"
        >
          SEE PORTFOLIO
        </button>

        <p className="font-ui text-[13px] text-charcoal">
          Showing dummy placeholder works until live uploads —{' '}
          <button
            type="button"
            onClick={onOpenAddWork}
            className="coral-inline-link bg-transparent p-0 font-ui text-[13px]"
          >
            + add Pawankumar’s work
          </button>
        </p>
      </div>
    </section>
  );
};
