import React from 'react';
import { DESIGNER_PROFILE } from '../data/works';
import { SectionFlowSquiggle } from './Squiggles';

interface ExperienceSectionProps {
  onOpenAddWork: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onOpenAddWork,
}) => {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24"
    >
      <div className="relative md:pl-12">
        <span
          aria-hidden="true"
          className="font-editorial mb-3 block text-[22px] leading-none text-black md:absolute md:top-2 md:left-0 md:mb-0"
        >
          02
        </span>

        <h2 className="font-editorial max-w-[820px] text-[36px] leading-[1.04] text-black sm:text-[48px]">
          <em>Two years</em> of obsessing over grid, ink &amp; <em>character.</em>
        </h2>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Narrative & 2-Year Timeline */}
          <div className="space-y-8 lg:col-span-6">
            <p className="font-editorial text-[24px] leading-[1.42] text-black">
              I’m <em>{DESIGNER_PROFILE.fullName}</em> — a graphic designer who has spent
              the past two years turning rough notebook sketches into crisp brand systems,
              packaging, and print publications.
            </p>

            <p className="font-ui text-[15px] leading-[1.6] text-charcoal">
              (2 years of hands-on experience spanning studio collaboration and freelance
              commissions — blending expressive typography with print-ready discipline.)
            </p>

            <div className="space-y-6 border-t border-black/15 pt-6">
              {DESIGNER_PROFILE.timeline.map((item) => (
                <div key={item.period} className="space-y-1.5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-editorial text-[24px] leading-[1.2] text-black">
                      {item.title}
                    </h3>
                    <span className="font-ui text-[13px] text-charcoal">
                      ({item.period})
                    </span>
                  </div>
                  <p className="font-ui text-[14px] leading-[1.55] text-charcoal">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenAddWork}
                className="coral-inline-link bg-transparent p-0 font-ui text-[14px]"
              >
                add a recent project to showcase these 2 years →
              </button>
            </div>
          </div>

          {/* Right Staggered White Sketchbook Capabilities Card */}
          <div className="relative lg:col-span-6 lg:mt-8">
            <div className="sketch-card p-7 sm:p-[48px]">
              <p className="font-ui text-[13px] text-charcoal">
                (Craft &amp; Services)
              </p>
              <h3 className="font-editorial mt-2 text-[30px] leading-[1.2] text-black">
                What I <em>bring</em> to the table
              </h3>

              <ul className="mt-7 space-y-6">
                {DESIGNER_PROFILE.disciplines.map((d) => (
                  <li
                    key={d.index}
                    className="border-b border-dusty-sky/45 pb-5 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-editorial text-[20px] text-black">
                        {d.index}
                      </span>
                      <div>
                        <h4 className="font-editorial text-[22px] leading-[1.25] text-black">
                          {d.title}
                        </h4>
                        <p className="mt-1.5 font-ui text-[14px] leading-[1.5] text-charcoal">
                          {d.note}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2 pt-2">
                {DESIGNER_PROFILE.toolkit.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-[3000px] border-[1.5px] border-black bg-warm-paper px-3.5 py-1 font-ui text-[12px] text-black"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <SectionFlowSquiggle className="pointer-events-none mt-8 hidden w-[320px] opacity-85 md:ml-auto md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
