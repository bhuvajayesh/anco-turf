import Link from "next/link";

type Crumb = {
    label: string;
    href?: string;
};

type BreadcrumbProps = {
    title: string;
    items: Crumb[];
};

export default function Breadcrumb({ title, items }: BreadcrumbProps) {
    return (
        <div className="container mx-auto">
            <nav className="flex items-center text-sm leading-6">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <span key={index} className="flex items-center">
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-[#5E9831]"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span
                                    className={isLast ? "text-[#5E9831]" : ""}
                                >
                                    {item.label}
                                </span>
                            )}

                            {!isLast && (
                                <span className="mx-2">/</span>
                            )}
                        </span>
                    );
                })}
            </nav>
        </div>
    );
}
