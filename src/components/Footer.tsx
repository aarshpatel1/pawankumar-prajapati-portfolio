import React from 'react';
import { DESIGNER_PROFILE } from '../data/works';

interface FooterProps {
  onOpenAddWork: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAddWork }) => {
  return (
    <footer className="mx-auto max-w-[1180px] px-6 pt-6 pb-14 sm:px-10">
      <div className="flex flex-col justify-between gap-6 border-t border-black/15 pt-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-editorial text-[24px] leading-tight text-black">
            Pawankumar <em>Prajapati</em>
          </p>
          <p className="mt-1 font-ui text-[13px] text-charcoal">
            ({DESIGNER_PROFILE.role} · {DESIGNER_PROFILE.experienceHeadline} · ©{' '}
            {new Date().getFullYear()})
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-ui text-[14px]">
          <a href="#work" className="coral-inline-link">
            works
          </a>
          <a href="#experience" className="coral-inline-link">
            craft
          </a>
          <a href="#principles" className="coral-inline-link">
            principles
          </a>
          <button
            type="button"
            onClick={onOpenAddWork}
            className="coral-inline-link bg-transparent p-0 font-ui text-[14px]"
          >
            + add work
          </button>
          <a href="#contact" className="coral-inline-link">
            contact
          </a>
        </div>
      </div>
    </footer>
  );
};
