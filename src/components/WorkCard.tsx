import React from 'react';
import type { PortfolioWork } from '../types/work';

interface WorkCardProps {
  work: PortfolioWork;
  indexNumber: string;
  staggerClass?: string;
  onSelect: (work: PortfolioWork) => void;
  onEdit: (work: PortfolioWork) => void;
}

function renderMixedTitle(title: string, italicWord?: string) {
  if (!italicWord || !title.includes(italicWord)) {
    const words = title.split(' ');
    if (words.length <= 1) return title;
    const last = words.pop();
    return (
      <>
        {words.join(' ')} <em>{last}</em>
      </>
    );
  }
  const idx = title.indexOf(italicWord);
  const before = title.slice(0, idx);
  const after = title.slice(idx + italicWord.length);
  return (
    <>
      {before}
      <em>{italicWord}</em>
      {after}
    </>
  );
}

export const WorkCard: React.FC<WorkCardProps> = ({
  work,
  indexNumber,
  staggerClass = '',
  onSelect,
  onEdit,
}) => {
  return (
    <article className={`relative md:pl-12 ${staggerClass}`}>
      {/* Floating Section Index Marker left of card */}
      <span
        aria-hidden="true"
        className="font-editorial mb-2 block text-[22px] leading-none text-black md:absolute md:top-10 md:left-0 md:mb-0"
      >
        {indexNumber}
      </span>

      <div
        onClick={() => onSelect(work)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(work);
          }
        }}
        role="button"
        tabIndex={0}
        className="sketch-card sketch-card-interactive cursor-pointer p-7 sm:p-[48px]"
      >
        {/* Top Circular Thumbnail + Trophy Badge */}
        <div className="mb-7 flex items-start justify-between gap-4">
          <div className="relative inline-block">
            <div className="h-[124px] w-[124px] overflow-hidden rounded-[120px] border-[1.5px] border-black/15 bg-warm-paper sm:h-[144px] sm:w-[144px]">
              <img
                src={work.imageUrl}
                alt={work.title}
                className={`h-full w-full object-cover ${
                  work.keepColorInPreview ? '' : 'sketch-photo-muted'
                }`}
              />
            </div>

            {work.awardBadge && (
              <span
                title={work.awardLabel || 'Featured Graphic Design Work'}
                className="absolute right-0 bottom-0 flex h-[30px] w-[30px] items-center justify-center rounded-[120px] border-[1.5px] border-black bg-white text-[14px] leading-none"
              >
                🏆
              </span>
            )}
          </div>

          <div className="flex flex-col items-end gap-2 text-right">
            <span className="rounded-[3000px] border-[1.5px] border-dusty-sky bg-warm-paper px-3 py-1 font-ui text-[12px] text-charcoal">
              {work.category}
            </span>
            <span className="font-ui text-[12px] text-charcoal">
              {work.year} · {work.isPlaceholder ? 'Dummy Work' : 'Live Project'}
            </span>
          </div>
        </div>

        {/* Heading in Simeiz 30px */}
        <h3 className="font-editorial text-[26px] leading-[1.33] text-black sm:text-[30px]">
          {renderMixedTitle(work.title, work.italicWord)}
        </h3>

        {/* Client / Role Subtitle */}
        <p className="mt-1 font-ui text-[12px] text-charcoal/80">
          ({work.client} — {work.role})
        </p>

        {/* Short Description in Manrope 14px */}
        <p className="mt-4 font-ui text-[14px] leading-[1.5] text-charcoal">
          {work.summary}
        </p>

        {/* Inline Coral Links */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5 font-ui text-[14px]">
          <span className="coral-inline-link">view case study →</span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(work);
            }}
            className="coral-inline-link bg-transparent p-0 font-ui text-[13px]"
          >
            {work.isPlaceholder ? 'replace placeholder' : 'edit work'}
          </button>
        </div>
      </div>
    </article>
  );
};
