// import { CloudIcon } from "../icons/cloud";
import { HackathonAltIcon } from "../icons/hackathon-alt";
import {
    DocumentsIcon,
    IntegrationsIcon,
    TutorialIcon,
    ExamplesIcon,
    AwesomeIcon,
    UseCasesIcon,
    ContributeIcon,
    RefineWeekIcon,
    HackathonsIcon,
    AboutUsIcon,
    StoreIcon,
    MeetIcon,
    BlogIcon,
    NewBadgeIcon,
    PointIcon,
} from "../icons/popover";

export type NavbarPopoverItemType = {
    isPopover: true;
    label: string;
    items: {
        label: string;
        description: string;
        link: string;
        icon: React.FC;
    }[];
};

export type NavbarItemType = {
    isPopover?: false;
    label: string;
    icon?: React.FC;
    href?: string;
};

export type MenuItemType = NavbarPopoverItemType | NavbarItemType;

export const MENU_ITEMS: MenuItemType[] = [
    {
        isPopover: true,
        label: "Code-Point",
        items: [
            {
                label: "Expert Sheet Solutions",
                description: "Most popular coding questions solutions asked during SDE interviews.",
                link: "https://prepverse.github.io/CodePoint/preface",
                icon: DocumentsIcon,
            },
            {
                label: "Coding Ninjas Series",
                description: "Coding Ninjas Studio Guided Path Solutions",
                link: "https://prepverse.github.io/CodePoint/learning_resources/CN_Series/preface",
                icon: IntegrationsIcon,
            },
            {
                label: "PrepVerse Docs",
                description: "Computer science preparations docs",
                link: "/docs",
                icon: TutorialIcon,
            },
        ],
    },
    {
        isPopover: false,
        label: "LeetVerse",
        icon: HackathonAltIcon,
        href: "https://prepverse.github.io/LeetVerse",
    },
    {
        isPopover: true,
        label: "About",
        items: [
            {
                label: "About Me",
                description: "My information.",
                link: "/about",
                icon: ContributeIcon,
            },
            {
                label: "My Portfolio",
                description: "All info about me",
                link: "https://prepverse.github.io/portfolio",
                icon: MeetIcon,
            },
        ],
    },
    {
        isPopover: false,
        label: "Blog",
        href: "/blog",
        icon: BlogIcon,
    },
];
