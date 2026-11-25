import React from 'react';
import type { PortfolioWork } from '../types/work';

interface WorkCardProps {
  work: PortfolioWork;
  indexNumber: string;
  variant: 'large' | 'compact';
  staggerClass?: string;
  onSelect: (work: PortfolioWork) => void;
  onEdit: (work: PortfolioWork) => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  work,
  indexNumber,
  variant,
  staggerClass = '',
  onSelect,
  onEdit,
}) => {
  const isLarge = variant === 'large';

  return (
    <article className={staggerClass}>
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
        className={`sketch-card sketch-card-interactive group cursor-pointer text-center ${
          isLarge
            ? 'w-full px-7 py-10 sm:px-12 sm:py-14'
            : 'mx-auto w-full max-w-[300px] px-6 py-8 sm:px-8 sm:py-10'
        }`}
      >
        {/* Centered Circular Thumbnail + Floating Trophy Badge */}
        <div className="relative mx-auto inline-block">
          <div
            className={`overflow-hidden rounded-full bg-warm-paper ${
              isLarge
                ? 'h-[190px] w-[190px] sm:h-[240px] sm:w-[240px]'
                : 'h-[116px] w-[116px] sm:h-[132px] sm:w-[132px]'
            }`}
          >
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
              title={work.awardLabel || 'Featured Graphic Design Piece'}
              className={`absolute right-0 bottom-1 flex items-center justify-center rounded-full border border-black/15 bg-white leading-none shadow-sm ${
                isLarge ? 'h-[40px] w-[40px] text-[18px]' : 'h-[30px] w-[30px] text-[14px]'
              }`}
            >
              🏆
            </span>
          )}
        </div>

        {/* Centered Italic Index Marker (01, 02...) matching Reference Images 2 & 3 */}
        <p className="font-editorial-italic mt-6 text-[13px] text-charcoal">
          {indexNumber}
        </p>

        {/* Centered Project Title in Simeiz */}
        <h3
          className={`font-editorial mt-1.5 leading-[1.12] text-black ${
            isLarge ? 'text-[32px] sm:text-[42px]' : 'text-[24px] sm:text-[28px]'
          }`}
        >
          {work.title}
        </h3>

        {/* Centered Short Description in Manrope */}
        <p
          className={`mx-auto mt-3 font-ui text-[#333333] ${
            isLarge
              ? 'max-w-[360px] text-[14px] leading-[1.45]'
              : 'max-w-[230px] text-[12px] sm:text-[13px] leading-[1.4]'
          }`}
        >
          {work.summary}
        </p>

        {/* Subtle Placeholder Badge + Inline Coral Edit Action */}
        <div className="mt-5 flex items-center justify-center gap-4 text-[12px] font-ui">
          <span className="text-charcoal/70">
            {work.category} · {work.isPlaceholder ? 'Placeholder' : work.year}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(work);
            }}
            className="coral-inline-link bg-transparent p-0 font-ui text-[12px]"
          >
            {work.isPlaceholder ? 'replace' : 'edit'}
          </button>
        </div>
      </div>
    </article>
  );
};
