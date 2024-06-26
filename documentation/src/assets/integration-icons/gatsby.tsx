import * as React from "react";
import { SVGProps } from "react";

const SvgGatsby = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={64}
        height={64}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0ZM14.171 49.829c-4.8-4.8-7.314-11.2-7.314-17.372l24.914 24.686c-6.4-.229-12.8-2.514-17.6-7.314Zm23.315 6.628L7.543 26.514C10.057 15.314 20.114 6.857 32 6.857c8.457 0 15.771 4.114 20.343 10.286l-3.429 2.971C45.03 14.857 38.857 11.43 32 11.43c-8.914 0-16.457 5.714-19.429 13.714l26.286 26.286c6.629-2.286 11.657-8 13.257-14.858H41.143V32h16c0 11.886-8.457 21.943-19.657 24.457Z"
            fill="#639"
        />
    </svg>
);

export default SvgGatsby;
