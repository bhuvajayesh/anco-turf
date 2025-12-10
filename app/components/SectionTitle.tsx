"use client";

interface PageHeaderProps {
  title: string; // main title
}

export default function PageTitle({
  title,
}: PageHeaderProps) {
  return (
    <>
      <h3 className="text-4xl leading-none tracking-[0.7px]">
        {title}
      </h3>
    </>
  );
}
