import React from 'react';
import { AddWorkSketchCircle } from './Squiggles';

interface AddWorkSlotCardProps {
  nextIndex: string;
  onAddClick: () => void;
}

export const AddWorkSlotCard: React.FC<AddWorkSlotCardProps> = ({
  nextIndex,
  onAddClick,
}) => {
  return (
    <article className="relative md:pl-12">
      <span
        aria-hidden="true"
        className="font-editorial mb-2 block text-[22px] leading-none text-black md:absolute md:top-10 md:left-0 md:mb-0"
      >
        {nextIndex}
      </span>

      <div className="sketch-slot-card p-7 sm:p-[48px]">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div className="flex h-[124px] w-[124px] items-center justify-center rounded-[120px] bg-warm-paper sm:h-[144px] sm:w-[144px]">
            <AddWorkSketchCircle className="h-[116px] w-[116px]" />
          </div>

          <span className="rounded-[3000px] border-[1.5px] border-dusty-sky bg-warm-paper px-3 py-1 font-ui text-[12px] text-charcoal">
            Open Folio Slot
          </span>
        </div>

        <h3 className="font-editorial text-[26px] leading-[1.33] text-black sm:text-[30px]">
          Add <em>your next</em> design piece
        </h3>

        <p className="mt-3 font-ui text-[14px] leading-[1.5] text-charcoal">
          (Drop in logo concepts, packaging mockups, editorial spreads, or campaign posters.
          Entries appear immediately in this showcase and can be exported to code anytime.)
        </p>

        <div className="mt-7">
          <button
            type="button"
            onClick={onAddClick}
            className="pill-cta px-8 py-4 text-[13px]"
          >
            + ADD WORK TO PORTFOLIO
          </button>
        </div>
      </div>
    </article>
  );
};
