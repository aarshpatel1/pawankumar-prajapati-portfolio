import React, { useEffect } from 'react';
import type { PortfolioWork } from '../types/work';

interface WorkDetailModalProps {
  work: PortfolioWork | null;
  indexNumber: string;
  onClose: () => void;
  onEdit: (work: PortfolioWork) => void;
  onDelete: (workId: string) => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({
  work,
  indexNumber,
  onClose,
  onEdit,
  onDelete,
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && work) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} case study`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-warm-paper/90 p-4 sm:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="sketch-card animate-modal-enter relative my-auto max-h-[90vh] w-full max-w-[820px] overflow-y-auto p-7 sm:p-[48px]"
      >
        {/* Top Meta Bar */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-editorial text-[24px] leading-none text-black">
              {indexNumber}
            </span>
            <span className="font-ui text-[13px] text-charcoal">
              ({work.category} · {work.year})
            </span>
            <span className="rounded-[3000px] border-[1.5px] border-dusty-sky bg-warm-paper px-3 py-1 font-ui text-[12px] text-charcoal">
              {work.isPlaceholder ? 'Placeholder Work' : 'Live Portfolio Entry'}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-[40px] w-[40px] shrink-0 cursor-pointer items-center justify-center rounded-[3000px] border-[1.5px] border-black bg-white font-ui text-[18px] leading-none text-black shadow-[4px_-4px_0px_0px_#333333] transition-transform hover:-translate-x-[1px] hover:translate-y-[1px]"
          >
            ×
          </button>
        </div>

        {/* Circular Thumbnail + Editorial Title */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative shrink-0 self-start">
            <div className="h-[156px] w-[156px] overflow-hidden rounded-[120px] border-[1.5px] border-black bg-warm-paper sm:h-[180px] sm:w-[180px]">
              <img
                src={work.imageUrl}
                alt={work.title}
                className="h-full w-full object-cover"
              />
            </div>
            {work.awardBadge && (
              <span
                title={work.awardLabel || 'Featured Graphic Design Work'}
                className="absolute right-0 bottom-0 flex h-[34px] w-[34px] items-center justify-center rounded-[120px] border-[1.5px] border-black bg-white text-[15px]"
              >
                🏆
              </span>
            )}
          </div>

          <div>
            <h2 className="font-editorial text-[36px] leading-[1.06] text-black sm:text-[46px]">
              {work.title}
            </h2>
            <p className="mt-3 font-ui text-[14px] text-charcoal">
              <strong className="font-medium text-black">Client:</strong> {work.client} ·{' '}
              <strong className="font-medium text-black">Role:</strong> {work.role}
            </p>
            {work.externalLink && (
              <p className="mt-2 font-ui text-[14px]">
                <a
                  href={work.externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="coral-inline-link"
                >
                  view full presentation ↗
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Story */}
        <div className="mt-8 space-y-4">
          <p className="font-editorial text-[24px] leading-[1.35] text-black">
            “{work.summary}”
          </p>
          <p className="font-ui text-[15px] leading-[1.6] text-charcoal">
            {work.story}
          </p>
        </div>

        {/* Deliverables */}
        {work.deliverables.length > 0 && (
          <div className="mt-8">
            <p className="mb-3 font-ui text-[12px] uppercase tracking-[0.06em] text-charcoal">
              Deliverables
            </p>
            <div className="flex flex-wrap gap-2">
              {work.deliverables.map((item) => (
                <span
                  key={item}
                  className="rounded-[3000px] border-[1.5px] border-black bg-warm-paper px-4 py-1.5 font-ui text-[13px] text-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Replace / Edit / Remove Controls */}
        <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-dusty-sky/60 pt-6">
          <button
            type="button"
            onClick={() => {
              onClose();
              onEdit(work);
            }}
            className="pill-cta px-7 py-3.5 text-[13px]"
          >
            {work.isPlaceholder ? 'REPLACE WITH REAL WORK' : 'EDIT PROJECT'}
          </button>

          <button
            type="button"
            onClick={() => {
              onDelete(work.id);
              onClose();
            }}
            className="coral-inline-link bg-transparent p-1 font-ui text-[14px]"
          >
            remove from folio
          </button>
        </div>
      </div>
    </div>
  );
};
