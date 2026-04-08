import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      <div className="section-title__bar" />
    </div>
  );
}
