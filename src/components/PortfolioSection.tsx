import React, { useMemo, useState } from 'react';
import { DESIGNER_PROFILE } from '../data/works';
import { WORK_CATEGORIES, type PortfolioWork, type WorkCategory } from '../types/work';
import { WorkCard } from './WorkCard';
import { AddWorkSlotCard } from './AddWorkSlotCard';
import { EditorialParens, GalleryContinuousThread } from './Squiggles';

interface PortfolioSectionProps {
  works: PortfolioWork[];
  hasCustomEdits: boolean;
  onSelectWork: (work: PortfolioWork) => void;
  onEditWork: (work: PortfolioWork) => void;
  onOpenAddWork: () => void;
  onExportJson: () => void;
  onResetDefaults: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  works,
  hasCustomEdits,
  onSelectWork,
  onEditWork,
  onOpenAddWork,
  onExportJson,
  onResetDefaults,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | WorkCategory>('All');

  const filteredWorks = useMemo(() => {
    if (activeCategory === 'All') return works;
    return works.filter((w) => w.category === activeCategory);
  }, [works, activeCategory]);

  const nextSlotNumber = `${String(works.length + 1).padStart(2, '0')}+`;

  const getLayoutMeta = (idx: number): { variant: 'large' | 'compact'; staggerClass: string } => {
    const slot = idx % 4;
    if (slot === 0) {
      return { variant: 'large', staggerClass: 'md:col-span-7 md:mt-0' };
    }
    if (slot === 1) {
      return { variant: 'compact', staggerClass: 'md:col-span-5 md:mt-24' };
    }
    if (slot === 2) {
      return { variant: 'compact', staggerClass: 'md:col-span-5 md:mt-4' };
    }
    return { variant: 'large', staggerClass: 'md:col-span-7 md:mt-16' };
  };

  return (
    <section
      id="work"
      className="relative mx-auto max-w-[1180px] px-6 pt-16 pb-20 sm:px-10 md:pt-24 md:pb-24"
    >
      {/* Scattered Header matching Reference Image 2 */}
      <div className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-6 sm:gap-12">
            <span className="font-editorial pt-3 text-[18px] text-charcoal">
              01
            </span>

            <h2 className="font-editorial text-[42px] leading-[1.02] text-black sm:text-[62px] lg:text-[72px]">
              <span className="flex flex-wrap gap-x-8 sm:gap-x-14">
                <span>My</span>
                <span>selected</span>
              </span>
              <span className="mt-1 block pl-[28%] sm:pl-[38%]">
                <em>works</em>
              </span>
            </h2>
          </div>

          <div className="lg:pr-8">
            <EditorialParens>
              <p className="m-0">Gallery of dummy &amp;</p>
              <p className="m-0">live graphic projects</p>
            </EditorialParens>
          </div>
        </div>

        {/* Filter Pills + Manage / Add Work Bar */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-b border-black/10 pb-6 md:flex-row md:items-center">
          <div
            role="tablist"
            aria-label="Filter projects by graphic design discipline"
            className="flex flex-wrap items-center gap-2"
          >
            {(['All', ...WORK_CATEGORIES] as const).map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
                  className={`pill-chip ${active ? 'pill-chip-active' : ''}`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenAddWork}
              className="pill-cta px-5 py-2.5 text-[12px]"
            >
              + ADD WORK
            </button>
            <button
              type="button"
              onClick={onExportJson}
              className="pill-chip"
              title="Download works JSON to paste into src/data/works.ts"
            >
              Export JSON
            </button>
            {hasCustomEdits && (
              <button
                type="button"
                onClick={onResetDefaults}
                className="coral-inline-link bg-transparent px-1 font-ui text-[13px]"
              >
                reset placeholders
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Staggered Asymmetric Varying-Size Gallery + Continuous Hand-Drawn Thread */}
      <div className="relative mt-14 sm:mt-16">
        <GalleryContinuousThread className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[680px] -translate-x-1/2 opacity-90 md:block" />

        <div className="relative z-10 grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-x-10 md:gap-y-16">
          {filteredWorks.map((work, idx) => {
            const globalIndex = works.findIndex((item) => item.id === work.id);
            const indexNumber = String((globalIndex >= 0 ? globalIndex : idx) + 1).padStart(2, '0');
            const { variant, staggerClass } = getLayoutMeta(idx);
            return (
              <WorkCard
                key={work.id}
                work={work}
                indexNumber={indexNumber}
                variant={variant}
                staggerClass={staggerClass}
                onSelect={onSelectWork}
                onEdit={onEditWork}
              />
            );
          })}

          {/* Open Folio Slot Card to Add Pawankumar's Real Work */}
          <div className="md:col-span-5 md:mt-10">
            <AddWorkSlotCard nextIndex={nextSlotNumber} onAddClick={onOpenAddWork} />
          </div>

          {/* Bottom-Left Social & Quick-Add Overlapping Circles matching Reference Image 3 */}
          <div className="md:col-span-7 md:self-end md:pb-6">
            <div className="inline-flex flex-col items-start gap-4">
              <p className="font-ui text-[13px] leading-[1.4] text-charcoal">
                You can add new work or see
                <br />
                Pawankumar’s other works here
              </p>

              <div className="flex items-center -space-x-2">
                <button
                  type="button"
                  onClick={onOpenAddWork}
                  title="Add new graphic design work"
                  aria-label="Add new graphic design work"
                  className="circle-ink-btn relative z-10 h-[52px] w-[52px] font-ui text-[22px] font-normal hover:z-20"
                >
                  +
                </button>

                <a
                  href={DESIGNER_PROFILE.socials[1].url}
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                  aria-label="Instagram"
                  className="circle-ink-btn relative z-10 h-[52px] w-[52px] hover:z-20"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                <a
                  href={DESIGNER_PROFILE.socials[0].url}
                  target="_blank"
                  rel="noreferrer"
                  title="Behance"
                  aria-label="Behance"
                  className="circle-ink-btn relative z-10 h-[52px] w-[52px] font-ui text-[13px] font-semibold no-underline hover:z-20"
                >
                  Bē
                </a>
              </div>
            </div>
          </div>
        </div>

        {filteredWorks.length === 0 && (
          <p className="mt-8 font-ui text-[14px] text-charcoal">
            (No works in “{activeCategory}” yet — click the open slot card or + button to add one!)
          </p>
        )}
      </div>
    </section>
  );
};
