import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'rectangular' | 'rounded' | 'circular' | 'text';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rounded',
  ...props
}) => {
  const variantClasses = {
    rectangular: 'rounded-none',
    rounded: 'rounded-2xl',
    circular: 'rounded-full',
    text: 'rounded-md h-4 w-full',
  }[variant];

  return (
    <div
      aria-hidden="true"
      className={`skeleton-shimmer border border-slate-200/50 ${variantClasses} ${className}`}
      {...props}
    />
  );
};
