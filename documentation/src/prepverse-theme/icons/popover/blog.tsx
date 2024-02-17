import clsx from "clsx";
import React from "react";

export const BlogIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
        className={clsx(
            "dark:text-refine-yellow text-refine-orange",
            props.className,
        )}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="m15.728 9.576l-1.414-1.414L5 17.476v1.414h1.414zm1.414-1.414l1.414-1.414l-1.414-1.414l-1.414 1.414zm-9.9 12.728H3v-4.243L16.435 3.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414z"
            clipRule="evenodd"
        />
    </svg>
);
