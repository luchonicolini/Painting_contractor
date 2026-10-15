import React from 'react';

interface BrandLogoIconProps {
  className?: string;
}

/**
 * Bespoke Palm Tree Mark for El Palmar Painting & Services.
 * Inspired directly by the iconic Florida Palm Tree:
 * - Characteristic natural trunk contour with ground baseline.
 * - Gracefully arching tropical palm fronds with smooth rounded curves.
 * - Perfectly balanced for high-contrast visibility at small and large sizes.
 */
export const BrandLogoIcon: React.FC<BrandLogoIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Ground Baseline */}
      <path d="M5 28.5H20.5" strokeWidth="2.5" />

      {/* Trunk (Natural curved dual-line trunk) */}
      <path d="M8.8 28.5C9.8 23 11 17 12.8 11.5" />
      <path d="M14.5 28.5C14.5 23 14 17 13.8 11.5" />

      {/* Top-Right Majestic Sweeping Frond */}
      <path d="M13.2 10.5C15.5 6.5 20.5 3 26.5 4.5C24 6.5 21 8.8 17.5 10.5" />

      {/* Top-Left Arching Frond */}
      <path d="M12.5 10C9.5 6.5 6 4 3 5.5C5.5 7.5 8 9.5 11.5 10.8" />

      {/* Mid-Left Drooping Frond */}
      <path d="M11 11.5C7.5 11.8 4.5 13.5 3.5 17.5C5.8 16 9 14.5 11.8 13.5" />

      {/* Mid-Right Sweeping Frond */}
      <path d="M14.5 11C18 11.2 23 12.5 27.5 15.5C24.5 16.5 20.8 16 17.5 14.5" />

      {/* Low-Right Cascade Frond */}
      <path d="M14 12.5C16.8 14.5 19.5 17.5 20.5 22.5C19.5 20 17.5 17.5 14 15.5" />
    </svg>
  );
};
