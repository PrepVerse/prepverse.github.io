import { PageIcon } from "@site/src/refine-theme/icons/page";
import { ShareIcon } from "@site/src/refine-theme/icons/share";
import React from "react";
import { Examples } from "../types/examples";

export const SHOW_CASES: Examples = [
    {
        title: "Age Calculator",
        description:
            "Age Calculator is a simple app that calculates your age based on the year you were born.",
        image: "/examples/Age_Calculator.png",
        image2x: "/examples/Age_Calculator.png",
        buttons: [
            {
                text: "Demo",
                link: "https://akashsingh3031.github.io/Age-Calculator",
                icon: (props) => <ShareIcon {...props} />,
            },
        ],
        source: "https://github.com/AkashSingh3031/Age-Calculator",
    },
    {
        title: "CSS Variables With JS",
        description:
            "CSS Variables With JS Is A Simple App That Can Change Radius Of Image, Blur Effect On Image And Border Color Of Image.",
        image: "/examples/CSS_Variables_with_JS.png",
        image2x: "/examples/CSS_Variables_with_JS.png",
        buttons: [
            {
                text: "Demo",
                link: "https://akashsingh3031.github.io/CSS-Variables-with-JS",
                icon: (props) => <ShareIcon {...props} />,
            },
        ],
        source: "https://github.com/AkashSingh3031/CSS-Variables-with-JS",
    },
    {
        title: "Countdown Timer",
        description:
            "Countdown Timer Is A Simple App That Can Count Down From A Given Time.",
        image: "/examples/Countdown_Timer.png",
        image2x: "/examples/Countdown_Timer.png",
        buttons: [
            {
                text: "Demo",
                link: "https://akashsingh3031.github.io/Countdown-Timer",
                icon: (props) => <ShareIcon {...props} />,
            },
        ],
        source: "https://github.com/AkashSingh3031/Countdown-Timer",
    },
];

export const EXAMPLES: Examples = [
    {
        title: "Web Drum Kit",
        description: "Web Drum Kit Is A Simple App That Can Play A Drum Sound When A Key Is Pressed.",
        image: "/examples/Web_Drum_Kit.png",
        image2x: "/examples/Web_Drum_Kit.png",
        buttons: [
            {
                text: "Demo",
                link: "https://akashsingh3031.github.io/Web-Drum-Kit",
                icon: (props) => <ShareIcon {...props} />,
            },
        ],
        source: "https://github.com/AkashSingh3031/Web-Drum-Kit",
    },
    {
        title: "Calculator With Voice Recognition",
        description:
            "Calculator With Voice Recognition Is A Simple App That Can Perform Basic Arithmetic Operations.",
        image: "/examples/Calculator_with_Voice_Recognition.png",
        image2x: "/examples/Calculator_with_Voice_Recognition.png",
        buttons: [
            {
                text: "Demo",
                link: "https://akashsingh3031.github.io/Calculator-with-Voice-Recognition",
                icon: (props) => <ShareIcon {...props} />,
            },
        ],
        source: "https://github.com/AkashSingh3031/Calculator-with-Voice-Recognition",
    },
    {
        title: "Color Flipper",
        description:
            "Color Flipper Is A Simple App That Can Change The Background Color Of The Page.",
        image: "/examples/Color_Flipper.png",
        image2x: "/examples/Color_Flipper.png",
        buttons: [
            {
                text: "Demo",
                link: "https://akashsingh3031.github.io/Color-Flipper",
                icon: (props) => <ShareIcon {...props} />,
            },
        ],
        source: "https://github.com/AkashSingh3031/Color-Flipper",
    },
];
