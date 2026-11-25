import React from 'react';
import { DESIGNER_PROFILE } from '../data/works';
import { EditorialParens } from './Squiggles';

interface PrinciplesSectionProps {
  onOpenAddWork: () => void;
}

export const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({
  onOpenAddWork,
}) => {
  return (
    <section
      id="principles"
      className="relative mx-auto max-w-[1180px] px-6 py-20 sm:px-10 md:py-24"
    >
      {/* Header matching Reference Image 5 */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-6 sm:gap-12">
          <span className="font-editorial pt-3 text-[18px] text-charcoal">
            03
          </span>

          <h2 className="font-editorial text-[42px] leading-[1.02] text-black sm:text-[62px] lg:text-[72px]">
            <span className="block">My principles</span>
            <span className="mt-1 block pl-[22%] sm:pl-[38%]">
              &amp; <em>guidelines</em>
            </span>
          </h2>
        </div>

        <div className="lg:pr-6">
          <EditorialParens>
            <p className="m-0">why clients &amp; studios</p>
            <p className="m-0">enjoy working with me</p>
          </EditorialParens>
        </div>
      </div>

      {/* Staggered 3-Card Layout matching Reference Image 5 */}
      <div className="mt-14 grid grid-cols-1 items-start gap-8 md:mt-16 md:grid-cols-12 md:gap-8">
        {/* Left Card: Responsibility */}
        <div className="md:col-span-4">
          <div className="sketch-card flex min-h-[340px] flex-col justify-between p-8 sm:min-h-[380px]">
            <h3 className="font-editorial text-[36px] leading-[1.08] text-black sm:text-[42px]">
              Responsi-
              <br />
              bility
            </h3>

            <p className="font-ui mt-12 text-[13px] sm:text-[14px] leading-[1.52] text-charcoal">
              Across 2 years of studio and freelance work, I follow deadlines, stay
              transparent through revisions, and deliver press-ready files cleanly.
            </p>
          </div>
        </div>

        {/* Center Staggered Lower Card: Inspiration (Cobalt Studio Double-Exposure) */}
        <div className="md:col-span-4 md:mt-36">
          <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[26px] border border-[#1e56a8] bg-[#0a3c7c] p-8 text-white shadow-[6px_-6px_0px_0px_#81aed9] sm:min-h-[380px]">
            <img
              src="/images/card-inspiration-blue.jpg"
              alt="Designer sketching at a studio desk in cobalt light"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a3c7c]/55 via-transparent to-[#072b59]/85" />

            <h3 className="relative z-10 font-editorial text-[36px] leading-[1.08] text-white sm:text-[42px]">
              Inspiration
            </h3>

            <p className="relative z-10 font-ui mt-12 text-[13px] sm:text-[14px] leading-[1.52] text-white/95">
              I only take on graphic projects where I can pour genuine curiosity into
              typography, tactile paper, packaging structure, and story.
            </p>
          </div>
        </div>

        {/* Right Card: Quality */}
        <div className="md:col-span-4 md:mt-2">
          <div className="sketch-card flex min-h-[340px] flex-col justify-between p-8 sm:min-h-[380px]">
            <h3 className="font-editorial text-[36px] leading-[1.08] text-black sm:text-[42px]">
              Quality
            </h3>

            <p className="font-ui mt-12 text-[13px] sm:text-[14px] leading-[1.52] text-charcoal">
              I approach each identity, book spread, or label as if it were my own,
              obsessing over kerning, print tolerances, and lasting craft.
            </p>
          </div>
        </div>
      </div>

      {/* Compact 2-Year Experience Timeline & Toolkit Strip */}
      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-black/15 pt-10 lg:grid-cols-12 lg:items-center">
        <div className="space-y-4 lg:col-span-7">
          <p className="font-ui text-[13px] text-charcoal">
            (2 Years Experience Timeline — {DESIGNER_PROFILE.fullName})
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {DESIGNER_PROFILE.timeline.map((item) => (
              <div key={item.period} className="space-y-1">
                <p className="font-editorial text-[22px] leading-[1.2] text-black">
                  {item.title}
                </p>
                <p className="font-ui text-[12px] text-charcoal/80">({item.period})</p>
                <p className="font-ui text-[13px] leading-[1.48] text-charcoal">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 lg:col-span-5">
          <p className="font-ui text-[13px] text-charcoal">(Design Toolkit)</p>
          <div className="flex flex-wrap gap-2">
            {DESIGNER_PROFILE.toolkit.map((tool) => (
              <span
                key={tool}
                className="rounded-[3000px] border-[1.5px] border-dusty-sky bg-white px-3.5 py-1.5 font-ui text-[12px] text-black"
              >
                {tool}
              </span>
            ))}
          </div>
          <div>
            <button
              type="button"
              onClick={onOpenAddWork}
              className="coral-inline-link bg-transparent p-0 font-ui text-[13px]"
            >
              add a recent project to showcase these 2 years →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
