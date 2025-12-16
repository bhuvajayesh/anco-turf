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
      <h3 className="text-4xl md:text-2xl xl:text-3xl 2xl:text-4xl leading-[46px] md:leading-none tracking-[0.7px]">
        {title}
      </h3>
    </>
  );
}
