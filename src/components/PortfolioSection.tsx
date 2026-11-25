import React, { useMemo, useState } from 'react';
import { WORK_CATEGORIES, type PortfolioWork, type WorkCategory } from '../types/work';
import { WorkCard } from './WorkCard';
import { AddWorkSlotCard } from './AddWorkSlotCard';
import { PortfolioConnectorA, PortfolioConnectorB } from './Squiggles';

interface PortfolioSectionProps {
  works: PortfolioWork[];
  hasCustomEdits: boolean;
  onSelectWork: (work: PortfolioWork) => void;
  onEditWork: (work: PortfolioWork) => void;
  onOpenAddWork: () => void;
  onExportJson: () => void;
  onResetDefaults: () => void;
}

const STAGGER_CLASSES = [
  'md:col-span-6 md:mt-0',
  'md:col-span-6 md:mt-20',
  'md:col-span-6 md:-mt-4',
  'md:col-span-6 md:mt-16',
  'md:col-span-6 md:mt-2',
  'md:col-span-6 md:mt-20',
];

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

  return (
    <section
      id="work"
      className="relative mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24"
    >
      {/* Section Header */}
      <div className="relative md:pl-12">
        <span
          aria-hidden="true"
          className="font-editorial mb-3 block text-[22px] leading-none text-black md:absolute md:top-2 md:left-0 md:mb-0"
        >
          01
        </span>

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="font-editorial text-[36px] leading-[1.04] text-black sm:text-[48px]">
              Selected <em>works</em> &amp; <em>placeholders</em>
            </h2>
            <p className="mt-3 max-w-[560px] font-ui text-[14px] leading-[1.48] text-charcoal">
              (Sample graphic design pieces hold space until Pawankumar adds his live work.
              Click any card to read the full brief, replace it, or add a new project below.)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenAddWork}
              className="pill-cta px-6 py-3 text-[13px]"
            >
              + ADD WORK
            </button>

            <button
              type="button"
              onClick={onExportJson}
              className="pill-chip"
              title="Download portfolio works JSON to save permanently in src/data/works.ts"
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

        {/* Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter projects by graphic design discipline"
          className="mt-8 flex flex-wrap items-center gap-2.5"
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
      </div>

      {/* Staggered Asymmetric Showcase Grid with Hand-Drawn SVG Connectors */}
      <div className="relative mt-14 sm:mt-16">
        <PortfolioConnectorA className="pointer-events-none absolute top-[140px] left-1/2 hidden w-[220px] -translate-x-1/2 opacity-85 md:block" />
        <PortfolioConnectorB className="pointer-events-none absolute top-[620px] left-1/2 hidden w-[230px] -translate-x-1/2 opacity-85 md:block" />

        <div className="relative z-10 grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-x-10 md:gap-y-14">
          {filteredWorks.map((work, idx) => {
            const globalIndex = works.findIndex((item) => item.id === work.id);
            const indexNumber = String((globalIndex >= 0 ? globalIndex : idx) + 1).padStart(2, '0');
            return (
              <WorkCard
                key={work.id}
                work={work}
                indexNumber={indexNumber}
                staggerClass={STAGGER_CLASSES[idx % STAGGER_CLASSES.length]}
                onSelect={onSelectWork}
                onEdit={onEditWork}
              />
            );
          })}

          {/* Dedicated Place to Add His Work right in the staggered showcase */}
          <div className={STAGGER_CLASSES[filteredWorks.length % STAGGER_CLASSES.length]}>
            <AddWorkSlotCard nextIndex={nextSlotNumber} onAddClick={onOpenAddWork} />
          </div>
        </div>

        {filteredWorks.length === 0 && (
          <p className="mt-8 font-ui text-[14px] text-charcoal">
            (No works in “{activeCategory}” yet — use the open slot card above to add one!)
          </p>
        )}
      </div>
    </section>
  );
};
