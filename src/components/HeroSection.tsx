import React, { useState } from 'react';
import { DESIGNER_PROFILE } from '../data/works';
import { EditorialParens, HeroContinuousThread } from './Squiggles';

interface HeroSectionProps {
  onOpenAddWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAddWork }) => {
  const [portraitNoteOpen, setPortraitNoteOpen] = useState(false);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1180px] overflow-hidden px-6 pt-12 pb-12 sm:px-10 md:pt-16 md:pb-16"
    >
      {/* Continuous 1.5px Black Ink Rope routed through negative spaces, aligned to max-w-[1040px] */}
      <div className="pointer-events-none relative mx-auto max-w-[1040px]">
        <HeroContinuousThread className="absolute -top-12 inset-x-0 hidden h-[740px] w-full md:block" />
      </div>

      {/* Scattered Editorial Typography with On-Load Choreography */}
      <div className="relative z-10 mx-auto max-w-[1040px]">
        <h1 className="font-editorial hero-type-halo text-[42px] leading-[1.06] text-black sm:text-[62px] lg:text-[76px] lg:leading-[1.03]">
          {/* Line 1 (higher z-index so portrait bio popover sits cleanly above Line 2) */}
          <span
            style={{ animationDelay: '40ms' }}
            className="animate-hero-rise relative z-20 flex flex-wrap items-center gap-x-8 gap-y-3 md:justify-between md:pr-20"
          >
            <span>Hey there!</span>
            <span className="inline-flex flex-wrap items-center gap-4">
              <span>I’m Pawankumar.</span>

              <span className="relative inline-flex items-center">
                <button
                  type="button"
                  onClick={() => setPortraitNoteOpen((prev) => !prev)}
                  title="Click to toggle designer bio note"
                  aria-expanded={portraitNoteOpen}
                  className="animate-hero-pop inline-flex h-[74px] w-[74px] cursor-pointer overflow-hidden rounded-full border-2 border-[#1e56a8] bg-[#1e56a8] align-middle shadow-[3px_-3px_0px_0px_#81aed9] transition-transform duration-200 hover:scale-105 sm:h-[92px] sm:w-[92px]"
                  style={{ animationDelay: '220ms' }}
                >
                  <img
                    src={DESIGNER_PROFILE.portraitUrl}
                    alt="Portrait of graphic designer Pawankumar Prajapati"
                    className="h-full w-full object-cover"
                  />
                </button>

                {portraitNoteOpen && (
                  <span
                    role="status"
                    className="animate-modal-enter absolute top-full right-0 z-30 mt-3 w-[220px] rounded-[20px] border-[1.5px] border-dusty-sky bg-white p-3.5 text-left font-ui text-[12px] leading-[1.4] text-charcoal shadow-[4px_-4px_0px_0px_#81aed9] [text-shadow:none]"
                  >
                    <strong className="block text-black">Pawankumar Prajapati</strong>
                    2 years shaping brand identities, packaging &amp; print.{' '}
                    <span className="coral-inline-link" onClick={onOpenAddWork}>
                      + add work
                    </span>
                  </span>
                )}
              </span>
            </span>
          </span>

          {/* Line 2 (shifted right, leaving left pocket clean for the thread loop) */}
          <span
            style={{ animationDelay: '140ms' }}
            className="animate-hero-rise relative z-10 mt-2 block md:mt-3 md:pl-[38%]"
          >
            Two years shaping brands
          </span>

          {/* Line 3 (left-offset + Giant Parentheses on right) */}
          <span
            style={{ animationDelay: '240ms' }}
            className="animate-hero-rise mt-3 flex flex-col gap-5 md:mt-4 md:flex-row md:items-center md:justify-between md:pl-[8%] md:pr-[4%]"
          >
            <span>to appear</span>
            <EditorialParens className="self-start md:self-center bg-warm-paper/75">
              <p className="m-0">Graphic designer with 2 years</p>
              <p className="m-0">of brand, print &amp; packaging craft</p>
            </EditorialParens>
          </span>

          {/* Line 4 */}
          <span
            style={{ animationDelay: '340ms' }}
            className="animate-hero-rise mt-3 flex flex-wrap items-baseline gap-x-12 gap-y-2 md:mt-4 md:justify-between md:pr-[24%]"
          >
            <span>in print &amp; life</span>
            <span>
              as <em>unique</em>
            </span>
          </span>

          {/* Line 5 */}
          <span
            style={{ animationDelay: '430ms' }}
            className="animate-hero-rise mt-2 block md:mt-3 md:pl-[48%]"
          >
            as <em>they are.</em>
          </span>
        </h1>
      </div>

      {/* Centered Oversized Dusty-Sky Offset Pill CTA Button */}
      <div
        style={{ animationDelay: '520ms' }}
        className="animate-hero-rise relative z-10 mt-14 flex flex-col items-center gap-4 md:mt-16"
      >
        <button
          type="button"
          onClick={scrollToWork}
          className="pill-cta w-full max-w-[960px] px-10 py-8 sm:py-10"
        >
          SEE PORTFOLIO
        </button>

        <p className="bg-warm-paper/85 px-3 py-1 rounded-[3000px] font-ui text-[13px] text-charcoal">
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
