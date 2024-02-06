import React from "react";

export const ExternalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        {...props}
    >
        <g fill="currentColor">
            <path d="M1 2.65C1 1.739 1.739 1 2.65 1H5.5a.5.5 0 0 0 0-1H2.65A2.65 2.65 0 0 0 0 2.65v6.7A2.65 2.65 0 0 0 2.65 12h6.7A2.65 2.65 0 0 0 12 9.35V6.5a.5.5 0 0 0-1 0v2.85A1.65 1.65 0 0 1 9.35 11h-6.7A1.65 1.65 0 0 1 1 9.35v-6.7Z" />
            <path d="M8.5 0a.5.5 0 0 0 0 1h1.793L5.646 5.646a.5.5 0 1 0 .708.708L11 1.707V3.5a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 10.5 0h-2Z" />
        </g>
    </svg>
);
