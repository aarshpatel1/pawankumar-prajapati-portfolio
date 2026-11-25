import React from 'react';

interface SquiggleProps {
  className?: string;
  active?: boolean;
}

/**
 * Giant ultra-thin editorial parentheses wrapping small Manrope text blocks,
 * matching the signature typography detail across all 5 reference screenshots.
 */
interface EditorialParensProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export const EditorialParens: React.FC<EditorialParensProps> = ({
  children,
  light = false,
  className = '',
}) => {
  const strokeColor = light ? '#ffffff' : '#000000';
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="18"
        height="58"
        viewBox="0 0 18 58"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M15 2 C 3 16, 3 42, 15 56"
          stroke={strokeColor}
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
      <div
        className={`font-ui text-[12px] sm:text-[13px] leading-[1.35] ${
          light ? 'text-white/90' : 'text-black'
        }`}
      >
        {children}
      </div>
      <svg
        width="18"
        height="58"
        viewBox="0 0 18 58"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M3 2 C 15 16, 15 42, 3 56"
          stroke={strokeColor}
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

/**
 * Carefully routed continuous hero rope/thread:
 * - Enters top-center in the open gap between "Hey there!" and "I'm Pawankumar."
 * - Sweeps into the open left pocket beside "Two years shaping brands" with a light loop
 * - Glides cleanly across the middle gutter between "to appear" and the parentheses
 * - Descends through the negative space between "in print & life" and "as unique"
 * - Passes behind the SEE PORTFOLIO button and loops neatly into Section 01.
 */
export const HeroContinuousThread: React.FC<SquiggleProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1040 760"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      pathLength={1}
      d="M 416 0 C 424 72, 412 134, 344 164 C 282 190, 212 152, 236 132 C 260 112, 316 156, 294 214 C 274 268, 466 258, 496 312 C 526 368, 452 394, 434 454 C 418 508, 444 574, 442 642 C 440 690, 414 714, 456 718 C 492 722, 494 690, 448 692 C 402 694, 414 736, 512 760"
      stroke="#000000"
      strokeOpacity="0.68"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="thread-draw-on-load"
    />
  </svg>
);

/**
 * Gallery continuous thread weaving between staggered cards with a delicate loop.
 */
export const GalleryContinuousThread: React.FC<SquiggleProps> = ({
  className = '',
  active = false,
}) => (
  <svg
    viewBox="0 0 720 960"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      pathLength={1}
      d="M 380 12 C 420 92, 464 152, 408 188 C 352 224, 304 242, 286 286 C 266 334, 356 346, 368 408 C 378 460, 324 446, 336 420 C 348 394, 412 456, 474 492 C 534 528, 398 632, 326 672 C 264 706, 206 756, 256 802 C 294 838, 312 812, 284 794 C 242 768, 268 886, 310 952"
      stroke="#000000"
      strokeOpacity="0.72"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`thread-draw-scroll ${active ? 'thread-draw-scroll-active' : ''}`}
    />
  </svg>
);

/**
 * White continuous thread sweeping through the Cobalt-Blue Section 02.
 */
export const BlueSectionWhiteThread: React.FC<SquiggleProps> = ({
  className = '',
  active = false,
}) => (
  <svg
    viewBox="0 0 540 580"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      pathLength={1}
      d="M 290 0 C 376 62, 402 152, 340 198 C 276 244, 210 248, 218 326 C 224 388, 178 404, 152 380 C 128 358, 166 330, 198 358 C 234 390, 146 476, 38 576"
      stroke="#ffffff"
      strokeOpacity="0.88"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`thread-draw-scroll ${active ? 'thread-draw-scroll-active' : ''}`}
    />
  </svg>
);

export const HeroUnderlineCurve: React.FC<SquiggleProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 260 40"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M8 24 C 66 8, 126 32, 188 18 C 220 11, 240 16, 254 20"
      stroke="#000000"
      strokeWidth="1.35"
      strokeLinecap="round"
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
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AddWorkSketchCircle: React.FC<SquiggleProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M62 10 C 92 9, 111 31, 110 60 C 109 91, 86 110, 58 110 C 29 110, 10 88, 11 58 C 12 29, 32 11, 59 10"
      stroke="#000000"
      strokeWidth="1.35"
      strokeLinecap="round"
    />
    <path
      d="M60 38 C 59 51, 60 68, 60 82"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M38 60 C 52 59, 68 60, 82 60"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
