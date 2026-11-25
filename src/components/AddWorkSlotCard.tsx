import React, { useState } from 'react';
import { compressImageFile } from '../utils/workStorage';
import { AddWorkSketchCircle } from './Squiggles';

interface AddWorkSlotCardProps {
  nextIndex: string;
  onAddClick: () => void;
  onDropImage?: (dataUrl: string) => void;
}

export const AddWorkSlotCard: React.FC<AddWorkSlotCardProps> = ({
  nextIndex,
  onAddClick,
  onDropImage,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/') && onDropImage) {
      try {
        const dataUrl = await compressImageFile(file);
        onDropImage(dataUrl);
        return;
      } catch {
        // Fallback to opening empty modal
      }
    }
    onAddClick();
  };

  return (
    <article className="mx-auto w-full max-w-[310px]">
      <div
        role="button"
        tabIndex={0}
        onClick={onAddClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onAddClick();
          }
        }}
        className={`sketch-slot-card group cursor-pointer px-6 py-8 text-center sm:px-8 sm:py-10 ${
          isDragging ? 'border-cobalt-wash bg-white scale-[1.02]' : ''
        }`}
      >
        <div
          className={`mx-auto flex h-[116px] w-[116px] items-center justify-center rounded-full border-[1.5px] border-dashed bg-warm-paper transition-transform duration-300 group-hover:scale-105 sm:h-[132px] sm:w-[132px] ${
            isDragging ? 'border-black scale-105' : 'border-dusty-sky'
          }`}
        >
          <AddWorkSketchCircle className="h-[96px] w-[96px]" />
        </div>

        <p className="font-editorial-italic mt-6 text-[13px] text-charcoal">
          {nextIndex}
        </p>

        <h3 className="font-editorial mt-1.5 text-[26px] leading-[1.15] text-black sm:text-[28px]">
          {isDragging ? (
            <>
              Drop artwork <em>here</em>
            </>
          ) : (
            <>
              Add <em>your next</em> work
            </>
          )}
        </h3>

        <p className="mx-auto mt-3 max-w-[230px] font-ui text-[12px] sm:text-[13px] leading-[1.4] text-charcoal">
          Click or drag &amp; drop logos, packaging, print spreads, or posters right here.
        </p>

        <div className="mt-5">
          <span className="coral-inline-link font-ui text-[13px]">
            + add to portfolio →
          </span>
        </div>
      </div>
    </article>
  );
};
