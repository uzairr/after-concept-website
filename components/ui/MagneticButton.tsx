"use client";



export function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
