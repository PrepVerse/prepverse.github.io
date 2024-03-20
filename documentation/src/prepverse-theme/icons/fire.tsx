import React, { SVGProps } from "react";

export const FireIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 384 511.4"
        fill=""
        {...props}
    >
        <defs>
            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="163.52" y1="286.47" x2="163.52" y2="500.71">
                <stop offset="0" stopColor="#FB6404"/>
                <stop offset="1" stopColor="#F2BE10"/>
            </linearGradient>
        </defs>
        <path
            fill="#E20919"
            fillRule="evenodd"
            d="M77.46 228.43C65.33 119.85 128.78 43.48 247.72 0c-72.85 94.5 62.09 196.88 69.53 295.03 17.44-29.75 27.34-69.48 29.3-122.55 89.18 139.92 15.25 368.59-181.02 335.73-18.02-3.01-35.38-8.7-51.21-17.17C42.76 452.8 0 369.53 0 290c0-50.69 21.68-95.95 49.74-131.91 3.75 35.23 11.73 61.51 27.72 70.34z"
            clipRule="evenodd"
        />
        <path
            className="fire-animation"
            fill="url(#a)"
            d="M139.16 372.49c-21.83-57.66-18.81-150.75 42.33-183.41.43 107.03 103.57 120.64 84.44 234.9 17.64-20.39 26.51-53.02 28.1-78.75 27.96 65.38 6.04 117.72-33.81 144.37-121.15 81-225.48-83.23-156.11-173.26 2.08 20.07 26.14 51.12 35.05 56.15z"
        />
        <style>{`
            @keyframes flicker {
                0% { opacity: 0.6; }
                50% { opacity: 1; }
                100% { opacity: 0.6; }
            }

            .fire-animation {
                animation: flicker 0.5s infinite alternate;
            }
        `}</style>
    </svg>
);
