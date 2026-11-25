import React from 'react';

interface SquiggleProps {
  className?: string;
}

export const HeroSquiggleLoop: React.FC<SquiggleProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 260 110"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M8 72 C 44 18, 96 14, 118 52 C 134 80, 92 98, 82 70 C 70 36, 134 12, 186 38 C 218 54, 236 42, 252 24"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeroUnderlineCurve: React.FC<SquiggleProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 320 42"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M6 26 C 68 8, 128 36, 194 20 C 242 9, 282 14, 314 22"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PortfolioConnectorA: React.FC<SquiggleProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 220 140"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M14 18 C 78 12, 92 64, 58 84 C 30 100, 22 64, 58 58 C 118 48, 162 96, 206 124"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PortfolioConnectorB: React.FC<SquiggleProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 130"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M222 14 C 156 26, 144 82, 178 96 C 204 106, 206 68, 168 62 C 110 52, 62 92, 16 118"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SectionFlowSquiggle: React.FC<SquiggleProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 420 76"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M8 44 C 76 12, 128 66, 198 38 C 236 22, 224 62, 254 58 C 296 52, 336 16, 412 28"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FooterSignOffSquiggle: React.FC<SquiggleProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 180 48"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M6 34 C 34 10, 62 10, 74 28 C 82 40, 106 8, 134 22 C 150 30, 162 20, 174 14"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AddWorkSketchCircle: React.FC<SquiggleProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 132 132"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M68 8 C 102 7, 125 32, 124 66 C 123 102, 96 124, 64 124 C 30 124, 8 98, 9 64 C 10 30, 34 10, 65 9"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M66 42 C 65 56, 66 74, 66 90"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M42 66 C 58 65, 74 66, 90 66"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M94 24 C 106 20, 114 28, 110 38"
      stroke="#81aed9"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
