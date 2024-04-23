import Link from "next/link";
import { getTextAlign } from "@utils/helper";

export const BadgeGroup = ({ alignment, link, children, className }) => {
    const Element = link ? Link : "div";
    const href =
        typeof link === "string" ? link : link?.href != null ? link.href : "";
    const alignClass = getTextAlign(alignment);

    return (
        <div className="badge-group w-full">
            <Element
                href={href}
                className={`badge-group--container ${
                    link ? "badge-group--link" : ""
                } ${alignClass ? alignClass : ""} ${className && className}`}
            >
                {children}
            </Element>
        </div>
    );
};