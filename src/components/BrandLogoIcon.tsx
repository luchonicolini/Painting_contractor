import React from 'react';

interface BrandLogoIconProps {
  className?: string;
}

/**
 * Custom bespoke architectural painting mark for El Palmar Painting & Services.
 * Replaces generic tech/real-estate house icons with an authentic craftsman roller
 * applying fresh architectural coats.
 */
export const BrandLogoIcon: React.FC<BrandLogoIconProps> = ({ className = "w-5 h-5" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Precision Paint Roller Cylinder with lacquer coat fill */}
      <rect
        x="3"
        y="3.5"
        width="13"
        height="4.6"
        rx="1.5"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      {/* Steel Frame wire */}
      <path
        d="M16 5.8h2.5a1.5 1.5 0 0 1 1.5 1.5v2.2a1.5 1.5 0 0 1-1.5 1.5H11a1.5 1.5 0 0 0-1.5 1.5V14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Craftsman handle grip */}
      <rect
        x="8"
        y="14"
        width="3"
        height="5.5"
        rx="1"
        fill="currentColor"
      />
      {/* Architectural fresh paint coating descending from the roller */}
      <path
        d="M5.2 8.1v3.5M8.8 8.1v5.2M12.4 8.1v2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
};
