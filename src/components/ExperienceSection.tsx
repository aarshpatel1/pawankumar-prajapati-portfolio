import React from 'react';
import { BlueSectionWhiteThread, EditorialParens } from './Squiggles';

interface ExperienceSectionProps {
  onOpenAddWork: () => void;
}

const MARQUEE_CARDS = [
  'present brands to the world beautifully',
  'inspire tactile confidence',
  '2 years of graphic design craft',
];

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onOpenAddWork,
}) => {
  return (
    <section
      id="experience"
      className="relative mx-2 my-8 overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0d488f] via-[#094183] to-[#073d7c] text-white sm:mx-4 sm:rounded-[32px]"
    >
      {/* Seamless Cobalt Editorial Portrait on the right side matching Reference Image 4 */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <img
          src="/images/avatar-pawan-blue.jpg"
          alt="Editorial studio portrait of Pawankumar Prajapati"
          className="h-full w-full object-cover object-top [mask-image:linear-gradient(to_right,transparent_0%,black_32%,black_100%)]"
        />
      </div>

      {/* Continuous White 1.5px Thread sweeping through the blue canvas */}
      <BlueSectionWhiteThread className="pointer-events-none absolute top-0 left-[22%] hidden h-full w-[540px] opacity-90 md:block" />

      <div className="relative z-10 mx-auto max-w-[1160px] px-6 pt-16 pb-12 sm:px-10 md:pt-24 md:pb-16">
        {/* Scattered White Editorial Statement matching Reference Image 4 */}
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
            <span className="mt-2 block pl-[36%] sm:pl-[58%]">
              brands
            </span>
          </div>

          {/* Mobile portrait display */}
          <div className="mt-4 overflow-hidden rounded-[24px] lg:hidden">
            <img
              src="/images/avatar-pawan-blue.jpg"
              alt="Editorial studio portrait of Pawankumar Prajapati"
              className="h-[340px] w-full object-cover object-top"
            />
          </div>

          {/* Giant White Parentheses Note + Quick Coral Action */}
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

      {/* Bottom White Rounded Pill-Top Strips peeking up like Reference Image 4 */}
      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-4 pt-4 sm:grid-cols-3 sm:px-6">
        {MARQUEE_CARDS.map((phrase) => (
          <div
            key={phrase}
            className="rounded-t-[24px] border-t border-x border-dusty-sky bg-warm-paper px-6 py-5 text-center text-black sm:py-6"
          >
            <p className="font-editorial text-[22px] leading-[1.18] sm:text-[26px]">
              {phrase}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
