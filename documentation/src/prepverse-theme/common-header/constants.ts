// import { CloudIcon } from "../icons/cloud";
import { HackathonAltIcon } from "../icons/hackathon-alt";
import {
    DocumentsIcon,
    DocsIcon,
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
    CommunityIcon,
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
    // {
    //     label: "PrepVerse Docs",
    //     href: "/docs",
    //     icon: DocsIcon,
    // },
    {
        isPopover: true,
        label: "Docs",
        items: [
            {
                label: "DSA Docs",
                description: "Learning DSA in C++, Python & Java",
                link: "/docs",
                icon: DocumentsIcon,
            },
            {
                label: "Web Tech Docs",
                description: "Learn HTML, CSS, JavaScript",
                link: "/docs/2.Web.Dev",
                icon: ExamplesIcon,
            },
        ],
    },
    {
        isPopover: true,
        label: "CodePoint",
        items: [
            {
                label: "Expert Sheet Solutions",
                description: "Most popular coding questions solutions asked during SDE interviews.",
                link: "https://prepverse.github.io/CodePoint/preface",
                icon: UseCasesIcon,
            },
            {
                label: "Coding Ninjas Series",
                description: "Coding Ninjas Studio Guided Path Solutions",
                link: "https://prepverse.github.io/CodePoint/learning_resources/CN_Series/preface",
                icon: IntegrationsIcon,
            },
            {
                label: "LeetVerse",
                description: "Leetcode problem solutions with full probelm statements in C++, Python & Java",
                link: "https://prepverse.github.io/LeetVerse",
                icon: HackathonsIcon,
            },
        ],
    },
    {
        isPopover: true,
        label: "About",
        items: [
            {
                label: "About Me",
                description: "My information.",
                link: "/AkashSingh3031",
                icon: ContributeIcon,
            },
            {
                label: "Project Showcase",
                description: "PrepVerse open-source projects",
                link: "/showcase",
                icon: TutorialIcon,
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
    {
        isPopover: false,
        label: "PrepVerse Community",
        href: "/prepverse-community",
        icon: CommunityIcon,
    },
];
