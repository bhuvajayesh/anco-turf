"use client";

export interface PageHeaderProps {
  title: React.ReactNode; // <- allow string or JSX
  className?: string;
}

export default function SectionTitle({
  title,
}: PageHeaderProps) {
  return (
    <>
      <h3 className="text-3xl 2xl:text-4xl leading-none tracking-[0.7px]">
        {title}
      </h3>
    </>
  );
}
